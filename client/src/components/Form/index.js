import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import styled from "styled-components";

import Recordar from '../Form/Recordar';

import useUser from "../../hooks/UseUser";

const InputC = styled.input.attrs(props => ({
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

const Form = () =>{
    const {login, isLogged} = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const sendInfo = (ev) =>{
        ev.preventDefault();
        login({username, password})
        if(isLogged) navigate("../Home", {replace: true})
    }

    return (
        <>
            <form onSubmit={sendInfo}>
            <InputC onChange={ev => setUsername(ev.target.value)} value={username} type='text' background='#FFFFFF' color="#000" placeholder="Usuario" display="block"></InputC>
            <InputC onChange={ev =>setPassword(ev.target.value)} value={password} type='text' background='#FFFFFF' color="#000" placeholder="Contraseña" display="block"></InputC>

            <Recordar></Recordar>
            <InputC type='submit' background='rgba(34, 73, 87, 100%);' color="#fff" value="Iniciar Sesión" display="block"></InputC>
            </form>
        </>
    )
    
}

export default Form;