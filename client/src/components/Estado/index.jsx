import styled from "styled-components";

export const Loading = styled.div`
    margin:auto;
    margin-top:20px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: #1363DF;
    animation: spin 1s ease infinite;
`;

export const ErrorUsuario = styled.p`
    margin:auto;
    @media screen and (max-width: 767px){
        margin-top:200px;
        font-size:30px;
    }
    @media screen and (min-width: 768px){
        margin-left:20px;
        font-size:60px;
    }
    @media screen and (min-height:1000px){
        font-size:40px
    }
    color:#fff;
    text-align:center;
`;