const ENDPOINT = 'http://localhost:3001'

export default function newAccountB ({rut,nroCuenta, banco}) {
    return fetch(`${ENDPOINT}/createAccountBank`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({rut,nroCuenta, banco})
    }).then(res => {
        if(!res.ok) throw new Error('error:'+res)
        return res.json()
    }).then(res=>{
        const {estado} = res
        alert(estado)
    })
}