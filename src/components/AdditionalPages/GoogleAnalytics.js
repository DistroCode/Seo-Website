import { useEffect } from 'react';

const GoogleAnalytics = () => {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=G-3WFK28MVS9`;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3WFK28MVS9');
    `;
        document.head.appendChild(script2);

        return () => {
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, []);

    return null;
};

export default GoogleAnalytics;
