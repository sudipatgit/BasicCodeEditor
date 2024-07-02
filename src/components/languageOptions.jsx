import React, {useContext} from 'react'
import { CodingContext } from '../App'

const buttonStyle = {
    margin: 1,
    padding: 10,
    height: 30,
    width: 60,
    border: 0,
    borderRadius:5,
    elevation: 3,
    backgroundColor: '#7A86B1',
  }

const SelectLang = () => {
    const {setCodingLang, setCodeText} = useContext(CodingContext)

    const handleClickToSetLang = (language) => {
        setCodingLang(language)
        setCodeText('')
    }

    return (
        <div style={{position: 'absolute', left : 700, top: 15 }}>
            <button style={buttonStyle} onClick={() => handleClickToSetLang('javascript')}>
                JS
            </button>
            <button style={buttonStyle} onClick={() => handleClickToSetLang('jsx')}>
                React
            </button>
            <button style={buttonStyle} onClick={() => handleClickToSetLang('c')}>
                C
            </button>
            <button style={buttonStyle} onClick={() => handleClickToSetLang('cpp')}>
                C++
            </button>
        </div>
    );
}

export default SelectLang;