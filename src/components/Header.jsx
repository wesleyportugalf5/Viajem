import { useState } from 'react';
import Navbar from "./Navbar";
import Logotipo from "../img/logotipoViajem.png"
import { IoMdMenu, IoMdClose } from "react-icons/io";


function Header() {
    const [menuAberta, setMenuAberta] = useState(false);

    const toggleMenu = () => {
        setMenuAberta(!menuAberta);
    };

    return (
        <div className="Header">
            <a href="/"><img src={Logotipo} alt="Logotipo" className="Logotipo" /></a>

            {menuAberta ? (
                <IoMdClose className="menuHamburguer" onClick={toggleMenu} />
            ) : (
                <IoMdMenu className="menuHamburguer" onClick={toggleMenu} />
            )}

            <Navbar menuAberta={menuAberta} />
        </div>
    )
}

export default Header