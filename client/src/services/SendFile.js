const ENDPOINT = 'https://upload-file.up.railway.app'
export default function SendFile ({InfText,Rut,nroCuenta}) {
    return fetch(`${ENDPOINT}/File`,{
        method: 'POST',
        headers: {
            "Content-Type":"text/plain"
        },
        body: JSON.stringify({ "InfText": InfText, "Rut": Rut , "nroCuenta": nroCuenta})
    }).then(res => {
        if(!res.ok) throw new Error('error response')
        return res.json()
    }).then(res=>{
        return res.json()
    })
}