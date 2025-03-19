import { useTranslation } from "react-i18next";
import { DownloadButton } from "./Header";

const Hero = ({ handleClick }) => {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative flex justify-center items-center flex-col lg:py-32 py-12">
        <div className="lg:hidden z-10 absolute top-0 left-1/2 translate-x-[-50%] flex items-center justify-center">
          <DownloadButton t={t} className="text-sm mt-4 w-[220px]" />
        </div>
        <div className="text-center mt-4 lg:mt-0">
          <div className="flex justify-center items-center flex-col">
            <h1 className="lg:text-6xl text-4xl text-white font-bold leading-relaxed">
              {t("hero.Headline")}
              <br></br>
              <span className="text-cyan-500">{t("hero.span_Headline")}</span>
            </h1>
            <h2 className="mt-2 text-gray-500 lg:text-lg text-sm max-w-2xl">
              {t("hero.sub_Headline")}
            </h2>
            <button
              onClick={handleClick}
              className="mt-4 rounded-full bg-cyan-500 text-zinc-100 px-8 py-4 hover:bg-cyan-300"
            >
              {t("hero.start_btn")}
            </button>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center py-4">
        <div className="grid lg:grid-cols-3 gap-7 text-white border-b-2 border-gray-600">
          <div className="text-center p-6">
            <h4 className="font-semibold text-xl">
              10+ {t("hero.subcopy.Home_1")}
            </h4>
            <p className="text-md text-gray-500 mt-1">
              {t("hero.subcopy.Home_text_1")}
            </p>
          </div>
          <div className="text-center p-6">
            <h4 className="font-semibold text-xl">
              {t("hero.subcopy.Home_2")}
            </h4>
            <p className="text-md text-gray-500 mt-1">
              {t("hero.subcopy.Home_text_2")}
            </p>
          </div>
          <div className="text-center p-6">
            <h4 className="font-semibold text-xl">
              24H {t("hero.subcopy.Home_3")}
            </h4>
            <p className="text-md text-gray-500 mt-1">
              {t("hero.subcopy.Home_text_3")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
