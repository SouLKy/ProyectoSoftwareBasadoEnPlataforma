import { useCallback, useContext, useState } from 'react'
import { useNavigate} from "react-router-dom";
import Context from '../Context/UserContext'
import LoginService from '../services/Login' 
import Register from "../services/Register";
import NewAccountB from '../services/NewAccountB'
const useUser = () =>{
    let navigate = useNavigate();
    const {jwt, setJwt} = useContext(Context)

    const [stateLoading, setStateLoading] = useState ({loading: false, error: false })


    //con esta función intentamos hacer el login
    const login = useCallback(({username, password}) => {
        //setJwt('test')

        setStateLoading({loading: true, error: false})
        
        LoginService({username, password})
            .then(jwt => {
                setStateLoading({loading: false, error:false})
                document.cookie = `token=${jwt}; max-age=${3600}; path=/; samesite=strict`
                //window.sessionStorage.setItem('jwt', true)
                setJwt(jwt)
            })
            .catch(err=>{
                setStateLoading({loading: false, error:true})
                //window.sessionStorage.removeItem('jwt')
                console.log(err);
            })
    },[setJwt])

    const logout = useCallback(()=>{
        //window.sessionStorage.removeItem('jwt')
        document.cookie=(`token=; expires = Thu, 01 Jan 1970 00:00:01 GMT;`)
        setJwt(null)
        
        //window.location.reload();
        navigate("../login", {replace: true})
    }, [setJwt, navigate])


    const register = useCallback(({rut, nombre, contacto, username, password})=>{
        setStateLoading({loading: true, error: false})
        Register({ rut, nombre, contacto, username, password})
            .then( (estado) => {console.log(estado)
                setStateLoading({loading: false, error:false})
                navigate("../Login", {replace: true})
            }).catch(err=>{
                setStateLoading({loading: false, error:true})
                console.log(err)
            })
    },[])

    const newaccountbank = useCallback(({Rut,NroCuenta})=>{
        setStateLoading({loading: true, error: false})
        NewAccountB({rut:Rut, nroCuenta:NroCuenta, banco:"Scotiabank"}).then(res =>{
            setStateLoading({loading: false, error:false})
            navigate("../Account", {replace: true})
        }).catch( err =>{
            setStateLoading({loading: false, error:true})
            console.log(err)
        })
    },[])

    return {
        isLogged : Boolean(jwt),
        login,
        logout,
        register,
        newaccountbank,
        isLoading : stateLoading.loading,
        hasError: stateLoading.error
    }
    //nos va a ayudar si usamos el useUser dentro de un useEffect o algo así, puede crear un bucle o reendizados innecesarios
}
export default useUser