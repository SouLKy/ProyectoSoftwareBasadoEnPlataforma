import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs(props=> ({
    type : props.type,
}))`
    transform : scale(2.5);
    margin : 20px;
    z-index:0;
    text-align:center;
`;

const Label = styled.label`
    margin:auto;
    text-align:center;
`;

const VisiblePassword = (ev)=>{
    const target=(ev.target.parentNode.previousElementSibling);
    target.type === "text" ? target.type="password" : target.type="text";
}

const Div = styled.div`
    text-align:center;
`;

const Recordar = () =>{
    return (

            <Div>
                <Input onClick={VisiblePassword} type='checkbox'></Input>
                <Label htmlFor="Remember">Mostrar contraseña</Label>
            </Div>

    )
};

export default Recordar;