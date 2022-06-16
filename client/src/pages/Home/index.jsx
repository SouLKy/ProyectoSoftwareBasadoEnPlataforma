import React, {useState, useEffect} from 'react';
import { ContentImages, Arrow, BackgroundImage, Go} from './styles';



const Home = () => {

  const images = ["https://picsum.photos/id/237/200/300","https://picsum.photos/800/800/?blur","https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1125/posts/30546/preview_image/RN.jpg"]

  

  const [Countt, setCount] = useState(0);
  const [Image, setImage] = useState(images[0]);

  useEffect(() => {
    if (Countt>2){
      setCount(0);
      console.log(0)
    }
    if (Countt<0){
      setCount(2);
    }
  }, [Countt]);

  const PreviousImage = () =>{
    console.log("click")
  }

  const Incre = () =>{
    setCount(Countt+1)
  }

  const NextImage = () =>{
    console.log("click")
    
    setImage(images[Countt])
    console.log(Countt)
  };

  return (
    <>
    <ContentImages>
      <Arrow onClick={PreviousImage} Right="30px solid rgb(34,73,87)">
      </Arrow>
      <BackgroundImage url={Image}>
      </BackgroundImage>
      <Arrow onClick={() =>{
        setCount(Countt+1)
        NextImage()}} Left="30px solid rgb(34,73,87)">
      </Arrow>
    </ContentImages>

    <Go href = "login" type ='button' background='rgba(34, 73, 87, 100%)' color="#fff" value="Iniciar Sesión" display="block">Iniciar Sesión</Go>
    </>
  );
};

export default Home;