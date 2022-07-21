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
                {
                isLogged
                
                ?
                <>
                    <NavLink className="Mobile" onClick={handleClick} to = "/Account">
                    Inicio
                    </NavLink>
                    <NavLink className="Mobile" onClick={handleClick} to="/newAccount">
                        Nueva cuenta
                    </NavLink>
                
                    <NavLink className="Mobile" onClick={Clicklogout} to="/Logout">
                        Cerrar Sesión
                    </NavLink>
                </>

                :
                <>
                <NavLink className="Mobile" onClick={handleClick} to="/">Inicio</NavLink>
                <NavLink className="Mobile" onClick={handleClick} to="/Register">
                    Registrarse
                </NavLink>
                <NavLink className="Mobile" onClick={handleClick} to="/Login">
                    Iniciar Sesión
                </NavLink>
                </>
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
                {
                isLogged ?
                <>
                <NavLink to = "/Account">
                    Inicio
                </NavLink>
                <NavLink to="/newAccount">
                    Nueva cuenta
                </NavLink>
                <NavLink onClick={logout} to="/">
                    Cerrar sesión
                </NavLink>
                </>
                :
                <>
                <NavLink to="/">
                    Inicio
                </NavLink>
                <NavLink to="/Register">
                    Registrarse
                </NavLink>
                <NavLink to="/Login">
                    Iniciar Sesión
                </NavLink>
                </>
                }
            </NavMenu>
            
            
        </Nav>
    </>
    )
};

export default Navbar;