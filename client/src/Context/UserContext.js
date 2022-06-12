import React, { useState } from "react";

const Context = React.createContext({})

export function UserContextProvider ({children}) {
    const [jwt, setJwt] = useState(false)

    return <Context.Provider value={{jwt, setJwt}}>
        {children}
    </Context.Provider>
}
export default Context