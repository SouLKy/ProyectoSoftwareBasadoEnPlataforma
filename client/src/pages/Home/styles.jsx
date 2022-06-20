import styled from "styled-components";

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
  border-radius:36px;
  
  min-width:300px;
  width:100%;
  height : 380px;
  background : #fff;
  background-image: url(${props => props.url});
  background-repeat : no-repeat;
  background-size: cover;
  background-position-x: center;
  display:inline-block;
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