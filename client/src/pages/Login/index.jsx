import React, {Fragment, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import Form from "../../components/Form"

import useUser from '../../hooks/UseUser'

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




const Login = () =>{
    let navigate = useNavigate();
    const {isLogged} = useUser();

    useEffect(()=>{
        if(isLogged) navigate("../Home/yes", {replace: true})
    },[isLogged, navigate]) //verifica si está logeado o no, si lo está manda al home. lo verifica viendo si cambia el isLogged

    return (
        <Fragment>
            <div>
                <Text1>PYTYM</Text1>
                <Text2>Ingresa y genera reportes con los <br></br>datos cargados</Text2>
        
                <Form></Form>
            </div>
        </Fragment>
    )
};

export default Login;