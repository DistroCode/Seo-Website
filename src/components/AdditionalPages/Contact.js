import {useState, useEffect} from "react";
import { sendEmail } from "../../services/openaiService";
import HeroForms from "../Layouts/HeroForms";
import Img from "../../images/contact.svg";
import { useTranslation } from "react-i18next";



const Contact = () => {
    const {t}= useTranslation();
    const [sendMessage, setSendMessage] = useState(false);
    const[formData, setFormData]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    });
    const {name, email, subject, message} = formData;

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    
    useEffect(()=>{
        document.title=`${t("Contact.Headline")} | The Homework AI`;
        window.scrollTo({top: 0, left: 0, behavior: "smooth" });
    }, [t]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await sendEmail(formData);
        console.log(response);
        if(response){
            setSendMessage(true);
            setFormData({
                name:"",
                email:"",
                subject:"",
                message:""
            })
        }
    }
  return (
   <>
     <HeroForms copyKey="Contact" Img={Img}/>
    <section className="bg-black">
    {sendMessage && 
        <div className="flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">Success!</span> {t("Contact.Success")}
            </div>
        </div>}
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">{t("Contact.Headline")}</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">{t("Contact.subHeadline")}</p>
        <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block mb-2 text-lg font-medium text-white">{t("Contact.Name")}</label>
                <input type="text" id="name" name="name" value={name} onChange={handleChange} className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" placeholder="John Smith" required />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-lg font-medium text-white">{t("Contact.Email")}</label>
                <input type="email" id="email" name="email" value={email} onChange={handleChange} className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" placeholder="contact@thehomeworkai.com" required />
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-lg font-medium text-white">{t("Contact.Subject")}</label>
                <input type="text" id="subject" name="subject" value={subject} onChange={handleChange} className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-lg font-medium text-white">{t("Contact.Message")}</label>
                <textarea id="message" rows="6" name="message" value={message} onChange={handleChange} className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 outline-none text-sm font-medium text-center text-white bg-cyan-500 sm:w-fit hover:bg-cyan-600 focus:ring-4 focus:outline-none">{t("Contact.send")}</button>
        </form>
    </div>
  </section>
   </>
  )
}
export default Contact