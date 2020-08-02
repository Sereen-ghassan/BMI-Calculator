import React from 'react'

function Calculate(props) {
    function handleClick(){
        props.onClick();
    }
    return (
        <div>
            <button className = "btn btn-primary" onClick = {handleClick}>Calculate BMI</button>
        </div>
    )
}

export default Calculate
