import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import About from "./components/AdditionalPages/About";
import Contact from "./components/AdditionalPages/Contact";
import Privacy from "./components/AdditionalPages/Privacy";
import NotFound from "./components/Layouts/NotFound";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MathForm from "./pages/MathForm";
import BooksResume from "./pages/BooksResume";
import Science from "./pages/Science";
import Art from "./pages/Art";
import Literature from "./pages/Literature";
import GeneralWilling from "./pages/GeneralWilling";
import Physics from "./pages/Physics";
import History from "./pages/History";
import Essay from "./pages/Essay";

import ReactGA from "react-ga4";
import { useEffect } from "react";
import useUpdateCache from "./hooks/UpdateCache";
import UploadImage from "./pages/UploadImage";

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

function App() {
  useUpdateCache();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search});
  }, []);

  return (
    <>
      <Router>
        <Header />
        <main className="flex min-h-screen font-nunito bg-black">
          <div className="container mx-auto px-12 sm:px-4 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/upload-exercice" element={<UploadImage />} />
              <Route path="/math" element={<MathForm />} />
              <Route path="/summary" element={<BooksResume />} />
              <Route path="/science" element={<Science />} />
              <Route path="/literature" element={<Literature />} />
              <Route path="/general-knowledge" element={<GeneralWilling />} />
              <Route path="/art" element={<Art />} />
              <Route path="/physics" element={<Physics />} />
              <Route path="/history" element={<History />} />
              <Route path="/essay-thesis" element={<Essay />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
