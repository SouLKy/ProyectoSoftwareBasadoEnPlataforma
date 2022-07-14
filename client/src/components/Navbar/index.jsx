import React, {useState} from "react";
import {Nav,NavLinkLogo ,NavLink, Bars, NavMenu, Blur} from './NavbarElements'
import useUser from '../../hooks/UseUser'
import LogoPiggy from '../icons/LogoPiggy.svg'
const Navbar = () =>{

    
    const {isLogged, logout} = useUser();
    

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        //cuando esta true lo pasa a false y vice versa
        setClicked(!clicked)
    }

    const Clicklogout = (ev) => {
        ev.preventDefault();
        handleClick();
        logout();
    }

    return (
    <>
        {
            clicked &&
                <Blur></Blur>
        }
        <Nav>
            <NavLinkLogo to="/">
                <img className="imgLogo" alt="Logo" src={LogoPiggy}/>
                <p className="textLogo">PYTYM <br></br>a tu comodidad</p>
            </NavLinkLogo>


            <div className={`links ${clicked ? 'active' : ''}`}>
                <NavLink className="Mobile" onClick={handleClick} to="/">Inicio</NavLink>
                <NavLink className="Mobile" onClick={handleClick} to="/Contact">Contacto</NavLink>
                <NavLink className="Mobile" onClick={handleClick} to="/Querys">Consultas frecuentes</NavLink>
                {
                isLogged
                
                ?
                <>
                    <NavLink className="Mobile" onClick={handleClick} to="/Information">
                        Información cuenta
                    </NavLink>
                
                    <NavLink className="Mobile" onClick={Clicklogout} to="/Logout">
                        Cerrar Sesión
                    </NavLink>
                </>

                :
                <NavLink className="Mobile" onClick={handleClick} to="/Login">
                    Iniciar Sesión
                </NavLink>
                }
            </div>

            <div className='burguer'>
                <Bars onClick={handleClick} 
                    id={`${clicked ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Bars>
            </div>


            

            
            <NavMenu className="Menu">
                <NavLink to="/">
                    Inicio
                </NavLink>
                <NavLink to = "/Lobby">
                    Lobby
                </NavLink>
                <NavLink to="/Contact">
                    Contacto
                </NavLink>
                <NavLink to="/Querys">
                Consultas Frecuentes
                </NavLink>
                {
                isLogged ?
                <>
                <NavLink to="/Information">
                    Información cuenta
                </NavLink>
                <NavLink onClick={logout} to="/">
                    Cerrar sesión
                </NavLink>
                </>
                :
                <NavLink to="/Login">
                    Iniciar Sesión
                </NavLink>

                


                
                }
            </NavMenu>
            
            
        </Nav>
    </>
    )
};

/*
<NavMenu className="Menu">
    <NavLink to="/Inicio">
        Inicio
    </NavLink>
    <NavLink to="/Contacto">
        Contacto
    </NavLink>
    <NavLink to="/ConsultasFrecuentes">
        Consultas Frecuentes
     </NavLink>
     <NavLink to="/InfoCuenta">
        Información de la cuenta
    </NavLink>
    <NavLink to="/CerrarSesión">
        Cerrar Sesión
    </NavLink>
</NavMenu>


*/

export default Navbar;