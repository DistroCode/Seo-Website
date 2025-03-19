import axios from "axios";



export const getUserCountry = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code.toLowerCase(); 
  } catch (error) {
    console.error('Error fetching user country:', error);
    return 'us'; 
  }
};






export const getResponse = async (prompt) => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "chatgpt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });
  return response;
};
export const uploadExercice = async (formDataToSend) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "chatgpt/upload-exercice",
    {
      method: "POST",

      body: formDataToSend,
    }
  );

  if (!response.body) {
    console.error("No stream found in the response");
    return;
  }

  return response;
};

export const sendEmail = async (formData) => {
  const response = await axios.post(
    process.env.REACT_APP_BACKEND_URL + "contact",
    formData
  );
  return response;
};
