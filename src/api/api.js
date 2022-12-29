import axios from "axios";


const API = axios.create({baseURL:"https://stackoverflow-server-16ku.onrender.com/"});


export const signIn = (data) => API.post("user/signin",data);
export const signUp = (data) => API.post("user/signup",data);
export const postQuestion = (data) => API.post("/postQuestion",data);
export const fetchQuestion = () => API.get("/getAllQuestions");



