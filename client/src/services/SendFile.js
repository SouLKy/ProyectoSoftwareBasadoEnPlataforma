const ENDPOINT = 'https://upload-file.up.railway.app'

export default function SendFile ({InfText}) {
    console.log(InfText);
    return fetch(`${ENDPOINT}/File`,{
        method: 'POST',
        headers: {
            "Content-Type":"text/plain"
        },
        body: InfText
    }).then(res => {
        if(!res.ok) throw new Error('error response')
        return res.json()
    }).then(res=>{
        console.log("archivo enviado")
    })
}