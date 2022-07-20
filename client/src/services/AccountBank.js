const ENDPOINT = 'http://localhost:3001'

export default function AccountBank () {
    return fetch(`${ENDPOINT}/accountBank`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({})
    }).then(res => {
        if(!res.ok) throw new Error('error response')
        return res.json()
    }).then(res=>{
        const {bancos, id} = res
        return {bancos,id};
    })
}