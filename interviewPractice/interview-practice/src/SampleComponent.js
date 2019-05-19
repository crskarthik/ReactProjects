import React from 'react'

const sampleComponent = (props)=>{
    return(
        <div>
        <input type="button" style={{backgroundColor:props.colors.btncolorR,borderRadius:'100px',width:'150px',height:'150px',cursor:'pointer'}} name="red" onClick={props.clickHandler} />
        
        <input type="button" style={{backgroundColor:props.colors.btncolorY,borderRadius:'100px',width:'150px',height:'150px',cursor:'pointer'}} name="yellow" onClick={props.clickHandler} />
        
        <input type="button" style={{backgroundColor:props.colors.btncolorG,borderRadius:'100px',width:'150px',height:'150px',cursor:'pointer'}} name="green" onClick={props.clickHandler} />
        </div>
    )
}

export default sampleComponent