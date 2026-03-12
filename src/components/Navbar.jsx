function Navbar({ menuAberta }) {
    return (
        <nav className={`NavBar ${menuAberta ? "active" : ""}`}>
            <ul className="NavUl">
                <li><a href="/" className="NavLinks">Início</a></li>
                <hr />
                <li><a href="/sobre" className="NavLinks">Sobre</a></li>
                <hr />
                <li><a href="/contato" className="NavLinks">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Navbar