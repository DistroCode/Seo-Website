import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

import Img from "../images/science.svg";
import GeneralForm from "../components/GeneralForm"
import HeroForms from "../components/Layouts/HeroForms";
import { useTranslation } from "react-i18next";
import GoogleAnalytics from "../components/AdditionalPages/GoogleAnalytics";


const Science = () => {
  const generalFormRef = useRef(null);
  const { t } = useTranslation();

  const handleClick = () => {
    generalFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }, []);
  return (
    <>
      <Helmet>
        <title>{t("HomePage.Science")} | The Homework AI</title>
        <meta rel="canonical" href="/science" />
      </Helmet>
      <GoogleAnalytics />
      <HeroForms handleClick={handleClick} Img={Img} copyKey="Science" />
      <GeneralForm ref={generalFormRef} pageTitle={t("Science.pageTitle")} maxLength={300} minLength={1} type="SCIENCE" label2={t("Science.label")} />
    </>
  )
}
export default Science