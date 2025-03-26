import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useDetectAdBlock } from "adblock-detect-react";
import AdblockModal from "../AdblockModal";
import { countries } from "../../constants/constants.";
import useLanguageEffect from "../../hooks/LanguageSwitcher";
import classNames from "classnames";

const FlagDropdown = ({ selectedCountry, countries, onSelect }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleSelect = (code, name) => {
    onSelect(code, name);
    setIsClicked(false);
  };
  return (
    <>
      {selectedCountry && selectedCountry.flag && (
        <div className="flag-dropdown">
          <div
            className="selected-item"
            onClick={() => setIsClicked(!isClicked)}
          >
            <img
              className="mr-3"
              src={selectedCountry.flag}
              alt={selectedCountry.name}
            />
            <span className="selectedCountry mt-[4px]">
              {selectedCountry.name}
            </span>
            <i className={`ml-8 fas fa-caret-${isClicked ? "up" : "down"}`}></i>
          </div>
          {isClicked && (
            <ul className="dropdown-list">
              {countries.map((country) => (
                <li
                  key={country.name}
                  className="hover:bg-gray-800 mb-2 cursor-pointer"
                  onClick={() => handleSelect(country.code, country.name)}
                >
                  <img src={country.flag} alt={country.name} />
                  <span className="selectedCountry">{country.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export const DownloadButton = ({ className, t }) => (
  // <a
  //   href="https://bit.ly/TheHomeworkAI"
  //   rel="noreferrer"
  //   target="_blank"
  //   className={classNames(
  //     "big-button flex",
  //     className
  //   )}
  // >
  //   {t("hero.download_btn")}
  //   <img
  //     className="ml-2 lg:w-[25px] w-[20px]"
  //     src="/images/playstore.png"
  //     alt="Play Store"
  //   />
  //   <img className="ml-2 lg:w-[25px] w-[20px]" src="/images/appStore.png" alt="App Store" />
  // </a>
  <>
  </>
);

const NavLinks = ({ t }) => (
  <>
    <Link
      to="/"
      className="block text-white text-lg lg:inline-block mr-5 hover:text-cyan-500 transition-colors duration-300"
    >
      {t("menu.home")}
    </Link>
    <Link
      to="/about-us"
      className="block text-white text-lg lg:inline-block mr-5 hover:text-cyan-500 transition-colors duration-300"
    >
      {t("menu.about")}
    </Link>
    <Link
      to="/contact"
      className="block text-white text-lg lg:inline-block mr-5 hover:text-cyan-500 transition-colors duration-300"
    >
      {t("menu.contact")}
    </Link>
  </>
);

const Header = () => {
  const adBlockDetected = useDetectAdBlock();
  const [openModal, setOpenModal] = useState(adBlockDetected);

  const { t, i18n } = useTranslation();

  function getFlag(countries, selectedCountry) {
    const country = countries.find(function (country) {
      return country.name.toLowerCase() === selectedCountry.toLowerCase();
    });

    return country ? country.flag : undefined;
  }
  const [selectedCountry, setSelectedCountry] = useState({
    name: i18n.language,
    flag: getFlag(countries, i18n.language),
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language);
  const [isClicked, setIsClicked] = useState(false);

  useLanguageEffect(i18n, setSelectedCountry, getFlag, countries);

  useEffect(() => {
    setOpenModal(adBlockDetected);
  }, [adBlockDetected]);

  const handleClick = (code, name) => {
    setLanguage(code);
    i18n.changeLanguage(code);
    setSelectedCountry({ name: name, flag: getFlag(countries, name) });
    setIsClicked(false);
  };

  return (
    <>
      <AdblockModal openModal={openModal} />
      <header className="bg-black h-[76px]">
        <nav className="h-full font-nunito items-center container mx-auto flex justify-between py-4 relative">
          <div className="flex items-center">
            <Link to="/" id="logo">
              <img
                className="lg:w-[200px] w-[150px]"
                src={logo}
                alt="TheHomework AI logo"
              />
            </Link>
            <FlagDropdown
              selectedCountry={selectedCountry}
              countries={countries}
              onSelect={handleClick}
            />
          </div>

          {/* <div className="hidden lg:flex mr-[92px]">
            <DownloadButton
              t={t}
              className="text-md mt-2"
            />
          </div> */}
          <div
            className={classNames(
              "lg:flex text-lg font-semibold",
              menuOpen ? "z-50 absolute px-4 bg-black w-full py-2 top-20 h-auto" : "hidden"
            )}
          >
            <NavLinks t={t} />
          </div>

          <span
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden absolute right-4 top-6 text-white font-semibold text-lg cursor-pointer"
          >
            <i className="fa-solid fa-bars"></i>
          </span>
        </nav>
      </header>
    </>
  );
};
export default Header;
