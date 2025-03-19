import Spinner from "./Layouts/Spinner";
import ReactMarkdown from "react-markdown";

import { useState } from "react";

const Content = ({ loading, generatedText }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const copyToClip = () => {
    navigator.clipboard.writeText(generatedText);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };
  return (
    <div className="p-6 bg-gray-800 border border-gray-800 rounded-lg shadow-md sm:my-4">
      {!loading && generatedText && (
        <ReactMarkdown
          className="text-normal text-white font-semibold"
          children={generatedText}
        />
      )}
      {loading && (
        <div className="flex items-center justify-center spinnerH">
          <Spinner />
        </div>
      )}
      {generatedText && (
        <div
          className="cursor-pointer text-cyan-500 font-semibold mt-4 text-lg hover:text-cyan-900"
          onClick={copyToClip}
        >
          <i className="fa-regular fa-copy"></i>
          <span className="ml-2">Copy to Clipboard</span>
        </div>
      )}
      {isSuccess && (
        <p className="text-md text-green-500 font-light">The text is copied</p>
      )}
    </div>
  );
};
export default Content;
