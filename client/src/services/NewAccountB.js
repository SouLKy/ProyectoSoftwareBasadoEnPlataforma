const ENDPOINT = 'http://localhost:3001'

export default function newAccountB ({rut, balance, nroCuenta}) {
    return fetch(`${ENDPOINT}/register`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({rut, balance, nroCuenta})
    }).then(res => {
        if(!res.ok) throw new Error('error response')
        return res.json()
    }).then(res=>{
        const {estado} = res
        alert(estado)
    })
}