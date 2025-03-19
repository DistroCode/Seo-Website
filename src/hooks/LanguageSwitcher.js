import { useEffect } from "react";
import { languageMap } from "../constants/constants.";

const useLanguageEffect = (i18n, setSelectedCountry, getFlag, countries) => {
  useEffect(() => {
    const language = languageMap[i18n.language] ? languageMap[i18n.language] : 'english';
    if (language !==undefined || language !=='undefined' || language !==null) {
      i18n.changeLanguage(language.toLowerCase());
      setSelectedCountry({
        name: language,
        flag: getFlag(countries, language),
      });
    } 
  }, []);
};

export default useLanguageEffect;
