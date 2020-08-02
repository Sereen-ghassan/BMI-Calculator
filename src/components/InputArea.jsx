import React, {useState} from 'react';


function InputArea(props) {

    const [value, setValue] = useState(0);
    
    function handleChange(event){
        const testValue = /^[0-9\b]+$/;
        const newValue = event.target.value;
        if(newValue === "" || testValue.test(newValue)){
            if(newValue <= 250){
                setValue(newValue);
                props.onChange(newValue);
            }
        }
    }
    
    return (
        <div className = "form-group row justify-content-center">
            <label className = "col-sm-2 col-form-label">{props.labelName}</label>
            <div className = "col-sm-2">
                <input type="tel" className = "form-control" onChange = {handleChange} value = {value}/>
            </div>
        </div>
    )
}

export default InputArea
