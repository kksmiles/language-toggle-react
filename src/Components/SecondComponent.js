import React from 'react';
import { content } from '../Contents/SecondComponentContent';
import { LangContext } from '../Contexts/LangContext';

const SecondComponent = (props) => {
  const [ lang ] = React.useContext(LangContext);

  return (
    <div>
      <h1> { content[lang]["heading1"] } </h1>
      <h2> { content[lang]["heading2"] } </h2>
      <p> { content[lang]["paragraph"] } </p>
    </div>
  )
};

export default SecondComponent;