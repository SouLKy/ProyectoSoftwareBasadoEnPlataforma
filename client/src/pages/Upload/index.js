import React, {useState} from "react";
import { Form , Title, InputC, InputC2} from "./UploadElements";
import SendFile from '../../services/SendFile'
const Upload = () =>{
    const [InfText, setInfText] = useState("")
    const [Rut, setRut] = useState("")
    const sendInfo = (ev) =>{
        ev.preventDefault()
        SendFile({InfText,Rut}).then(res =>{
            alert("se subió correctamente")
        }).catch( err =>{
            alert("error")
            console.log(err)
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
                <InputC2 onChange={SaveInfo} type='file' accept=".txt" background='rgba(34, 73, 87, 100%);' color="#000" display="block"></InputC2>
                <InputC onChange={ev => setRut(ev.target.value)} value={Rut} type='text' background='#FFFFFF' color="#000" placeholder="Rut" display="block"></InputC>
                <InputC type='submit' background='rgba(34, 73, 87, 100%);' color="#fff" value="Subir archivo" display="block"></InputC>
            </Form>
            
        </>
    )
}
export default Upload