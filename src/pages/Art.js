import { useEffect, useRef } from "react";

import Img from "../images/art.svg";
import GeneralForm from "../components/GeneralForm"
import HeroForms from "../components/Layouts/HeroForms";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import GoogleAnalytics from "../components/AdditionalPages/GoogleAnalytics";



const Art = () => {
  const generalFormRef = useRef(null);
  const { t } = useTranslation();


  const handleClick = () => {
    generalFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }, []);
  return (
    <>
      <Helmet>
        <title>{t("HomePage.Art")} | The Homework AI</title>
        <meta
          name="description"
          content={t("HomePage.Subtitle") || "Get instant help with homework using Homework AI at TheHomeworkAI.com. Our AI homework helper offers solutions for math, physics, and more. From AI for homework to a homework AI free service, explore the power of math AI, physics AI solvers, and homework helper AI to ace your assignments fully free with no sign up !"} />
        <meta rel="canonical" href="/art" />
      </Helmet>
      <GoogleAnalytics />
      <HeroForms handleClick={handleClick} Img={Img} copyKey="Art" />
      <GeneralForm ref={generalFormRef} pageTitle={t("Art.pageTitle")} minLength={1} type="ART" label2={t("Art.label")} />
    </>
  )
}
export default Art