import { useCallback, useContext } from 'react'
import Context from '../Context/UserContext'
import LoginService from '../services/Login' 
const useUser = () =>{
    const {jwt, setJwt} = useContext(Context)

    const login = useCallback(({username, password}) => {
        //setJwt('test')
        console.log(username)
        LoginService({username, password})
            .then(jwt => {
                setJwt(jwt)
            })
            .catch(err=>{
                console.log(err);
            })
    },[setJwt])

    const logout = useCallback(()=>{
        setJwt(null)
    }, [setJwt])

    return {
        isLogged : Boolean(jwt),
        login,
        logout
    }
    //nos va a ayudar si usamos el useUser dentro de un useEffect o algo así, puede crear un bucle o reendizados innecesarios
}
export default useUser