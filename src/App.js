import './App.css';
import React, {createContext, useState} from 'react'
import CodingArea from './components/codingArea';
import SelectLang from './components/languageOptions'
import CodeBlockHilighter from './components/codeBlockHilighter';

export const CodingContext = createContext()


function App() {
  const [codingLang, setCodingLang] = useState("javascript")
  const [codeText, setCodeText] = useState('')

  return (
    <CodingContext.Provider value={{codingLang, codeText, setCodingLang, setCodeText}}>
        <SelectLang />
      <div>
        <CodingArea />
        <CodeBlockHilighter />
      </div>
    </ CodingContext.Provider>
  );
}

export default App;
