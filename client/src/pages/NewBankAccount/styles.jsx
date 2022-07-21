import styled from "styled-components";

export const Form = styled.form`
    width : 100%;
    text-align:center;
    position:relative;
    //background-image: url("https://img2.goodfon.com/wallpaper/nbig/9/ce/background-water-voda-fon.jpg");
    //filter : blur(4px);
`

export const Title = styled.h2`
    font-size : 25px;
    text-align : center;
    padding:60px;
`;

export const InputC = styled.input.attrs(props => ({
    type: props.type,
}))`
    
    display:${props => props.display};
    margin:auto;
    margin-top:50px;

    max-width: 600px;
    width : 60%;
    height: 40px;
    
    text-decoration:none;
    border:none;

    border-radius: 10px;
    text-align: center;
    background: ${props => props.background};

    ::placeholder {
        color : #000;
    }

    color : ${props => props.color};
    
`;