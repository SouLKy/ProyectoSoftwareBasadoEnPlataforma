import React, {useState} from "react";
import styled from "styled-components";
import register from "../../services/Register";
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

    const sendInfo = (ev) =>{
        ev.preventDefault();
        register({ rut, nombre, contacto, username, password})
    }

    return (
        <>
            <div>
                <Text1>PYTYM</Text1>
                <Text2>Rellena los campos para generar usuario</Text2>
                <form onSubmit={sendInfo}>
                    <InputC onChange={ev => setRut(ev.target.value)} value={rut} type='text' background='#FFFFFF' color="#000" placeholder="Usuario" display="block"></InputC>
                    <InputC onChange={ev => setNombre(ev.target.value)} value={nombre} type='text' background='#FFFFFF' color="#000" placeholder="Usuario" display="block"></InputC>
                    <InputC onChange={ev => setContacto(ev.target.value)} value={contacto} type='text' background='#FFFFFF' color="#000" placeholder="Usuario" display="block"></InputC>
                    <InputC onChange={ev => setUsername(ev.target.value)} value={username} type='text' background='#FFFFFF' color="#000" placeholder="Usuario" display="block"></InputC>
                    <InputC onChange={ev =>setPassword(ev.target.value)} value={password} type='password' background='#FFFFFF' color="#000" placeholder="Contraseña" display="block"></InputC>
                
                    <InputC type='submit' background='rgba(34, 73, 87, 100%);' color="#fff" value="Registrar" display="block"></InputC>
            
                </form>
            </div>
        </>
    )
}
export default FormRegister