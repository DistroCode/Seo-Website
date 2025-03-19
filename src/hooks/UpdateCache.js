import { useEffect } from "react";
import packageJson from "../../package.json";

const useUpdateCache = () => {
  useEffect(() => {
    const checkAndUpdateCache = () => {
      let version = localStorage.getItem("version_thehomeworkai");
      if (version !== packageJson.version) {
        if ("caches" in window) {
          caches.keys().then((names) => {
            names.forEach((name) => {
              caches.delete(name);
            });
          });

          window.location.reload(true);
        }

        localStorage.clear();
        localStorage.setItem("version_thehomeworkai", packageJson.version);
      }
    };

    checkAndUpdateCache();
  }, []);
};

export default useUpdateCache;
