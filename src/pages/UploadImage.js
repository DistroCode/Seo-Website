import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import GoogleAnalytics from "../components/AdditionalPages/GoogleAnalytics";
import { useTranslation } from "react-i18next";
import HeroForms from "../components/Layouts/HeroForms";
import Img from "../images/upload.svg";
import GeneralForm from "../components/GeneralForm";

export default function UploadImage() {
  const generalFormRef = useRef(null);
  const { t } = useTranslation();


  const handleClick = () => {
    generalFormRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("HomePage.upload")} | The Homework AI</title>
      
        <meta rel="canonical" href="/upload-exercice" />
      </Helmet>
      <GoogleAnalytics />
      <HeroForms handleClick={handleClick} Img={Img} copyKey="UploadExercice" />
      <GeneralForm
        ref={generalFormRef}
        pageTitle={t("UploadExercice.pageTitle")}
        maxLength={300}
        minLength={1}
        type="UPLOAD"
        label2={t("UploadExercice.label")}
      />
    </>
  );
}
