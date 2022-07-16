const ENDPOINT = 'http://localhost:3001'

export default function SendFile ({InfText}) {
    return fetch(`${ENDPOINT}/File`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({InfText})
    }).then(res => {
        if(!res.ok) throw new Error('error response')
        return res.json()
    }).then(res=>{
        console.log("archivo enviado")
    })
}