import ItaliaTwo from "../img/Italia02.jpg";
import ItaliaThree from "../img/Italia03.jpg";

function Italia() {
    return (
        <div className="paginasRegioes">
            <h2 className="tituloPaginas">Itália: Berço do Império Romano</h2>
            <br />
            <p>
            A Itália é um verdadeiro mergulho na história. Em Roma, o Coliseu e o Fórum Romano revelam a grandiosidade do Império Romano.
            </p>

            <img src={ItaliaTwo} alt="" className="imagensPaginas" />

            <p>
            Veneza encanta com seus canais românticos. Florença é o berço do Renascimento, enquanto Pisa atrai turistas do mundo inteiro por sua famosa torre inclinada.
            </p>

            <img src={ItaliaThree} alt="" className="imagensPaginas" />

            <p>
            Veneza encanta com seus canais românticos. Florença é o berço do Renascimento, enquanto Pisa atrai turistas do mundo inteiro por sua famosa torre inclinada.
            </p>
        </div>
    )
}

export default Italia