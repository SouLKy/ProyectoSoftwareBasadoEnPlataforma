import styled from "styled-components";
import { IndexPage } from "../../components/icons/iconIndexPage";

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
`;

export const SubTitle = styled.h4`
  padding: 20px;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 55;
`;

export const Imagen = styled(IndexPage)`
  min-width:250px;
  @media screen and (max-width: 768px){
    width: 100%;
    flex:1;
  }

  @media screen and (min-width: 768px){
    flex:0.8;
  }

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
  @media screen and (max-width: 768px){
    width: 300px;
  }

  @media screen and (min-width: 769px){
    width: 400px;
  }
`;

export const Container = styled.div`
  display: flex;
  background-color: #47B5FF;
  flex-wrap: wrap;
`;

export const Container2 = styled(Container)`
  background-color: #DFF6FF;
  flex-direction: row;
  justify-content: center;
  padding-bottom:100px;
`;
export const ContainerCol2 = styled(Container)`
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1320px){
    flex:1;
  }
  
`

export const Title2 = styled.h1`
    color:#224957;
    padding:10px;
    margin:auto;
    text-align: center;
    margin-top:50px;
    margin-bottom:50px;
`;

export const Subtitle = styled.h3`

    margin:auto;
    padding:10px;
    opacity:1;
    transition: 0.6s;
    text-decoration: underline solid #0a0a0a2b;
`;

export const Text2 = styled.p`
    padding:10px;
    margin:auto;
    
    font-style:italic;
    &.active{
      opacity:1;
    }
    transition: 0.6s;
`;


export const Post = styled.div`
    padding: 10px;
    margin: 0 0 20px;
    border-left: 5px solid #06283D;
    background-color: transparent;
    border-radius: 15px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 30px;
    margin-inline-end: 30px;
    flex-direction: column;

    opacity:0;


    @media screen and (max-width: 768px){
      transform: translate(-1000px, 0px);
      width: 250px;
      &.animation2{
        transition:transform 1.5s cubic-bezier(.02,.97,.39,.79) 0.7s, background-color 1.5s ease 1s;
      }
      &.animation{
        transition:transform 1.5s cubic-bezier(.02,.97,.39,.79), background-color 1.5s ease;
      }
    }
  
    @media screen and (min-width: 769px){
      transform: translate(-3000px, 0px);
      width: 400px;
      transition:transform 1s cubic-bezier(.02,.97,.39,.79), background-color 1.5s ease;
    }

    &.animation.true{
      opacity:1;
      transform: translate(0px, 0px);
      background-color: #47B5FF;
    }

    &.animation2.true{
      opacity:1;
      transform: translate(0px, 0px);
      background-color: #47B5FF;
    }


`;