import React, {useContext, useEffect} from 'react'
import { CodingContext } from '../App';

const codingAreaStyle = {
  position: 'absolute', 
  top: 40, 
  left: 10, 
  width: "49%",
  margin: 10,
  padding: 10,
  height: 500,
  outline: "none",
  resize: "none",
  border: 0,
  fontSize: 15,
  fontFamily: "monospace",
  lineHeight: 2,
  color: 'transparent',
  background: 'transparent',
  caretColor: 'white',
  zIndex: 1,
  overflowX: 'auto',
  overflowY: 'auto',
}

const CodingArea = () => {
    const {codingLang, setCodeText} = useContext(CodingContext)

    const handleKeyDown = (e) => {
        setCodeText(e.target.value)
    }

    useEffect(() => {
      setCodeText('')
    }, [codingLang])

  return (
        <textarea onChange={handleKeyDown} style={codingAreaStyle}
            placeholder={"Start Coding Here in " + codingLang}
        />
  );
};

export default CodingArea;