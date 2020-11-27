import React from 'react'



function SeasonEvent(props) {
    let showImage = <img src = {props.imageLg} alt = "" style = {{width: 100 + 'px'}}/>
    return (
        <div>
           {props.title}
           <br/> 
           {showImage}
           <br/>
           {props.dates} 
           <br/>
           {props.blurb} 
           <br/> 
           {props.artist} 
        
           <hr/>
        </div>
        
    )
}

export default SeasonEvent
