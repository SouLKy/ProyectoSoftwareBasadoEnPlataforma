import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ContentModal = styled.div`
    
    position:fixed;
    z-index:99;
    
    background-color:rgba(34,73,87,0.7);
    padding:40px;
    padding-top:2px;
    padding-left:7px;
    backdrop-filter: blur(2px);
    :hover{
        background-color:rgba(34,73,87,0.9);
    }
    @media screen and (min-width: 765px){
        bottom:20%;
        left:47%;
    }
    @media screen and (max-width: 765px){
        top:12%;
        bottom:12%;
        left:10%;
        right:10%;
    }
`;

const CloseModal = styled.button.attrs(props => ({
    onClick: props.onClick,
}))`
    border:none;
    background-color:transparent;
    cursor:pointer;
    margin-bottom:20px;
`;

export const Modal = ({children, onClose})=>{
    return <ContentModal>
        <CloseModal className="close" onClick={onClose}></ CloseModal>
        <>{children}</>
        
    </ContentModal>
};
const ModalPortal = ({children, onClose}) =>{
    return ReactDOM.createPortal(<Modal onClose={onClose}>{children}</Modal>
    , document.getElementById("modal-root")
    )}

export default ModalPortal