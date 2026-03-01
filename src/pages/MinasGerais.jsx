import MinasGeraisTwo from "../img/MinasGerais02.jpg";
import MinasGeraisThree from "../img/MinasGerais03.jpg";

function MinasGerais() {
    return (
        <div>
            <h2 className="tituloPaginas">Minas Gerais: Terra do Pão de Queijo</h2>
            <br />
            <p>
            O estado de Minas Gerais é um convite à imersão cultural. Conhecido como Terra do Pão de Queijo, Minas reúne história colonial, natureza exuberante e uma das melhores gastronomias do Brasil.
            </p>

            <img src={MinasGeraisTwo} alt="" className="imagensPaginas" />

            <p>
            Em Ouro Preto, as igrejas barrocas e ruas de pedra transportam o visitante ao período do ciclo do ouro. O Instituto Inhotim, em Brumadinho, mistura arte contemporânea e jardins botânicos em um dos maiores museus a céu aberto do mundo. Já Tiradentes encanta pelo clima romântico e festivais gastronômicos.
            </p>

            <img src={MinasGeraisThree} alt="" className="imagensPaginas" />

            <p>Na capital, Belo Horizonte, a Praça da Liberdade concentra museus e centros culturais. E claro, não deixe de provar pão de queijo, feijão tropeiro, doce de leite e o tradicional café mineiro.</p>
            <br />
            <p>
            Curiosidade: Minas é o estado brasileiro com o maior número de cidades históricas preservadas.
            </p>
        </div>
    )
}

export default MinasGerais