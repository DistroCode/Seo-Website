import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import Img from "../images/physic.svg";
import GeneralForm from "../components/GeneralForm"
import HeroForms from "../components/Layouts/HeroForms";
import GoogleAnalytics from "../components/AdditionalPages/GoogleAnalytics";


const Physics = () => {
  const generalFormRef = useRef(null);
  const { t } = useTranslation();

  const handleClick = () => {
    generalFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }, []);

  return (
    <>
      <Helmet>
        <title>{t("HomePage.Physics")} | The Homework AI</title>
        <meta rel="canonical" href="/physics" />
      </Helmet>
      <GoogleAnalytics />
      <HeroForms handleClick={handleClick} Img={Img} copyKey="Physics" />
      <GeneralForm ref={generalFormRef} pageTitle={t("Physics.pageTitle")} maxLength={300} minLength={1} type="PHYSICS" label2={t("Physics.label")} />
    </>
  )
}
export default Physics