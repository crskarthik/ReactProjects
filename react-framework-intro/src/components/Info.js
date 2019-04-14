import React, { useState } from 'react';

const Info =(props)=>{
    const [stateVar,setStateInfoVar] = useState({
        text:"The react is awesome"
    });

    const infoClickHandler = ()=>{
        setStateInfoVar({
            text:"Info clicked"
        })
    }
        return (
            <div>
                <h1 onClick={props.click}>The info</h1>
                <p onClick={infoClickHandler}>{stateVar.text}</p>
            </div>
        );
}

export default Info;