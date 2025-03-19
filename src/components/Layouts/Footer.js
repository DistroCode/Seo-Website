import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useTranslation } from "react-i18next";


const Footer = () => {
    const {t}= useTranslation();
  return (
<footer className="bg-black shadow md:px-6 md:py-8">
    <div className="container mx-auto sm:flex sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img src={logo} className="h-12 mr-3" alt="The Homework Ai Logo" />
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
            <li>
                <Link to="/" className="mr-4 hover:underline md:mr-6 ">{t("menu.home")}</Link>
            </li>
            <li>
                <Link to="/about-us" className="mr-4 hover:underline md:mr-6">{t("menu.about")}</Link>
            </li>
            <li>
                <Link to="/privacy-policy" className="mr-4 hover:underline md:mr-6">{t("menu.privacy")}</Link>
            </li>
            <li>
                <Link to="/contact" className="hover:underline">{t("menu.contact")}</Link>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
    <span className="block sm:pb-6 text-sm text-gray-500 sm:text-center">© <Link to="/" className="hover:underline">The HomeWork AI</Link>. All Rights Reserved.
    </span>
</footer>
  )
}
export default Footer