const ENDPOINT = 'http://localhost:3001'

export default function InfoUser({jwt, username, password}) {
    return fetch(`${ENDPOINT}/Information`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({jwt, username, password})
    }).then(res => {
        if(!res.ok) throw new Error('error response')
        return res.json()
    }).then(res=>{
        const {token} = res
        return token
    })
}