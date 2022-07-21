import React, {useState} from "react";
import { Form , Title, InputC} from "./styles";
import newAccountB from '../../services/NewAccountB';


const NewBankAccount = ()=>{
    const [Rut,setRut] = useState("")
    const [Balance,setBalance] = useState("")
    const [NroCuenta,setNroCuenta] = useState("")

    const sendAccount = (ev)=>{
        ev.preventDefault()
        newAccountB({Rut, Balance, NroCuenta}).then(res =>{
            alert("Cuenta creada exitosamente")
        }).catch( err =>{
            alert("error")
            console.log(err)
        })
    }

    return(
        <>
            <Title>Ingresa una nueva cuenta</Title>
            <Form onSubmit={sendAccount}>
                <InputC onChange={ev => setRut(ev.target.value)} value={Rut} type='text' background='#FFFFFF' color="#000" placeholder="Rut (22222222-2)" display="block"></InputC>
                <InputC onChange={ev => setBalance(ev.target.value)} value={Balance} type='text' background='#FFFFFF' color="#000" placeholder="Balance" display="block"></InputC>
                <InputC onChange={ev => setNroCuenta(ev.target.value)} value={NroCuenta} type='text' background='#FFFFFF' color="#000" placeholder="Numero de cuenta" display="block"></InputC>
                <InputC type='submit' background='rgba(34, 73, 87, 100%);' color="#fff" value="Crear cuenta" display="block"></InputC>
            </Form>
        </>
    );
}

export default NewBankAccount