import React, {useState, useEffect} from "react";
import { Form , Title, InputC} from "./styles";
import useUser from '../../hooks/UseUser'
import { useNavigate} from "react-router-dom";
import { Loading, ErrorUsuario } from '../../components/Estado'
import Modal from '../../components/Modal'
const NewBankAccount = ()=>{
    const [Rut,setRut] = useState("")
    const [NroCuenta,setNroCuenta] = useState("")
    const {newaccountbank,isLogged,isLoading, hasError} = useUser();
    const [clickModal,setClickModal] = useState(true);
    
    let navigate = useNavigate();

    const handleClose = () =>{
        setClickModal(false);
    }

    useEffect(() => {
        setClickModal(true)
    }, [hasError]);

    const sendAccount = (ev)=>{
        ev.preventDefault()
        newaccountbank({Rut, NroCuenta})
    }

    useEffect(() => {
        if (!isLogged){
            navigate("../Login", {replace: true})
        } 
    }, [isLogged,navigate]);

    const ChangeNumCuenta = (ev) =>{
        const value = ev.target.value
        if ( value < 1){
            setNroCuenta(1)
        }else{
            setNroCuenta(value)
        }
        
    }

    return(
        <>
            <Title>Ingresa una nueva cuenta</Title>
            {!isLoading &&
            <Form onSubmit={sendAccount}>
                <InputC onChange={ev => setRut(ev.target.value)} value={Rut} type='text' background='#FFFFFF' color="#000" placeholder="Rut (22222222-2)" display="block"></InputC>
                <InputC onChange={ev => ChangeNumCuenta(ev)} value={NroCuenta} type='number' background='#FFFFFF' color="#000" placeholder="Numero de cuenta" display="block"></InputC>
                <InputC type='submit' background='rgba(34, 73, 87, 100%);' color="#fff" value="Crear cuenta" display="block"></InputC>
            </Form>
            }
            {isLoading &&
                    <Loading></Loading>
                }
                {hasError && clickModal &&
                    <Modal onClose={handleClose}>
                        <ErrorUsuario>Error 😅</ErrorUsuario>
                    </Modal>
                }
        </>
    );
}

export default NewBankAccount