import create from 'zustand'
import { IAuthUser, INote,ILoginResponse } from '../api/types';


type Store = {
  authUser: IAuthUser | null;
  requestLoading: boolean;
  authToken:String;
  loginResponse:ILoginResponse | null;
 // userNotes: INote[] | null;
  setAuthUser: (user: IAuthUser | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
  //setUserNotes: (notes: INote[] | null) => void;
  setAuthToken:(token: String) =>void;
 setLoginResponse:(loginResponse: ILoginResponse | null) =>void;
 
};

const useStore = create<Store>((set) => ({
  
  authUser: null,
  authToken:"this is jwt token",
requestLoading: false,
loginResponse:null,
setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
setRequestLoading: (isLoading) => set((state) => ({ ...state, requestLoading: isLoading })),
//setAuthenticationToken:()=>
setAuthToken:(token) => set((state) => (
 
  {...state, authToken: token})),
  setLoginResponse:(loggedInRes) =>set((state)=>({...state, loginResponse: loggedInRes}))
  
  
}))



/*

type Store = {
  loginResponse:ILoginResponse | null;
  authUser: IAuthUser | null;
  requestLoading: boolean;
  userNotes: INote[] | null;
authToken:String;
  setAuthUser: (user: IAuthUser | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
  setUserNotes: (notes: INote[] | null) => void;
  setLoginResponse:(token:ILoginResponse | null) =>void;
 setAuthToken:(token: String) =>void;
};


const useStore = create<Store>((set) => ({
  authUser: null,
  requestLoading: false,
  userNotes: null,
  //msr
  loginResponse:null,
  authToken:"",

  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setRequestLoading: (isLoading) => set((state) => ({ ...state, requestLoading: isLoading })),
  setUserNotes: (notes) => set((state) => ({ ...state, userNotes: notes })),
  setLoginResponse:(jwtToken)=>set((state) =>  ({...state, loginResponse: jwtToken})),
  setAuthToken:(token) => set((state) => ({...state, authToken: token}))
  
}));




//original
type Store = {
  authUser: IAuthUser | null;
  requestLoading: boolean;
  userNotes: INote[] | null;
  setAuthUser: (user: IAuthUser | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
  setUserNotes: (notes: INote[] | null) => void;
  
 
};


//original
const useStore = create<Store>((set) => ({
  authUser: null,
  requestLoading: false,
  userNotes: null,
  //msr
  //jwtToken:null,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setRequestLoading: (isLoading) => set((state) => ({ ...state, requestLoading: isLoading })),
  setUserNotes: (notes) => set((state) => ({ ...state, userNotes: notes })),
  
}));
*/
export default useStore;
