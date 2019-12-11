import React from 'react';




const ImgCard = props=>{
    return(
        <div className="card-container">
            <h2>{props.title}</h2>
            <span>{props.date}</span>
            <img alt="nasas pic of the day" src={props.url} />
            <p>{props.explanation}</p> 
        </div>
    )
}

export default ImgCard;