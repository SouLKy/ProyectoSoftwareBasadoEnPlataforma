import React from "react";
import { Title,Post,Text1,Text2,Subtitle, Content } from "./styles";


const Contact = () =>{

    const listContact = ['soporte@gmail.com','+569 87654321','+51 2 234533']

    return (
        <>
        <Content>
            
            <Title>Contacto</Title>
            <Text1>Cualquier duda contactarse a los siguientes canales:</Text1>
            <Post>
                <Subtitle>Correo electronico</Subtitle>
                <Text2>{listContact[0]}</Text2>
            </Post>
            <Post>
                <Subtitle>Numero telefonico</Subtitle>
                <Text2>{listContact[1]}</Text2>
                <Text2>{listContact[2]}</Text2>
            </Post>
            <Post>
                <Subtitle>Redes Sociales</Subtitle>
                <Text2>Instagram</Text2>
                <Text2>Facebook</Text2>
                <Text2>Twitter</Text2>
            </Post>
        </Content>
        </>
    )
}
export default Contact;