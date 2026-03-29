import RiodeJaneiroTwo from "../img/RiodeJaneiro02.jpg";
import RiodeJaneiroThree from "../img/RiodeJaneiro03.jpg";

function RiodeJaneiro() {
    return (
        <div className="paginasRegioes">
            <h2 className="tituloPaginas">Rio de Janeiro: Cidade Maravilhosa</h2>
            <br />
            <p>
            O Rio de Janeiro é um dos destinos mais desejados do planeta. Cercado por montanhas e mar, o cenário natural é simplesmente cinematográfico.
            <br /> <br />
            O monumento mais famoso é o Cristo Redentor, eleito uma das Sete Maravilhas do Mundo Moderno. Do alto do Corcovado, a vista é inesquecível. Outro passeio imperdível é o bondinho até o Pão de Açúcar, especialmente ao entardecer.
            </p>

            <img src={RiodeJaneiroTwo} alt="" className="imagensPaginas" />

            <p>
            As praias de Copacabana e Ipanema são símbolos do estilo de vida carioca. Para quem gosta de cultura, a Escadaria Selarón e o bairro de Santa Teresa oferecem arte, história e charme boêmio. Já o Estádio do Maracanã é parada obrigatória para fãs de futebol.
            </p>

            <img src={RiodeJaneiroThree} alt="" className="imagensPaginas" />

            <p>
            Na culinária, experimente feijoada, biscoito Globo nas praias e pratos à base de frutos do mar. E claro, o carnaval do Rio é considerado o maior espetáculo a céu aberto do mundo.
            </p>
        </div>
    )
}

export default RiodeJaneiro