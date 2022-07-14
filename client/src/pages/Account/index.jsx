import React, {useState} from 'react';
import { useNavigate} from "react-router-dom";
import styled from 'styled-components';
import useUser from '../../hooks/UseUser'
import {ModalPortalLogin} from '../../components/Modal/ModalErrorLogin';
const Iniciar = styled.h2`
    font-size:100px;
    text-align:center;
`;

const Account = () =>{
    const [clickModal,setClickModal] = useState(true);
    const {isLogged} = useUser();
    let navigate = useNavigate();
    const HandleClose = () =>{
        setClickModal(false);
        navigate("../Login", {replace: true})
    };

    return (
        <>
            {isLogged ? (
                <h2>Sesión iniciada</h2>
            ) : (
                clickModal &&
                <ModalPortalLogin onClose={HandleClose}>
                    <Iniciar>Inicie sesión</Iniciar>
                </ModalPortalLogin>
            )}

            
        </>
    )
}

export default Account