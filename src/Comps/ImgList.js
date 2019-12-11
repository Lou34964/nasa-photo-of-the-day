import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ImgCard from './ImgCard';


export default () =>{
    const [picOfDay, setPicOfDay] = useState({});


useEffect(()=>{
    axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(resp =>{
            console.log(resp);
            setPicOfDay(resp.data)
        })
    }, [])

    return (
        <div>
            <ImgCard title={picOfDay.title} date={picOfDay.date} url={picOfDay.url} explanation={picOfDay.explanation}/>
        </div>
    )
}

