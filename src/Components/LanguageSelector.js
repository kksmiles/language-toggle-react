import React, { useContext } from "react";
import { LangContext } from "../Contexts/LangContext";

const LanguageSelector = (props) => {
  const [lang, setLang] = useContext(LangContext);

  let handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    document.documentElement.setAttribute("lang", event.target.value);
  };

  return (
    <>
      <label for="language"> Select Langauge : </label>

      <select name="language" onChange={handleChange} value={lang}>
        <option value="en"> English </option>
        <option value="mm"> Myanmar </option>
      </select>  
    </>
  );
};
export default LanguageSelector;
