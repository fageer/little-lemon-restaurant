import "./header.css"
import Nav from "./Nav";
import Logo from "../assets/images/Logo.svg"
function Header(){
    return (
        <header className="header">
            <img src={Logo} alt="Little Lemon Restaurant Logo" />
            <Nav />
        </header>
    )
}

export default Header;