import React, { useEffect, useContext } from 'react';
import { CodingContext } from '../App';
import Prism from 'prismjs';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/themes/prism-twilight.css";


const highlightingStyle = {
  position: 'absolute', 
  top: 40, 
  left: 10, 
  width: "50%",
  margin: 10,
  padding: 10,
  height: 500,
  fontSize: 15,
  fontFamily: "monospace",
  lineHeight: 2,
  zIndex: 0,
  overflowX: 'auto',
  overflowY: 'auto',
}


const CodeBlockHilighter = () => {

    const {codeText, codingLang} = useContext(CodingContext)
    
    useEffect(() => {
      Prism.highlightAll();
    }, [codeText]);

      return (
        <pre className="line-numbers" style={highlightingStyle} >
          <code className={`language-${codingLang}`} style={{fontSize: 15, fontFamily: "monospace", left : 30}}>
            {codeText}
          </code>
        </pre>
      );
}

export default CodeBlockHilighter;