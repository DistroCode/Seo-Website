import { useTranslation } from "react-i18next";

const HeroForms = ({handleClick, Img, copyKey, subcopyKey}) => {
  const { t } = useTranslation();

  return (
    <section className="py-24">
        <div className="grid lg:grid-cols-2 items-center gap-4">
            <div className="text-center text-white lg:text-left">
                <h1 className="text-3xl font-bold leading-relaxed">{t(`${copyKey}.copy`)}</h1>
                <h2 className="mt-2 text-gray-500 lg:text-lg text-md max-w-2xl">{t(`${copyKey}.subcopy`)}</h2>
                <button onClick={handleClick} className="mt-4 rounded-full bg-cyan-500 text-zinc-100 px-8 py-4 hover:bg-cyan-300">{t("hero.start_btn")}</button>
            </div>
            <div className="lg:flex justify-center">
                <img src={Img} className="w-1/2 lg:block hidden" alt="Hero Forms layout" />
            </div>
        </div>
    </section>
  )
}
export default HeroForms