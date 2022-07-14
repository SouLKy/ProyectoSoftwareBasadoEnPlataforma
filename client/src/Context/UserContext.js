import React, { useState} from "react";

const Context = React.createContext({})

export function UserContextProvider ({children}) {
    //const [jwt, setJwt] = useState(false)
    //const [jwt, setJwt] = useState(()=>window.sessionStorage.getItem("jwt"))
    
    const ObtenerCookie = ()=>{
        const cookies = document.cookie.split(';').map(cookie =>
            cookie.split('=')).reduce((accumulator, [key, value]) =>
                ({...accumulator, [key.trim()]: decodeURIComponent(value)}),
                {}
            )
        return cookies.token
    }

    const [jwt, setJwt] = useState(()=>ObtenerCookie())
    //console.log("jwt: userContext",jwt)
    //es una buena práctica ponerlo en una función, agota muchos recursos y se reenderizaría si es que llegara a cambiar el componente de vez en cuando, aunque aqui no pasa
    
    return <Context.Provider value={{jwt, setJwt}}>
        {children}
    </Context.Provider>
}
export default Context