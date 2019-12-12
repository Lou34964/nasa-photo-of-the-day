import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center
    aline-content: center;
    margin-right: auto;
    margin-left: auto;
    background-color: translucent;
    color: white;
`;

const Title = styled.h2`
    font-size: 30px;
    color: coral;
    background: ocacity: .5;
`;

const Date = styled.span`
    font-size: 20px;
`;

const Img = styled.img`
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    border-radius: 60px;
`;

const Explanation = styled.p`
    font-size: 18px;
    margin: 3%;
`;


const ImgCard = props=>{
    return(
        <Card className="card-container">
            <Title>{props.title}</Title>
            <Date>{props.date}</Date>
            <Img alt="nasas pic of the day" src={props.url} />
            <Explanation>{props.explanation}</Explanation> 
        </Card>
    )
}

export default ImgCard;