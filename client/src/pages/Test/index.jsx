import React from "react";
import AccountBank from "../../services/AccountBank";

const Test = () =>{
    const ObtenerCookie = ()=>{
        const cookies = document.cookie.split(';').map(cookie =>
            cookie.split('=')).reduce((accumulator, [key, value]) =>
                ({...accumulator, [key.trim()]: decodeURIComponent(value)}),
                {}
            )
        return cookies.token
    }
    console.log(ObtenerCookie)
    AccountBank({ObtenerCookie}).then(res =>{
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