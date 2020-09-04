import React, {useState} from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';



function Navbar() {
    
    const [click , setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    return (
        <>
        <nav>
            <Link to="/Accueil" className="logo-container">
            <h1>STAFRIQUE</h1>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ?'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}/>
            </div>
            <ul className={click ? ' nav-menu active' : 'nav-menu'}>
                {
                MenuItems.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                    )
                  
                })
                }
            </ul>        
            
        </nav>
        </>
    )
}

export default Navbar
