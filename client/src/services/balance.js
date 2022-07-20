const ENDPOINT = 'http://localhost:3001'


export default function balance (id) {
    return fetch(`${ENDPOINT}/balance`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({id})
    }).then(res => {
        if(!res.ok) throw new Error('error response')
        return res.json()
    }).then(res=>{
        const {abonos, cargos,id} = res
        return {abonos,cargos,id};
    })
}