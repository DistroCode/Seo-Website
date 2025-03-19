import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

import Img from "../images/literature.svg";
import GeneralForm from "../components/GeneralForm"
import HeroForms from "../components/Layouts/HeroForms";
import { useTranslation } from "react-i18next";
import GoogleAnalytics from "../components/AdditionalPages/GoogleAnalytics";


const Literature = () => {
  const generalFormRef = useRef(null);
  const { t } = useTranslation();


  const handleClick = () => {
    generalFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }, []);

  return (
    <>
      <Helmet>
        <title>{t("HomePage.Literature")} | The Homework AI</title>
        <meta rel="canonical" href="/literature" />
      </Helmet>
      <GoogleAnalytics />
      <HeroForms handleClick={handleClick} Img={Img} copyKey="Literature" />
      <GeneralForm ref={generalFormRef} pageTitle={t("Literature.pageTitle")} maxLength={300} minLength={1} type="LITERATURE" label2={t("Literature.label")} />
    </>
  )
}
export default Literature;