import React, {useState, useEffect} from 'react';
import {Title, SubTitle, Box, Imagen, ButtonReg, Container} from './styles';


const Home = () => {


  /*
  const images = ["https://picsum.photos/800/800/?blur","https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1125/posts/30546/preview_image/RN.jpg"]

  

  const [Countt, setCount] = useState(0);
  const [Image, setImage] = useState([images[0]]);

  useEffect(() => {
    if (Countt>2){
      setCount(0);
      setImage(images[Countt])
    }
    else if (Countt<0){
      setCount(2);
      setImage(images[Countt])
    }
    else {
      setImage(images[Countt])
    }
  },);
  */

  return (
    /*
    <>
    <ContentImages>
      <Arrow onClick={() =>
        setCount(Countt-1)} Right="30px solid rgb(34,73,87)">
      </Arrow>
      <BackgroundImage url={Image}>
      </BackgroundImage>
      <Arrow onClick={() =>
        setCount(Countt+1)} Left="30px solid rgb(34,73,87)">
      </Arrow>
    </ContentImages>

    <Go href = "login" type ='button' background='rgba(34, 73, 87, 100%)' color="#fff" value="Iniciar Sesión" display="block">Iniciar Sesión</Go>
    </>
    */
   <>
    <Container>
        <Title>Controla las finanzas de tu empresa</Title>
        <SubTitle>Te ayudamos a realizar tu conciliacion bancaria</SubTitle>
        <ButtonReg>REGISTRATE AHORA</ButtonReg>
        <Imagen></Imagen>
    </Container>
   </>
  );
};

export default Home;