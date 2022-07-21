const ENDPOINT = 'http://localhost:3001'


export default function transaction (id,n) {
    return fetch(`${ENDPOINT}/transaction`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({id,n})
    }).then(res => {
        if(!res.ok) throw new Error('error response')
        return res.json()
    }).then(res=>{
        const {descripciones, fechas,montos} = res
        return {descripciones,fechas,montos};
    })
}