import React, {useState} from "react";
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

    const [cookie, setCookie] = useState(()=>ObtenerCookie());

    AccountBank(cookie)

    return (
        <>
            
        </>
    )
}

export default Test