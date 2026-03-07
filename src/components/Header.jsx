import Navbar from "./Navbar";
import Logotipo from "../img/logotipoViajem.png"
import { IoMdMenu } from "react-icons/io";


function Header() {

    return (
        <div className="Header">
            <img src={Logotipo} alt="Logotipo" className="Logotipo" />

            <IoMdMenu className="menuHamburguer" />

            <Navbar />
        </div>
    )
}

export default Header