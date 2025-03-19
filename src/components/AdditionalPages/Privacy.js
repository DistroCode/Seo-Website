import { useEffect } from "react";
import { useTranslation } from "react-i18next";


const Privacy = () => {
  const {t}= useTranslation();
  useEffect(()=>{
    document.title=`${t("Privacy.Headline")} | The Homework AI`;
    window.scrollTo({top: 0, left: 0, behavior: "smooth" });
  }, [t]);

  return (
    <section className="flex justify-center text-white flex-col lg:py-32 md:py-12 sm:py-6 sm:my-6">
      <h1 className="lg:text-6xl md:text-4xl text-4xl mt-2 text-center font-semibold">{t("Privacy.Headline")}</h1>
      <p className="text-lg lg:mt-16 mt-6 font-light">{t("Privacy.Intro")}</p>
        <h2 className="text-xl font-semibold my-4">{t("Privacy.Consent")}</h2>

        <p className="text-lg font-light">{t("Privacy.ConsentText")}</p>

        <h2 className="text-xl font-semibold my-4">{t("Privacy.Information.title")}</h2>

        <p className="text-lg font-light">{t("Privacy.Information.p1")}</p>
        <p className="text-lg font-light">{t("Privacy.Information.p2")}</p>
        <p className="text-lg font-light">{t("Privacy.Information.p3")}</p>

        <h2 className="text-xl font-semibold my-4">{t("Privacy.UseInformation.title")}</h2>

        <p className="text-lg font-light">{t("Privacy.UseInformation.p1")}</p>
        <ul className="text-lg font-light list-disc	ml-8">
          <li>{t("Privacy.UseInformation.p2")}</li>
          <li>{t("Privacy.UseInformation.p3")}</li>
          <li>{t("Privacy.UseInformation.p4")}</li>
          <li>{t("Privacy.UseInformation.p5")}</li>
          <li>{t("Privacy.UseInformation.p6")}</li>
          <li>{t("Privacy.UseInformation.p7")}</li>
          <li>{t("Privacy.UseInformation.p8")}</li>
        </ul>

          <h2 className="text-xl font-semibold my-4">{t("Privacy.LogFiles.title")}</h2>
          <p className="text-lg font-light">{t("Privacy.LogFiles.p1")}</p>
          <h2 className="text-xl font-semibold my-4">{t("Privacy.Adver.title")}</h2>

          <p className="text-lg font-light">{t("Privacy.Adver.p1")}</p>

          <p className="text-lg font-light">{t("Privacy.Adver.p2")}</p>

          <p className="text-lg font-light">{t("Privacy.Adver.p3")}</p>
          <h2 className="text-xl font-semibold my-4">{t("Privacy.Google.title")}</h2>

          <p className="text-lg font-light">{t("Privacy.Google.p1")}– <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>
          <h2 className="text-xl font-semibold my-4">{t("Privacy.ThirdParty.title")}</h2>

          <p className="text-lg font-light">{t("Privacy.ThirdParty.p1")}</p>

          <p className="text-lg font-light">{t("Privacy.ThirdParty.p2")}</p>

          <h2 className="text-xl font-semibold my-4">{t("Privacy.CCPA.title")}</h2>

          <p className="text-lg font-light">{t("Privacy.CCPA.p1")}</p>
          <p className="text-lg font-light">{t("Privacy.CCPA.p2")}</p>
          <p className="text-lg font-light">{t("Privacy.CCPA.p3")}</p>
          <p className="text-lg font-light">{t("Privacy.CCPA.p4")}</p>
          <p className="text-lg font-light">{t("Privacy.CCPA.p5")}</p>
          <h2 className="text-xl font-semibold my-4">{t("Privacy.GDPR.title")}</h2>

          <p className="text-lg font-light">{t("Privacy.GDPR.p1")}</p>
          <p className="text-lg font-light">{t("Privacy.GDPR.p2")}</p>
          <p className="text-lg font-light">{t("Privacy.GDPR.p3")}</p>
          <p className="text-lg font-light">{t("Privacy.GDPR.p4")}</p>
          <p className="text-lg font-light">{t("Privacy.GDPR.p5")}</p>
          <p className="text-lg font-light">{t("Privacy.GDPR.p6")}</p>
          <p className="text-lg font-light">{t("Privacy.GDPR.p7")}</p>
          <p className="text-lg font-light">{t("Privacy.GDPR.p8")}</p>
         

          <h2 className="text-xl font-semibold my-4">{t("Privacy.children.title")}</h2>

          <p className="text-lg font-light">{t("Privacy.children.p1")}</p>

          <p className="text-lg font-light">{t("Privacy.children.p2")}</p>
    </section>
  )
}
export default Privacy