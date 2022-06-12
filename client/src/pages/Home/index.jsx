import React from 'react';
import styled from "styled-components";

const BackgroundColor = styled.div`
  margin:auto;
  margin-top:20px;
  border-radius:36px;
  max-width:600px;
  min-width:300px;
  width:70%;
  height : 380px;
  background : #fff;
`
const Go = styled.a`
  display:${props => props.display};
  margin:auto;
  margin-top:20px;
  max-width:600px;
  min-width:300px;
  width : 60%;
  height: 40px;

  text-decoration:none;
  border:none;

  border-radius: 10px;
  font-size:24px;
  text-align: center;
  background: ${props => props.background};
  :hover {
    background : #0004;
  }


  color : ${props => props.color};
`;

const Home = () => {
  return (
    <>
    <BackgroundColor>
      <img alt=""/>
    </BackgroundColor>
    <Go href="login" type='button' background='rgba(34, 73, 87, 100%)' color="#fff" value="Iniciar Sesión" display="block">Iniciar Sesión</Go>
    </>
  );
};

export default Home;