import styled from "styled-components";

export const Form = styled.form`
    width : 100%;
    text-align:center;
    position:relative;
    //background-image: url("https://img2.goodfon.com/wallpaper/nbig/9/ce/background-water-voda-fon.jpg");
    //filter : blur(4px);
`

export const Title = styled.h2`
    font-size : 35px;
    color :#2e3c47;
    text-align : center;
    padding:60px;
    font-family: sans-serif;
`;

export const InputC = styled.input.attrs(props => ({
    type: props.type,
}))`
    
    display:${props => props.display};
    margin:auto;
    @media screen and (max-width: 768px){
        margin-top:20px;
    }
    @media screen and (min-width: 768px){
        margin-top:30px;
        font-size:25px;
        height:50px;
        width : 80%;
    }

    max-width: 600px;
    width : 70%;
    height: 40px;
    
    text-decoration:none;
    border:none;
    

    border-radius: 10px;
    text-align: center;
    background: ${props => props.background};

    ::placeholder {
        color : #00000090;
    }

    color : ${props => props.color};

    cursor: ${props=>props.type === "submit" || props.type === "file"? "pointer" : "text"};
    :hover{
        
        background-color: ${props=>props.type === "submit" ? 
        "#000" : ""
        }
    }
    
`;