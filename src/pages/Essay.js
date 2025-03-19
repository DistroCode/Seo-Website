import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";


import Img from "../images/book.svg";
import GeneralForm from "../components/GeneralForm"
import HeroForms from "../components/Layouts/HeroForms";
import GoogleAnalytics from "../components/AdditionalPages/GoogleAnalytics";


const Essay = () => {
  const generalFormRef = useRef(null);
  const { t } = useTranslation();

  const handleClick = () => {
    generalFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("HomePage.Essay")} | The Homework AI</title>
        <meta rel="canonical" href="/essay-thesis" />
      </Helmet>
      <GoogleAnalytics />
      <HeroForms handleClick={handleClick} Img={Img} copyKey="Essay" />
      <GeneralForm ref={generalFormRef} pageTitle={t("Essay.pageTitle")} maxLength={300} minLength={1} type="ESSAY" label2={t("Essay.label")} />
    </>
  )
}
export default Essay