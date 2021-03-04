import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import { createContext, ReactNode, useEffect, useState } from "react";

interface LoginData{
  auth: boolean;
  name: string;
  picture: string;
}

interface LoginContextData {
  loginData: LoginData;
  responseFacebook: (response: any) => void;
  responseGoogle: (response: any) => void;
  responseGoogleFail: (response: any) => void
}

interface LoginContextProps {
  children: ReactNode;
  name: string;
  picture: string; 
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({ 
  children,
  ...rest
}: LoginContextProps) {
  const router = useRouter(); 

  const [loginData, setLoginData] = useState({
    auth: true,
    name: rest.name,
    picture: rest.picture
  } ?? {} as LoginData);

  const responseFacebook = (response) => {
    if(response.status !== 'unknown'){
      setLoginData({
        auth: true,
        name: response.name,
        picture: response.picture.data.url
      })
      Cookies.set('name', response.name);
      Cookies.set('picture', response.picture.data.url);         
      router.push('/Main')
    }
  }

  const responseGoogle = (response) => {
    setLoginData({
      auth: true,
      name: response.profileObj.name,
      picture: response.profileObj.imageUrl
    })
    Cookies.set('name', response.profileObj.name);
    Cookies.set('picture', response.profileObj.imageUrl);         
    router.push('/Main')
  }

  const responseGoogleFail = (response) => {
    console.log('google failed', response);
  }
  
  return (
    <LoginContext.Provider 
    value={{ 
      loginData,
      responseFacebook,
      responseGoogle,
      responseGoogleFail,
      }}>
      {children}
    </LoginContext.Provider>
  );
}