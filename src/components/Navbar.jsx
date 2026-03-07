function Navbar() {
    return (
        <nav className="NavBar">
            <ul className="NavUl">
                <li><a href="/" className="NavLinks">Início</a></li>
                <li><a href="/sobre" className="NavLinks">Sobre</a></li>
                <li><a href="/contato" className="NavLinks">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Navbar