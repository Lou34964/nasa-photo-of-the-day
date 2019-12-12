import React from "react";
import "./App.css";
import ImgList from './Comps/ImgList';
import styled from "styled-components";

const Appp = styled.div`
  background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
              linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
              linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
`;

const CopyWrite = styled.p`
  color: white;
  padding-bottom:10px;
`;


function App() {
  return (
    <Appp className="App">
      <div className="App-header">
        <span>🚀Nasa's Photo of the Day🛸</span>
      </div>
      <ImgList />
      <CopyWrite>©CopyWrite: Leonardo Hulio</CopyWrite>
    </Appp>
    
  );
}

export default App;
