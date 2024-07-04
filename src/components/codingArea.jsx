import React, {useContext, useEffect} from 'react'
import { CodingContext } from '../App';
import "../css/position.css"

const CodingArea = () => {
    const {codingLang, setCodeText, codeText, showLineNumbers} = useContext(CodingContext)

    const handleKeyDown = (e) => {
        setCodeText(e.target.value)
    }

    useEffect(() => {
      // setCodeText('')
    }, [showLineNumbers])

  return (
        <textarea  className= {showLineNumbers ? 'item withLineNum' : 'item withoutLineNum' } value={codeText} onChange={handleKeyDown} placeholder={"Start Coding Here in " + codingLang}  />
  );
};

export default CodingArea;