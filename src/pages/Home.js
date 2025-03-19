import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Hero from "../components/Layouts/Hero";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import GoogleAnalytics from "../components/AdditionalPages/GoogleAnalytics";
import { data } from "../constants/constants.";

const Home = () => {
  const generalFormRef = useRef(null);
  const { t } = useTranslation();

  const handleClick = () => {
    generalFormRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* <Helmet>
        <title>The Homework AI : Unlimited AI Homework Helper - Free No Sign Up</title>
        <meta
          name="description"
          content="Get instant help with homework using Homework AI at TheHomeworkAI.com. Our AI homework helper offers solutions for math, physics, and more. From AI for homework to a homework AI free service, explore the power of math AI, physics AI solvers, and homework helper AI to ace your assignments fully free with no sign up !"
        />
        <meta rel="canonical" href="/" />
      </Helmet> */}


      <Helmet>
        <title>{t("HomePage.Title")}</title>
        <meta
          name="description"
          content={t("HomePage.Subtitle") || "Get instant help with homework using Homework AI at TheHomeworkAI.com. Our AI homework helper offers solutions for math, physics, and more. From AI for homework to a homework AI free service, explore the power of math AI, physics AI solvers, and homework helper AI to ace your assignments fully free with no sign up !"} />
        <meta rel="canonical" href="/" />
      </Helmet>


      <GoogleAnalytics />
      <Hero handleClick={handleClick} />
      <section className="py-12 flex items-center justify-center">
        <div ref={generalFormRef} className="text-center">
          <h3 className="lg:text-4xl text-2xl text-white font-bold leading-relaxed">
            {t("HomePage.Headline")}
            <br></br>{" "}
            <span className="text-cyan-500">{t("HomePage.spanHeadline")}</span>
          </h3>
          <div className="grid lg:grid-cols-3 gap-6 justify-center items-stretch lg:py-20 py-12">
            <Link
              to="/upload-exercice"
              className="relative cursor-pointer max-w-sm py-8 px-6 bg-gray-800 hover:shadow-lg rounded-lg shadow-md flex justify-center items-center flex-col"
            >
              <span className="absolute bottom-[-4px] right-1/2 translate-x-1/2 bg-red-500 text-white text-cm font-bold py-1 px-3 rounded-lg">
                NEW!
              </span>
              <h3 className="text-3xl text-cyan-500">
                <i className={`fa-solid fa-camera`}></i>
              </h3>
              <p className="my-2 text-xl font-semibold text-white">
                {t(`HomePage.upload`)}
              </p>
              <p className="leading-relaxed mb-3 font-normal text-gray-500">
                {t(`UploadExercice.subcopy`)}
              </p>
            </Link>
            {data.map((item) => {
              return (
                <Link
                  to={item.link}
                  key={item.id}
                  className="cursor-pointer max-w-sm py-8 px-6 bg-gray-800 hover:shadow-lg rounded-lg shadow-md flex justify-center items-center flex-col"
                >
                  <h3 className="text-3xl text-cyan-500">
                    <i className={`fa-solid ${item.icone}`}></i>
                  </h3>
                  <p className="my-2 text-xl font-semibold text-white">
                    {t(`HomePage.${item.title}`)}
                  </p>
                  <p className="leading-relaxed mb-3 font-normal text-gray-500">
                    {t(`${item.title}.subcopy`)}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
