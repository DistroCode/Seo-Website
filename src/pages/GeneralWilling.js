import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

import Img from "../images/general.svg";
import GeneralForm from "../components/GeneralForm";
import HeroForms from "../components/Layouts/HeroForms";
import { useTranslation } from "react-i18next";
import GoogleAnalytics from "../components/AdditionalPages/GoogleAnalytics";


const GeneralWilling = () => {
  const generalFormRef = useRef(null);
  const { t } = useTranslation();

  const handleClick = () => {
    generalFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }, []);

  return (
    <>
      <Helmet>
        <title>{t("HomePage.GeneralWilling")} | The Homework AI</title>
        <meta rel="canonical" href="/general-knowledge" />
      </Helmet>
      <GoogleAnalytics />
      <HeroForms handleClick={handleClick} Img={Img} copyKey="GeneralWilling" />
      <GeneralForm ref={generalFormRef} pageTitle={t("GeneralWilling.pageTitle")} maxLength={300} minLength={1} type="GENERAL_WILLING" label2={t("GeneralWilling.label")} />
    </>
  )
}
export default GeneralWilling