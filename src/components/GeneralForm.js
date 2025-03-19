import Button from "./Layouts/Button";
import Content from "./Content";
import { getResponse, uploadExercice } from "../services/openaiService";
import { createRef, forwardRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

import PropTypes from "prop-types";

const GeneralForm = forwardRef(
  ({ pageTitle, label2, type, maxLength, minLength }, generalFormRef) => {
    const { t, i18n } = useTranslation();
    const recaptchaRef = createRef();
    const [validateCaptcha, setValidateCaptcha] = useState("");
    const [error, setError] = useState("");

    const currentLanguage = i18n.language;
    const [formData, setFormData] = useState({
      message: "",
      image: null,
      loading: false,
      generatedText: null,
    });
    const { message, generatedText, loading, image } = formData;

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleStreamResponse = async (response) => {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let chunk = "";
      let generatedText = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n\n").filter((line) => line.trim());

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = JSON.parse(line.replace("data: ", ""));
            if (data.error) throw new Error(data.error);
            if (data.content) {
              generatedText += data.content;
              setFormData((prev) => ({ ...prev, generatedText }));
            }
          }
        }
      }
    };

    const handleVerify = () => {
      const recaptchaValue = recaptchaRef.current.getValue();
      setValidateCaptcha(recaptchaValue);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("")
      if (validateCaptcha) {
        setFormData({ ...formData, loading: true });

        if (type === "UPLOAD") {
          if (!image || !message) {
            alert("Please upload an image and enter a question.");
            setFormData({ ...formData, loading: false });
            return;
          }

          const usageData = JSON.parse(localStorage.getItem("imageUsage")) || {
            count: 0,
            date: new Date().toDateString(),
          };
          const today = new Date().toDateString();

          if (usageData.date !== today) {
            usageData.count = 0;
            usageData.date = today;
          }

          if (usageData.count >= 10) {
            setError("You've reached the 10 images limit, try again tomorrow!");
             setFormData((prev) => ({ ...prev, loading: false }));
            return;
          }

          const formDataToSend = new FormData();
          formDataToSend.append("image", image);
          formDataToSend.append(
            "question",
            message + ` Everything should be in ${currentLanguage}`
          );
          try {
            const res = await uploadExercice(formDataToSend);
            if (res.status === 429) {
              const errorText = await res.text();
              setError(
                errorText.error ||
                  "You’ve reached the 10 images limit, try again to upload after 24 hours or continue using our AI with only the text !"
              );
            } else if (res.ok) {
              handleStreamResponse(res);
              setFormData((prev) => ({ ...prev, generatedText: res }));
              usageData.count += 1;
              localStorage.setItem("imageUsage", JSON.stringify(usageData));
            } else {
              const err = await res.json();
              setError(err.error || err || "Failed to get a Response");
            }
          } catch (error) {
            setFormData((prev) => ({
              ...prev,
              generatedText: "Failed to get a response.",
            }));
          } finally {
            setFormData((prev) => ({ ...prev, loading: false }));
          }
        } else {
          const promptTemplates = {
            MATHEMATICS: `Please solve this math problem (${message}). Everything should be in [${currentLanguage}], and provide a step-by-step explanation of your work.`,
            BOOK_RESUME: `Please provide a summary of the plot, main characters, and themes of the book [${message}]. Everything should be in [${currentLanguage}].`,
            SCIENCE: `Please explain the scientific concept or theory behind (${message}) and provide examples or applications of it in real-world scenarios. Everything should be in [${currentLanguage}].`,
            ART: `Please explain the meaning and significance of (${message}) and how it relates to the broader context of art history. Everything should be in [${currentLanguage}].`,
            PHYSICS: `Answer the following physics-related question in a clear and detailed manner, including explanations and steps taken to reach the solution: [${message}]. Everything should be in [${currentLanguage}]`,
            HISTORY: `Answer the following history-related question in a comprehensive manner, including relevant background information and explanations: [${message}]. Everything should be in [${currentLanguage}].`,
            LITERATURE: `Answer the following literature-related question in a concise and relevant manner: [${message}]. Everything should be in [${currentLanguage}].`,
            GENERAL_WILLING: `Answer the following well-defined question in a comprehensive manner, including relevant background information and explanations: [${message}]. Everything should be in [${currentLanguage}].`,
            ESSAY: `Write a 4 paragraphs argumentative essay on the topic of [${message}]. In your essay, provide clear evidence and analysis to support your thesis statement, which should argue a specific viewpoint on the issue. Everything should be in [${currentLanguage}] and without plagiarism.`,
          };

          const prompt = promptTemplates[type];

          if (!prompt) {
            setFormData({ ...formData, loading: false });
            return;
          }

          try {
            const result = await getResponse(prompt);
            if (result.status === 429) {
              const errorText = await result.text();
              setError(
                errorText.error ||
                  "You've reached the maximum number of requests. Please try again later."
              );
            } else if (result.ok) {
              handleStreamResponse(result);
              setFormData({ ...formData, generatedText: result });
            } else {
              const err = await result.json();
              setError(err.error || err || "Failed to get a Response");
            }
          } catch (error) {
          } finally {
            setFormData({ ...formData, loading: false });
          }
        }
      } else {
        alert("Please complete the CAPTCHA before proceeding.");
      }
    };

    useEffect(() => {
      if (generalFormRef?.current) generalFormRef.current.focus();
    }, [generalFormRef]);

    const handleImageChange = (e) => {
      const file = e.target.files[0];

      if (file) {
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
          alert("File size should not be greater than 5MB.");
          return;
        }

        setFormData({ ...formData, image: file });
      }
    };

    return (
      <>
        <section
          ref={generalFormRef}
          className="flex justify-center flex-col lg:pb-32 lg:pt-6 md:pb-12 md:pt-4 sm:py-6"
        >
          <h3 className="text-4xl font-bold text-white text-center mt-6 mb-12 leading-relaxed">
            {pageTitle}
          </h3>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-md font-medium text-cyan-500"
                >
                  {label2}
                </label>
                {error && (
                  <p className="text-red-500 text-lg mb-2">
                    {error.error || error}
                  </p>
                )}
                {type === "UPLOAD" && (
                  <div>
                    {image && (
                      <div className="mb-4">
                        <img
                          src={URL.createObjectURL(image)}
                          alt="Uploaded Preview"
                          className="rounded-md w-[180px] h-[180px] object-cover"
                        />
                      </div>
                    )}

                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />

                    <button
                      type="button"
                      className="bg-cyan-500 text-white mb-4 px-3 py-2 text-sm font-medium text-center  rounded-lg w-[300px] hover:bg-cyan-600 transition"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    >
                      {t("UploadExercice.p1")}
                    </button>
                  </div>
                )}
                <textarea
                  id="message"
                  minLength={minLength}
                  value={message}
                  onChange={handleChange}
                  name="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm rounded-lg border focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder={label2}
                ></textarea>
                <p className="mt-2 text-sm text-gray-400">
                  {t("generalForm.p1")}
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  {t("generalForm.p2")}
                </p>
              </div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY}
                onChange={handleVerify}
              />
              <Button loading={loading} />
            </form>
            <Content generatedText={generatedText} loading={loading} />
          </div>
        </section>
      </>
    );
  }
);
GeneralForm.propTypes = {
  message: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
};
export default GeneralForm;
