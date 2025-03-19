import { useEffect } from "react";
import about from "../../images/about.svg";
import { useTranslation } from "react-i18next";


const About = () => {
  const {t}= useTranslation();

  useEffect(()=>{
    document.title=`${t("About.Headline")} | The Homework AI`;
    window.scrollTo({top: 0, left: 0, behavior: "smooth" });
  }, [t]);
  return (
    <section className="flex text-center justify-center text-white flex-col lg:py-32 md:py-12 sm:py-6">
      <h1 className="lg:text-6xl text-4xl font-semibold">{t("About.Headline")}</h1>
      <div className="">
        <div className="flex justify-center items-center mt-16">
         <img src={about} className="w-2/5" alt="Hero Forms layout" />
        </div>
        <div className="flex justify-center items-center sm:mb-16">
          <p className="text-lg mt-16 font-normal">“ <span className="font-semibold text-cyan-500">The Homework AI</span> “ {t("About.text")}</p>
        </div>
      </div>
    </section>
  )
}
export default About