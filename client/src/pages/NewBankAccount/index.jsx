import React, {useState, useEffect} from "react";
import { Form , Title, InputC} from "./styles";
import newAccountB from '../../services/NewAccountB';
import useUser from '../../hooks/UseUser'
import { useNavigate} from "react-router-dom";

const NewBankAccount = ()=>{
    const [Rut,setRut] = useState("")
    const [NroCuenta,setNroCuenta] = useState("")
    const {isLogged} = useUser();
    let navigate = useNavigate();
    const sendAccount = (ev)=>{
        ev.preventDefault()
        newAccountB({rut:Rut, nroCuenta:NroCuenta, banco:"Scotiabank"}).then(res =>{
            navigate("../Account", {replace: true})
            alert("Cuenta creada exitosamente")
        }).catch( err =>{
            alert("error")
            console.log(err)
        })
    }

    useEffect(() => {
        if (!isLogged){
            navigate("../Login", {replace: true})
        } 
    }, [isLogged,navigate]);

    const ChangeNumCuenta = (ev) =>{
        const value = ev.target.value
        if ( value < 0){
            setNroCuenta(0)
        }else{
            setNroCuenta(value)
        }
        
    }

    return(
        <>
            <Title>Ingresa una nueva cuenta</Title>
            <Form onSubmit={sendAccount}>
                <InputC onChange={ev => setRut(ev.target.value)} value={Rut} type='text' background='#FFFFFF' color="#000" placeholder="Rut (22222222-2)" display="block"></InputC>
                <InputC onChange={ev => ChangeNumCuenta(ev)} value={NroCuenta} type='number' background='#FFFFFF' color="#000" placeholder="Numero de cuenta" display="block"></InputC>
                <InputC type='submit' background='rgba(34, 73, 87, 100%);' color="#fff" value="Crear cuenta" display="block"></InputC>
            </Form>
        </>
    );
}

export default NewBankAccount