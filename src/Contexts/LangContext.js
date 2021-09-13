import React, { useState, createContext } from "react";

export const LangContext = createContext();

export const LangProvider = props => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  document.documentElement.setAttribute("lang", lang);

  return (
    <LangContext.Provider value={[ lang, setLang ]}>
      { props.children }
    </LangContext.Provider>
  )
}