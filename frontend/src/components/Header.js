import { Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from "react";


function Header() {
    
    const [showMenu, setShowMenu] = useState(false);
    
    const renderMenu = () =>{
        return(
            <div className="menu">
                <Link to={'/home'}>Home</Link>
                <Link to={'/tasks'}>Tasks</Link>
                <Link to={'/employees'}>Employees</Link>
                <Link to={'/material'}>Material</Link>
            </div>
        )
    }

    const handleMenu = () =>{
        if(showMenu){
            setShowMenu(false)
        }else{
            setShowMenu(true)
        }
    }
    
    return(
        <nav className="header">
            <button className="burguer" onClick={()=>{handleMenu()}}><AiOutlineMenu fontSize={20}></AiOutlineMenu></button>
            {showMenu && renderMenu()}
            <Link to={'/home'}><img src="/favicon.ico" height={50} alt="icono weave" /></Link>  
        </nav>
    )
}

export default Header;