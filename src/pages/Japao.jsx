import JapaoTwo from "../img/Japao02.jpg";
import JapaoThree from "../img/Japao03.jpg";

function Japao() {
    return (
        <div className="paginasRegioes">
            <h2 className="tituloPaginas">Japão: Terra dos Animes</h2>
            <br />
            <p>
            O Japão é um país de contrastes fascinantes. O Monte Fuji é um dos símbolos nacionais, especialmente durante a primavera das cerejeiras.
            </p>

            <img src={JapaoTwo} alt="" className="imagensPaginas" />

            <p>
            Kyoto abriga templos históricos como o Fushimi Inari, enquanto Tóquio impressiona com o cruzamento de Shibuya e o bairro tecnológico de Akihabara.
            </p>

            <img src={JapaoThree} alt="" className="imagensPaginas" />

            <p className="ultimoParagrafo">A culinária japonesa é patrimônio cultural: sushi, ramen, tempurá e cerimônia do chá fazem parte da experiência.</p>
        </div>
    )
}

export default Japao