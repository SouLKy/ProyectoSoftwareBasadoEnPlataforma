import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import styled from "styled-components";

import Recordar from '../Form/Recordar';

import useUser from "../../hooks/UseUser";

import Modal from "../Modal"

import { Loading, ErrorUsuario } from "../Estado/index";
const InputC = styled.input.attrs(props => ({
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

const Form = () =>{
    const {login, isLogged, isLoginLoading, hasLoginError} = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [clickModal,setClickModal] = useState(true);

    const handleClose = () =>{
        setClickModal(false);
    }

    let navigate = useNavigate();

    useEffect(() => {
        setClickModal(true)
    }, [hasLoginError]);

    const sendInfo = (ev) =>{
        ev.preventDefault();
        login({username, password})
        if(isLogged) navigate("../", {replace: true})
    }

    return (
        <>
            {!isLoginLoading &&
            <form onSubmit={sendInfo}>
                <InputC onChange={ev => setUsername(ev.target.value)} value={username} type='text' background='#FFFFFF' color="#000" placeholder="Usuario" display="block"></InputC>
                <InputC onChange={ev =>setPassword(ev.target.value)} value={password} type='password' background='#FFFFFF' color="#000" placeholder="Contraseña" display="block"></InputC>

                <Recordar></Recordar>
                <InputC type='submit' background='rgba(34, 73, 87, 100%);' color="#fff" value="Iniciar Sesión" display="block"></InputC>
            </form>
            }
            {isLoginLoading &&
                    <Loading></Loading>
            }

            {hasLoginError && clickModal &&
                <Modal onClose={handleClose}>
                    <ErrorUsuario>Error 😅 <br></br> Nombre de usuario <br></br> o contraseña <br></br> incorrecta</ErrorUsuario>
                </Modal>
            }
            



        </>
    )
    
}

export default Form;