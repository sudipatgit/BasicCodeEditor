import './App.css';
import React, {createContext, useState} from 'react'
import CodingArea from './components/codingArea';
import SelectLang from './components/languageOptions'
import CodeBlockHilighter from './components/codeBlockHilighter';

export const CodingContext = createContext()


function App() {
  const [codingLang, setCodingLang] = useState("javascript")
  const [codeText, setCodeText] = useState('')
  const [showLineNumbers, setShowLineNubers] = useState(false)

  return (
    <CodingContext.Provider value={{codingLang, codeText, setCodingLang, setCodeText, showLineNumbers, setShowLineNubers}}>
      <div style={{marginLeft : 30, marginTop: 20, height: 600, width: "90%", backgroundColor : '#87CEEB'}}>
        <div>
          <SelectLang />
        </div>
        <div className='container' >
            <CodingArea />
            <CodeBlockHilighter />
        </div>
      </div>
    </ CodingContext.Provider>
  );
}

export default App;
