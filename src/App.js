import React from 'react';
import { LangProvider } from './Contexts/LangContext';
import FirstComponent from  './Components/FirstComponent';
import SecondComponent from  './Components/SecondComponent';
import LanguageSelector from './Components/LanguageSelector';

const App = (props) => {
  return (
    <LangProvider>
      <LanguageSelector />
      <FirstComponent />
      <SecondComponent />
    </LangProvider>
  )
}

export default App;
