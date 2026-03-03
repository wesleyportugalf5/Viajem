import AlemanhaTwo from "../img/Alemanha02.jpg";
import AlemanhaThree from "../img/Alemanha03.jpg";

function Alemanha() {
    return (
        <div>
            <h2 className="tituloPaginas">Alemanha: Terra da Engenharia</h2>
            <br />
            <p>
            A Alemanha equilibra tradição histórica e inovação tecnológica. Em Berlim, o Portão de Brandemburgo e o Memorial do Muro de Berlim relembram momentos marcantes da história mundial.
            </p>
            
            <img src={AlemanhaTwo} alt="" className="imagensPaginas" />

            <p>
            Na Baviera, o Castelo de Neuschwanstein inspirou cenários de contos de fadas. A Catedral de Colônia impressiona por sua arquitetura gótica.
            </p>

            <img src={AlemanhaThree} alt=""
            className="imagensPaginas" />

            <p className="ultimoParagrafo">
            A culinária destaca salsichas, pretzels e cervejas artesanais, especialmente durante a famosa Oktoberfest em Munique.
            </p>            
        </div>
    )
}

export default Alemanha