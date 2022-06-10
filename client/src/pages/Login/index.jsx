import React from "react";
import styled from "styled-components";
import Recordar from './Recordar';

const Text1 = styled.h2`
    text-align:center;
`;

const Text2 = styled.p`
    text-align:center;
`;


const InputC = styled.input.attrs(props => ({
    type: props.type,
}))`
    
    display:${props => props.display};
    margin:auto;
    margin-top:20px;

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



const Login = () =>{
    return (

    <>
        <div>
            <Text1>PYTYM</Text1>
            <Text2>Ingresa y genera reportes con los <br></br>datos cargados</Text2>
        
            <form>
                <InputC type='text' background='#FFFFFF' color="#000" placeholder="Usuario" display="block"></InputC>
                <InputC type='text' background='#FFFFFF' color="#000" placeholder="Contraseña" display="block"></InputC>

                <Recordar></Recordar>
                <InputC type='button' background='rgba(34, 73, 87, 100%);' color="#fff" value="Iniciar Sesión" display="block"></InputC>
            </form>
        </div>
    </>
    )
};

export default Login;