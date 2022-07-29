import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";

import Recordar from '../Form/Recordar';

import useUser from "../../hooks/UseUser";

import Modal from "../Modal"

import { Loading, ErrorUsuario } from "../Estado/index";

import { InputC } from "./Styles";

const Form = () =>{
    const {login, isLogged, isLoading, hasError} = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [clickModal,setClickModal] = useState(true);

    let navigate = useNavigate();

    const handleClose = () =>{
        setClickModal(false);
    }

    useEffect(() => {
        setClickModal(true)
    }, [hasError]);

    const sendInfo = (ev) =>{
        ev.preventDefault();
        login({username, password})
        if(isLogged) navigate("../", {replace: true})
    }

    return (
        <>
            {!isLoading &&
            <form onSubmit={sendInfo}>
                <InputC onChange={ev => setUsername(ev.target.value)} value={username} type='text' background='#FFFFFF' color="#000" placeholder="Usuario" display="block"></InputC>
                <InputC onChange={ev =>setPassword(ev.target.value)} value={password} type='password' background='#FFFFFF' color="#000" placeholder="Contraseña" display="block"></InputC>

                <Recordar></Recordar>
                <InputC type='submit' background='rgba(34, 73, 87, 100%);' color="#fff" value="Iniciar Sesión" display="block"></InputC>
            </form>
            }
            {isLoading &&
                    <Loading></Loading>
            }

            {hasError && clickModal &&
                <Modal onClose={handleClose}>
                    <ErrorUsuario>Error 😅 <br></br> Nombre de usuario <br></br> o contraseña <br></br> incorrecta</ErrorUsuario>
                </Modal>
            }
            



        </>
    )
    
}

export default Form;