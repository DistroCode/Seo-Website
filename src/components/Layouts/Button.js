import { useTranslation } from "react-i18next";


const Button = ({ loading}) => {
  const {t}= useTranslation();

  return (
    <button disabled={loading} className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-transparent hover:text-cyan-500 border border-cyan-500 focus:outline-none">
        {loading && <div className="border-x-cyan-600 border-y-cyan-300 border-2 animate-spin inline-block w-6 h-6 rounded-full mr-3"></div>}
        {t("generalForm.generate_btn")}
        <svg className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
    </button>
  )
}
export default Button;