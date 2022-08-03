import {useState, useEffect} from "react";
import Modal from "../Modal"
import { useNavigate} from "react-router-dom";
import useUser from '../../hooks/UseUser'
import { InputC , Text1, Text2} from "./Styles";
import { Loading, ErrorUsuario } from "../Estado/index";
const FormRegister = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rut, setRut] = useState('');
    const [nombre, setNombre] = useState('');
    const [contacto, setContacto] = useState('');

    let navigate = useNavigate();

    const {register,isLogged,isLoading, hasError} = useUser();

    const [clickModal,setClickModal] = useState(true);
    
    const handleClose = () =>{
        setClickModal(false);
    }
    
    useEffect(() => {
        setClickModal(true)
    }, [hasError]);

    useEffect(() => {
        if (isLogged){
            navigate("../Account", {replace: true})
        } 
    }, [isLogged,navigate]);


    const sendInfo = (ev) =>{
        ev.preventDefault()
        register({ rut, nombre, contacto, username, password})
    }

    return (
        <>
            <div>
                <Text1>PYTYM</Text1>
                <Text2>Rellena los campos para generar usuario</Text2>
                {!isLoading &&
                <form onSubmit={sendInfo}>
                    <InputC onChange={ev => setRut(ev.target.value)} value={rut} type='text' background='#FFFFFF' color="#000" placeholder="Rut" display="block"></InputC>
                    <InputC onChange={ev => setNombre(ev.target.value)} value={nombre} type='text' background='#FFFFFF' color="#000" placeholder="Nombre" display="block"></InputC>
                    <InputC onChange={ev => setContacto(ev.target.value)} value={contacto} type='text' background='#FFFFFF' color="#000" placeholder="Contacto (correo o celular)" display="block"></InputC>
                    <InputC onChange={ev => setUsername(ev.target.value)} value={username} type='text' background='#FFFFFF' color="#000" placeholder="Usuario" display="block"></InputC>
                    <InputC onChange={ev =>setPassword(ev.target.value)} value={password} type='password' background='#FFFFFF' color="#000" placeholder="Contraseña" display="block"></InputC>
                
                    <InputC type='submit' background='rgba(34, 73, 87, 100%);' color="#fff" value="Registrar" display="block"></InputC>
                </form>
                }
                {isLoading &&
                    <Loading></Loading>
                }
                {hasError && clickModal &&
                    <Modal onClose={handleClose}>
                        <ErrorUsuario>Error 😅</ErrorUsuario>
                    </Modal>
                }
            </div>
        </>
    )
}
export default FormRegister