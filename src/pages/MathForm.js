import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import GeneralForm from "../components/GeneralForm"
import HeroForms from "../components/Layouts/HeroForms";
import Img from "../images/math.svg";
import GoogleAnalytics from "../components/AdditionalPages/GoogleAnalytics";

const MathForm = () => {
  const generalFormRef = useRef(null);
  const { t } = useTranslation();

  const handleClick = () => {
    generalFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }, []);

  return (
    <>
      <Helmet>
        <title>{t("HomePage.Math")} | The Homework AI</title>
        <meta rel="canonical" href="/math" />
      </Helmet>
      <GoogleAnalytics />
      <HeroForms handleClick={handleClick} Img={Img} copyKey="Math" />
      <GeneralForm ref={generalFormRef} pageTitle={t("Math.pageTitle")} maxLength={500} minLength={1} type="MATHEMATICS" label2={t("Math.label")} />
    </>
  )
}
export default MathForm