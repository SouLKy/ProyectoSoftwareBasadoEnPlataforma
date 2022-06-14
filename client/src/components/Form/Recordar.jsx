import React, {Fragment} from "react";
import styled from "styled-components";

const Input = styled.input.attrs(props=> ({
    type : props.type,
}))`
    transform : scale(2.5);
    margin : 20px;
    z-index:0;
    
`;

const Div = styled.div`
    text-align:center;
`;

const Recordar = () =>{
    return (
        <Fragment>
            <Div>
                <Input type='checkbox'></Input>
                <label htmlFor="Remember">Recuérdame</label>
            </Div>
        </Fragment>
    )
};

export default Recordar;