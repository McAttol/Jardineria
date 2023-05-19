import { Link } from "react-router-dom";

function Header() {
    return(
        <nav className="header">
            <Link to={'/home'}><img src="/favicon.ico" height={50} alt="icono weave" /></Link>  
        </nav>
    )
}

export default Header;