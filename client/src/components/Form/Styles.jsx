import styled from "styled-components";
export const InputC = styled.input.attrs(props => ({
    type: props.type,
}))`
    transition: width 0.5s cubic-bezier(.17,.67,.83,.67), background-color 2s cubic-bezier(.17,.67,.83,.67);
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
export const Text1 = styled.h2`
    text-align:center;
    color:rgba(34, 73, 87, 1);
    font-style: normal;
    font-weight: 600;
    font-size: 3em;
    line-height: 120px;
    
    height:110px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Text2 = styled.p`
    text-align:center;
    font-size: 1.3em;
    color:rgba(34, 73, 87, 1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
