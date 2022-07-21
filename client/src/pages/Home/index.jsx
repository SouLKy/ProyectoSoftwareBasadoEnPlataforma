import React from 'react';
import {Title, SubTitle, Imagen, ButtonReg, Container,Container2, Title2, Post, Text2, Subtitle, ContainerCol2} from './styles';
import { useNavigate} from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  
  const Go = () =>{
    navigate("../Register", {replace: true})
  }
  const listContact = ['soporte@gmail.com','+569 87654321','+51 2 234533']


  return (

    <>
      <Container>
        <Container>
          <Imagen></Imagen>
        </Container>
        <ContainerCol2>
          <Title>Controla las finanzas de tu empresa</Title>
          <SubTitle>Carga tus cartolas al sistema y revisa las transacciones de tu empresa, todo en la palma de tu mano.</SubTitle>
          <ButtonReg onClick={Go}>REGISTRATE AHORA</ButtonReg>
        </ContainerCol2>
      </Container>

      <Title2>Canales de contacto</Title2>

      <Container2>
        <Container2>
          <Post>
              <Subtitle>Correo electronico</Subtitle>
              <Text2>{listContact[0]}</Text2>
          </Post>
          <Post>
              <Subtitle>Numero telefonico</Subtitle>
              <Text2>{listContact[1]}</Text2>
              <Text2>{listContact[2]}</Text2>
          </Post>
          <Post>
              <Subtitle>Redes Sociales</Subtitle>
              <Text2>Instagram</Text2>
              <Text2>Facebook</Text2>
              <Text2>Twitter</Text2>
          </Post>
        </Container2>
      </Container2>
      <br></br>
      <br></br>
      <br></br>
    </>
    );
};

export default Home;