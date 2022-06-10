import React from 'react';
import styled from "styled-components";

const BackgroundColor = styled.div`
  margin:auto;
  margin-top:20px;
  border-radius:36px;
  width:70%;
  height : ${props => props.height};
  background : rgb(194, 187, 187);
`
const Go = styled.a`
display:${props => props.display};
margin:auto;
margin-top:20px;

width : 60%;
height: 40px;

text-decoration:none;
border:none;

border-radius: 10px;
font-size:24px;
text-align: center;
background: ${props => props.background};

::placeholder {
    color : #000;
}

color : ${props => props.color};
`

const Home = () => {
  return (
    <>
    <BackgroundColor height="380px">
      <img alt=""/>
    </BackgroundColor>
    <Go href="login" type='button' background='rgba(202, 202, 202, 100%);' color="#000" value="Iniciar Sesión" display="block">Iniciar Sesión</Go>
    </>
  );
};

export default Home;