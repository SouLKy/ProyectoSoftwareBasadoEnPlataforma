import React, {useState, useEffect} from "react";
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
    const [banco, setBanco] = useState()

    useEffect(() => {
        AccountBank(cookie).then( res => {
            const {bancos,id} = res
            setBanco(bancos)
        }).catch(err=>{
            console.log(err);
        })
    }, []);
    

    return (
        <>
            <h2>{banco}</h2>
        </>
    )
}

export default Test