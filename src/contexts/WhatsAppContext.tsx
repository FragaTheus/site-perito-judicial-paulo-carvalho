import { createContext, useContext } from "react";

interface IWppContextProps {
  enviarMsg: (msg?: string) => void;
}

const WppContext = createContext({} as IWppContextProps);

interface IWppProviderProp {
  children: React.ReactNode;
}

export const WppProvider: React.FC<IWppProviderProp> = ({ children }) => {
  const numero = "5511972248445";
  const enviarMsg = (msg = "Olá, Paulo! Entrei em contato pelo site para tirar dúvidas e obter mais informações sobre os seus serviços.") => {
    const link = `http://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
    window.open(link, "_blank");
  };

  return (
    <WppContext.Provider value={{ enviarMsg }}>{children}</WppContext.Provider>
  );
};

export const useWppContext = () => {
  return useContext(WppContext);
};
