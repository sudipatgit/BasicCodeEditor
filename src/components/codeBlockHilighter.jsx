import React, { useEffect, useContext } from 'react';
import { CodingContext } from '../App';
import Prism from 'prismjs';
import 'prismjs/components/prism-java.js';
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import "prismjs/themes/prism-twilight.css";
import "prismjs/themes/prism.css"
import "../css/position.css"


const CodeBlockHilighter = () => {

    const {codeText, codingLang, showLineNumbers} = useContext(CodingContext)
    
    useEffect(() => {
      Prism.highlightAll();
    }, [codeText, showLineNumbers]);

      return (
        <pre className= {showLineNumbers ? "line-numbers item item2" : "item item2"} >
          <code className={`language-${codingLang}`} style={{fontSize: 15, fontFamily: "monospace", left : 30}}>
            {codeText}
          </code>
        </pre>
      );
}

export default CodeBlockHilighter;