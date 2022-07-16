import styled from "styled-components";

export const Form = styled.form`
    width : 100%;
`

export const Title = styled.h2`
    font-size : 20px;
    text-align : center;
`;

export const InputC = styled.input.attrs(props => ({
    type: props.type,
}))`
    
    display:${props => props.display};
    margin:auto;
    margin-top:20px;

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

export const InputC2 = styled.input.attrs(props => ({
    type: props.type,
}))`
    
    display:${props => props.display};
    margin:auto;
    margin-top:20px;
    height:20px;
    text-decoration:none;
    border:none;

    border-radius: 10px;
    text-align: center;

    ::placeholder {
        color : #000;
    }

    color : ${props => props.color};
    
`;