import RiodeJaneiroTwo from "../img/RiodeJaneiro02.jpg";
import AlemanhaThree from "../img/Alemanha03.jpg";

function Sobre() {
    return (
        <div>
            <h2 className="tituloPaginas">Sobre</h2>
            <br />

            <p>O Viagem foi criado com o objetivo de ser um guia turístico, com gastronomia locais, restaurantes que precisam ser visitados, lugares imperdíveis, história da região, cultura.</p>
            
            <img src={RiodeJaneiroTwo} alt="" className="imagensPaginas" /> 

            <p>Nosso objetivo é facilitar a vida das pessoais, fornecendo um site, onde estão reunidos as coisas mais relevante a cerca de cada lugar, seja cuidados a serem tomados, um guia total.</p>

            <img src={AlemanhaThree} alt="" className="imagensPaginas" />

            <p>Explore o site, e planeje já sua próxima viagem!!</p>
        </div>
    )
}

export default Sobre