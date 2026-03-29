import CampinasOne from "../img/Campinas03.jpg";
import CampinasTwo from "../img/Campinas02.jpg";

function Campinas() {
    return (
        <div className="paginasRegioes">
            <h2 className="tituloPaginas">Campinas — A Princesa d’Oeste e seu charme surpreendente</h2>
            <br />
            <p>
            Localizada no interior de São Paulo, Campinas vai muito além de um polo tecnológico. Conhecida como Princesa d’Oeste, a cidade combina desenvolvimento, áreas verdes e cultura, sendo uma excelente opção para quem busca tranquilidade sem abrir mão de infraestrutura.
            <br /> <br />
            Um dos cartões-postais é o Parque Portugal (Lagoa do Taquaral), espaço perfeito para caminhadas, passeios de pedalinho e momentos ao ar livre. A Catedral Metropolitana de Campinas, construída no século XIX, impressiona pelos detalhes internos em madeira esculpida. Já a Pedreira do Chapadão oferece uma vista panorâmica da cidade, ideal para fotos ao pôr do sol.
            </p>

            <img src={CampinasOne} alt="" className="imagensPaginas" />

            <p>
            Para quem gosta de ciência e astronomia, o Observatório Municipal Jean Nicolini, localizado no distrito de Joaquim Egídio, proporciona uma experiência única de observação do céu.
            <br /><br />
            Na gastronomia, Campinas se destaca pelos restaurantes contemporâneos, churrascarias tradicionais e cafés charmosos espalhados pela cidade. A região também é conhecida por antigas fazendas históricas que remetem ao ciclo do café.
            </p>

            <img src={CampinasTwo} alt="" className="imagensPaginas" />

            <p>Curiosidade: Campinas é um dos principais polos de inovação do Brasil, abrigando importantes centros de pesquisa e universidades reconhecidas nacionalmente.</p>
        </div>
    )
}

export default Campinas