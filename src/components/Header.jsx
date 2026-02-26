import Navbar from "./Navbar";
import Logotipo from "../img/logotipoViajem.png"

function Header() {
    return (
        <div className="Header">
            <img src={Logotipo} alt="Logotipo" className="Logotipo" />
            <Navbar />
        </div>
    )
}

export default Header