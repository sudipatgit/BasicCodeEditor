import React, {useContext, useState, useEffect} from 'react'
import { CodingContext } from '../App'
import '../css/buttonStyle.css'

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
    const {codingLang, setCodingLang, setCodeText, setShowLineNubers} = useContext(CodingContext)

    const handleClickToSetLang = (language) => {
        setCodingLang(language)
    }

    const handleCheckBox = (e) => {
        setShowLineNubers(e.target.checked)
    }

    useEffect(() => {
        setCodeText('')
      }, [codingLang])

    return (
        <div style={{display : 'flex', flexDirection : 'row', padding : 5, marginLeft : 20, marginTop : 40}} >
            <div style={{padding : 4}}>
                <button className = "buttonStyle1" onClick={() => handleClickToSetLang('javascript')}>
                    JS
                </button>
            </div>
            <div style={{padding : 4}}>
                <button className = "buttonStyle1" onClick={() => handleClickToSetLang('jsx')}>
                    React
                </button>
            </div>
            <div style={{padding : 4}}>
                <button className = "buttonStyle1" onClick={() => handleClickToSetLang('java')}>
                    Java
                </button>
            </div>
            <div style={{padding : 4}}>
                <button className = "buttonStyle1" onClick={() => handleClickToSetLang('c')}>
                    C
                </button>
            </div>
            <div style={{padding : 4}}>
                <button className = "buttonStyle1" onClick={() => handleClickToSetLang('cpp')}>
                    C++
                </button>
            </div>
            <div>
                <div style={{ display : 'flex', flexDirection : 'row', marginLeft : 20, marginTop : 10, position : 'relative'}}>
                    <input className='largecheckBox' id="lineNumberCheckbox" type = "checkbox" onChange = {handleCheckBox} />
                    <div style={{marginTop : 6, marginLeft : 5, color : '#000080', fontSize : '20px'}} >
                        Show Line Numbers
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectLang;