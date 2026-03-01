import FrancaTwo from "../img/Franca02.jpg";
import FrancaThree from "../img/Franca03.jpg";

function Franca() {
    return (
        <div>
            <h2 className="tituloPaginas">França: Terra da Luz</h2>
            <br />

            <p>
            A França é um dos destinos turísticos mais visitados do mundo. Paris, a capital, abriga a icônica Torre Eiffel e o Museu do Louvre, onde está a famosa Mona Lisa.
            </p>

            <img src={FrancaTwo} alt="" className="imagensPaginas" />

            <p>
            O Palácio de Versalhes impressiona pela opulência, enquanto o Mont Saint-Michel parece saído de um conto de fadas. No sul, a Riviera Francesa atrai visitantes com praias sofisticadas.
            </p>

            <img src={FrancaThree} alt="" className="imagensPaginas" />

            <p>Na gastronomia, croissants, queijos, vinhos e macarons são experiências obrigatórias. A França também é referência mundial em moda, arte e cinema.</p>
        </div>
    )
}

export default Franca