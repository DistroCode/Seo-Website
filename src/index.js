import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import "./assets/custom.css";
import i18n from "./i18n";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import reportWebVitals from "./reportWebVitals";
import Spinner from "./components/Layouts/Spinner";
import { I18nextProvider } from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback={<Spinner />}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Suspense>
  </I18nextProvider>
);

reportWebVitals();
