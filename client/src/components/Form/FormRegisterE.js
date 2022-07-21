import React, {useState} from "react";
import styled from "styled-components";
import register from "../../services/Register";
import { Loading, ErrorUsuario } from "../Estado";
import Modal from "../Modal"
import { useNavigate} from "react-router-dom";

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

const Text1 = styled.h2`
    text-align:center;
    color:rgba(34, 73, 87, 1);
    font-style: normal;
    font-weight: 600;
    font-size: 3em;
    line-height: 120px;
    
    height:110px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Text2 = styled.p`
    text-align:center;
    font-size: 1.3em;
    color:rgba(34, 73, 87, 1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;



const FormRegister = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rut, setRut] = useState('');
    const [nombre, setNombre] = useState('');
    const [contacto, setContacto] = useState('');
    const [Error,setError] = useState(false);
    const [clickModal,setClickModal] = useState(true);
    const [loading,setLoading] = useState(false);
    let navigate = useNavigate();
    const handleClose = () =>{
        setClickModal(false);
    }

    const sendInfo = (ev) =>{
        setLoading(true)
        ev.preventDefault();
        register({ rut, nombre, contacto, username, password}).then(estado => {
            navigate("../login", {replace: true})
        }).catch(err=>{
            setError(true)
            setLoading(false)
        })
    }

    return (
        <>
            <div>
                <Text1>PYTYM</Text1>
                <Text2>Rellena los campos para generar usuario</Text2>
                <form onSubmit={sendInfo}>
                    <InputC onChange={ev => setRut(ev.target.value)} value={rut} type='text' background='#FFFFFF' color="#000" placeholder="Rut" display="block"></InputC>
                    <InputC onChange={ev => setNombre(ev.target.value)} value={nombre} type='text' background='#FFFFFF' color="#000" placeholder="Nombre" display="block"></InputC>
                    <InputC onChange={ev => setContacto(ev.target.value)} value={contacto} type='text' background='#FFFFFF' color="#000" placeholder="Contacto" display="block"></InputC>
                    <InputC onChange={ev => setUsername(ev.target.value)} value={username} type='text' background='#FFFFFF' color="#000" placeholder="Usuario" display="block"></InputC>
                    <InputC onChange={ev =>setPassword(ev.target.value)} value={password} type='password' background='#FFFFFF' color="#000" placeholder="Contraseña" display="block"></InputC>
                
                    <InputC type='submit' background='rgba(34, 73, 87, 100%);' color="#fff" value="Registrar" display="block"></InputC>
                </form>
                {Error && clickModal &&
                    <Modal onClose={handleClose}>
                        <ErrorUsuario>Error, rellene los campos correctamente</ErrorUsuario>
                    </Modal>
                }
                {loading &&
                    <Loading></Loading>
                }
            </div>
        </>
    )
}
export default FormRegister