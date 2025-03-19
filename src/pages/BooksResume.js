import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

import Img from "../images/book.svg";
import GeneralForm from "../components/GeneralForm"
import HeroForms from "../components/Layouts/HeroForms";
import { useTranslation } from "react-i18next";
import GoogleAnalytics from "../components/AdditionalPages/GoogleAnalytics";


const BooksResume = () => {
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
        <title>{t("HomePage.BooksResume")} | The Homework AI</title>
        <meta rel="canonical" href="/summary" />
      </Helmet>
      <GoogleAnalytics />
      <HeroForms handleClick={handleClick} Img={Img} copyKey="BooksResume" />
      <GeneralForm ref={generalFormRef} pageTitle={t("BooksResume.pageTitle")} maxLength={300} minLength={1} type="BOOK_RESUME" label2={t("BooksResume.label")} />
    </>
  )
}
export default BooksResume