import { useCallback, useContext, useState } from 'react'
import Context from '../Context/UserContext'
import LoginService from '../services/Login' 
const useUser = () =>{
    const {jwt, setJwt} = useContext(Context)

    const [stateLoading, setStateLoading] = useState ({loading: false, error: false })


    //con esta función intentamos hacer el login
    const login = useCallback(({username, password}) => {
        //setJwt('test')

        setStateLoading({loading: true, error: false})
        
        LoginService({username, password})
            .then(jwt => {
                setStateLoading({loading: false, error:false})
                //setJwt(jwt)
                window.sessionStorage.setItem('jwt', jwt)
            })
            .catch(err=>{
                setStateLoading({loading: false, error:true})
                window.sessionStorage.removeItem('jwt')
                console.log(err);
            })
    },[setJwt])

    const logout = useCallback(()=>{
        window.sessionStorage.removeItem('jwt')
        //setJwt(null)
    }, [setJwt])

    return {
        isLogged : Boolean(jwt),
        login,
        logout,
        isLoginLoading : stateLoading.loading,
        hasLoginError: stateLoading.error
    }
    //nos va a ayudar si usamos el useUser dentro de un useEffect o algo así, puede crear un bucle o reendizados innecesarios
}
export default useUser