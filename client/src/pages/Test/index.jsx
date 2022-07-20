import React from "react";
import AccountBank from "../../services/AccountBank";

const Test = () =>{

    AccountBank().then(res =>{
        console.log(res.data)
    }).catch( err =>{
        alert("error")
        console.log(err)
    })

    return (
        <>
            
        </>
    )
}

export default Test