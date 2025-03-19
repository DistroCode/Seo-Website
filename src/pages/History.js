import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import Img from "../images/history.svg";
import GeneralForm from "../components/GeneralForm"
import HeroForms from "../components/Layouts/HeroForms";
import GoogleAnalytics from "../components/AdditionalPages/GoogleAnalytics";


const History = () => {
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
        <title>{t("HomePage.History")} | The Homework AI</title>
        <meta rel="canonical" href="/history" />
      </Helmet>
      <GoogleAnalytics />
      <HeroForms handleClick={handleClick} Img={Img} copyKey="History" />
      <GeneralForm ref={generalFormRef} pageTitle={t("History.pageTitle")} maxLength={300} minLength={1} type="HISTORY" label2={t("History.label")} />
    </>
  )
}
export default History