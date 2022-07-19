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

export const ButtonWrapper = styled.button`
    position: relative;
    width: 150px;
    text-align: center;
    margin: 2% auto;

`

export const Label = styled.label`
    position: relative;
    z-index: 0;
    display: inline-block;
    width: 100%;
    background: rgba(34, 73, 87, 100%);
    cursor: pointer;
    color: #fff;
    padding: 10px 0;
    text-transform:uppercase;
    font-size:12px;
`;

export const InputC2 = styled.input.attrs(props => ({
    type: props.type,
}))`
    
    display:${props => props.display};
    
    display: inline-block;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;

    color : ${props => props.color};
    
`;