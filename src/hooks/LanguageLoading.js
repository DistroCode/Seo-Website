import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const useI18nLoading = () => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLanguageChange = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    if (i18n.isInitialized) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      i18n.on("initialized", handleLanguageChange);
    }

    return () => {
      i18n.off("initialized", handleLanguageChange);
    };
  }, [i18n]);

  return loading;
};

export default useI18nLoading;
