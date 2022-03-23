import React from 'react'

//Function(component) to display a color block with given prop values
function ColorBlock(props){
    return(
        //grabbing the data called 'color' and filling name & bg color with that color
        <div className='colorBlock'  style={{'backgroundColor' : props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

export default ColorBlock