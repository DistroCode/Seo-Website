import Button from "./Layouts/Button";
import {getResponse} from "../services/openaiService";
import Content from "../components/Content";
import { useState } from "react";
import PropTypes from 'prop-types';


const Input = ({type, selectData, label, btnText, maxLength, minLength}) => { 
  const [formData, setFormData] = useState({
    title:"",
    dataType:"",
    loading:false,
    generatedText:null
  });
  const {title, dataType, generatedText, loading} = formData;
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({...formData, loading:true});
    let prompt;
    if(type==="GENERATE_BLOG"){
      prompt = `Write a creative ${dataType} for my blog the title is ${title}`;
      // prompt = `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "I don't have knowledge for this question", my question is ${title}?`;
    } else if(type==="SOCIAL_MEDIA_POST"){
      prompt = `Write a creative ${dataType} post with 100 words about: ${title}?`;
    }
    const result = await getResponse(prompt);
    setFormData({...formData, generatedText:result, loading:false});
 }
  return (   
    <section className="flex justify-center flex-col py-20">
     <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
       <form onSubmit={handleSubmit}>
          <div className="mb-6">
          <div className="form-group">
                <label htmlFor="dataType" className="block mb-2 text-md font-medium text-cyan-800 dark:text-white">Select from the list</label>
                <select value={dataType} onChange={handleChange} id="dataType" name="dataType" className="outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 capitalize dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {selectData.map((item)=>{
                    return <option key={item} value={item}>{item}</option>
                  })}
                </select>
              </div>
              <div className="form-group mt-4">
                <label htmlFor="title" className="block mb-2 text-md font-medium text-cyan-800 dark:text-white">{label}</label>
                <input type="text" minLength={minLength} name="title" id="title" value={title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:outline-none dark:text-white" placeholder={label} />
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">Be as specific as you can.</p>
              </div>
          </div>
          <Button btnText={btnText} loading={loading}/>
      </form>
      <Content generatedText={generatedText} loading={loading} />
    </div>
   </section>
  )
}
Input.propTypes = {
  title:PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
}
export default Input;