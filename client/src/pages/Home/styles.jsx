import styled from "styled-components";
import { IndexPage } from "../../components/icons/iconIndexPage";

export const ContentImages = styled.div`
  padding-top: 20px;
  display:flex; 
  margin:auto;

  @media(min-width: 700px){
    width:100%;
    margin-top:50px;
  }
  @media (max-width:700px) {
    width:100%; 
    
    padding-bottom: 20px;
  }
`;

export const Arrow = styled.button`
  border:0;
  background:none;
  width: 0;
  height: 0;
  margin: auto;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  border-left : ${props=>props.Left};
  border-right : ${props=>props.Right};
  display:inline-block;
  cursor: pointer;
`;

export const BackgroundImage = styled.div`
  margin:auto;

  
`
export const Go = styled.a`
  display:${props => props.display};
  padding : 3px;
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

export const Title = styled.h1`
  padding: 20px;

  font-family: 'Arial';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  align-items: center;
  text-transform: uppercase;
  
  color: #000;

  grid-area: Title;
`;

export const SubTitle = styled.h4`
  padding: 20px;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 55;

  grid-area: SubTitle;
`;

export const Imagen = styled(IndexPage)`
  width: 614px;
  height: 487px;
  @media screen and (max-width: 768px){
    width: 300px;
  }

  @media screen and (min-width: 769px){
    width: 614px;
  }
  grid-area: Imagen;
`;

export const Button = styled.button`
  width: 400px;
  height: 65px;

  border: none;
  color: #1363DF;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
  transition-duration: 0.4s;
  cursor: pointer;
`;

export const ButtonReg = styled(Button)`
  background-color: #1363DF; 
  color: white; 
  border: 2px solid #1363DF;
  &:hover{
    background-color: white;
    color: black;
  };
  border-radius: 30px;
  grid-area: ButtonReg;
`;

export const Container = styled.div`
  display: grid;
  height: 100%;
  background-color: #47B5FF; 
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 0.1fr 0.1fr 0.1fr 0.5fr;
  grid-template-areas:
            "nav Imagen"
            "Title Imagen"
            "SubTitle Imagen"
            "ButtonReg Imagen";
`;