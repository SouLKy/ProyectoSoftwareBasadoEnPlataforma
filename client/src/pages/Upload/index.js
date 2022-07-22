import React, {useState, useEffect} from "react";
import { Form , Title, InputC, InputC2, Label, ButtonWrapper} from "./UploadElements";
import SendFile from '../../services/SendFile'
import { Loading, ErrorUsuario } from "../../components/Estado"
import Modal from "../../components/Modal"
import useUser from '../../hooks/UseUser'
import { useNavigate} from "react-router-dom";
const Upload = () =>{
    const [InfText, setInfText] = useState("")
    const [Rut, setRut] = useState("")
    const [nroCuenta,setNroCuenta] = useState("")

    const [loading,setLoading] = useState(false);
    const [Error,setError] = useState(false);
    const {isLogged} = useUser();
    let navigate = useNavigate();
    useEffect(() => {
        if (!isLogged){
            navigate("../Login", {replace: true})
        } 
    }, [isLogged,navigate]);


    const sendInfo = (ev) =>{
        setLoading(true)
        ev.preventDefault()
        SendFile({InfText,Rut,nroCuenta}).then(res =>{
            setLoading(false);
            navigate("../Account", {replace: true})
        }).catch( err =>{
            setError(true)
            setLoading(false);
        })

    }



    const SaveInfo = (ev) =>{
        const file = ev.target.files[0]
        const fileReader = new FileReader()

        fileReader.readAsText(file)

        fileReader.onload = () =>{
            setInfText(fileReader.result)
        }
        fileReader.onerror = () =>{
            console.log("error archivo")
            console.log(fileReader.error)
        }
    }

    return (
        <>
            <Title>Sube tu archivo 📝</Title>
            
            <Form onSubmit={sendInfo}>
                <ButtonWrapper>
                <Label>Cargar</Label>
                <InputC2 onChange={SaveInfo} type='file' accept=".txt" background='rgba(34, 73, 87, 100%);' color="#000" display="block"></InputC2>
                </ButtonWrapper>
                <InputC onChange={ev => setRut(ev.target.value)} value={Rut} type='text' background='#FFFFFF' color="#000" placeholder="Rut (22222222-2)" display="block"></InputC>
                <InputC onChange={ev => setNroCuenta(ev.target.value)} value={nroCuenta} type='text' background='#FFFFFF' color="#000" placeholder="Numero de cuenta" display="block"></InputC>
                <InputC type='submit' background='rgba(34, 73, 87, 100%);' color="#fff" value="Subir archivo" display="block"></InputC>
            </Form>
            


            {loading &&
                <Loading></Loading>
            }
        </>
    )
}
export default Upload