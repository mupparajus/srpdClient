import axios from 'axios';
import { LoginInput } from '../pages/login.page';
import { RegisterInput } from '../pages/register.page';
import { ResetPasswordInput } from '../pages/resetpassword.page';
import { GenericResponse, ILoginResponse, IUserResponse } from './types';
import useStore from "../store";
// const BASE_URL = "http://localhost:3001/";
const BASE_URL = "http://192.168.0.103:8080/";

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const state=useStore.getState();
let jwtToken=state.loginResponse?.access_token;
let loggedinUser=state.loginResponse?.user;

const jwtauthToken=state.authToken;


authApi.defaults.headers.common['Content-Type'] = 'application/json';
authApi.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
//authApi.defaults.headers.common['Access-Control-Request-Headers']=	'Authorization',
authApi.defaults.headers.common['Access-Control-Allow-Credentials']=true;
authApi.defaults.headers.common['withCredentials']=true;


export const signUpUserFn = async (user: RegisterInput) => {
//   console.log("In AddUser jwtToken "+jwtToken);
//   axios.post("http://localhost:8080/users", data,{headers:{'Authorization':'Bearer '+jwtToken}

//   }).then(navigate("/"));
//  }
debugger;
try{
  const response = await axios.post("http://localhost:8080/register", user);
//  const response = await authApi.post<GenericResponse>('auth/register', user);
//  const response = await authApi.post<GenericResponse>('register', user);
  console.log("signUpUserFn response.data "+response.data);
  return response.data;
}catch(error){
  console.log("signUpUserFn error "+error);
}
};

export const loginUserFn = async (user: LoginInput) => {
  //const store = useStore();
//debugger;
 // const tokens=useStore(state => state.authToken);
 // console.log("tokens ??"+tokens);
 try{
 // const response = await authApi.post<ILoginResponse>("authenticate", user);
  // const response = await authApi.post<ILoginResponse>("users", user);
  console.log("loginUserFn user is"+user);
// const response = await axios.post<ILoginResponse>("http://localhost:8080/authenticate",user);
 const response = await axios.post("http://localhost:8080/authenticate",user);
 console.log("response is "+response);
 console.log("response data is "+response.data)
 //localStorage.setItem(user.username,response.data);
 //console.log("retrived from storage is "+localStorage.getItem(user.username));
 debugger;
 //  return response;
// store.setAuthToken(response.data);
//store.setLoginResponse( response.data);
   return {
        status: "true",
        access_token:  response.data.jwtToken,
        username:response.data.username
     };
 }catch(Error){
  console.log("Error is "+Error);
 }
 // console.log("loginUserFn: ", response.data);
//  return {
//    status: "true",
 //   access_token:
  //    response.data,
 // };
};

export const verifyEmailFn = async (verificationCode: string) => {
  const response = await authApi.get<GenericResponse>(
    `auth/verifyemail/${verificationCode}`
  );
  return response.data;
};

export const logoutUserFn = async () => {
  const response = await authApi.get<GenericResponse>('auth/logout');
  return response.data;
};

export const getMeFn = async () => {
  // const response = await authApi.get<IUserResponse>('users/me');
  const response = await authApi.post<ILoginResponse>("users");
  // return response.data;
  console.log("getMeFn data: ", response.data);
  console.log("getMeResponse: ", getMeResponse);
  return getMeResponse;
};

export const forgotPasswordFn = async (email: string) => {
  debugger;
  let headers={
   // "Accept": "application/json, text/plain, */*",
   // "Access-Control-Allow-Credentials": true,
  //  "Access-Control-Allow-Origin": "http://localhost:3000",
    "withCredentials": false
  }
  
  const response = await authApi.post<GenericResponse>('http://localhost:8080/auth/forgotpassword',{'email':email},headers);
  //const response = await authApi.get('http://localhost:8080/forgotpassword',headers);
 
  return response.data;
};

//export const resetPasswordFn = async (data: ResetPasswordInput, resetCode: string) => {
  export const resetPasswordFn = async (data: ResetPasswordInput, resetCode: string,storedtoken:string) => {
  debugger;
  
 // const response = await authApi.patch<GenericResponse>(`auth/resetpassword/${resetCode}`, data);
 //const response = await authApi.patch(`auth/resetpassword/${resetCode}`, data);
 //const response = await authApi.post(`auth/resetpassword/${resetCode}`, data);
 console.log(" jwtauthToken "+storedtoken);
 const response = await axios.post(`http://localhost:8080/auth/resetpassword/${resetCode}`,data,{headers:{"Authorization":'Bearer '+storedtoken}});
 
  return response.data;
};


// DUMMY SERVER RESPONSES

const loginResponse = {
  status: "true",
  access_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
};

const getMeResponse = {
  status: 'true',
 // headers:{
 //   'Access-Control-Request-Headers':	'Authorization',
 //   'Access-Control-Allow-Credentials':	true
    
 // },
  data: {
    user: {
      name: 'Siva Ravindra',
      email: 'ksrc73@gmail.com',
      role: 'admin',
      photo: '9502133355',
      _id: 'vfcyvjhbjhbbjb',
      id: 'gvhgvhvghvgvhg',
      createdAt: '2023-12-14 10:21:33',
      updatedAt: '2023-12-14 10:21:33',
      __v: 1,
    },
  },
};