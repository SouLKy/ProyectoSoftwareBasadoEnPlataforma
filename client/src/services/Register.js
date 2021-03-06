const ENDPOINT = 'http://localhost:3001'

export default function register ({rut, nombre, contacto, username, password}) {
    return fetch(`${ENDPOINT}/register`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({rut, nombre, contacto, username, password})
    }).then(res => {
        if(!res.ok) throw new Error('error response')
        return res.json()
    }).then(res=>{
        const {estado} = res
        return estado
    })
}