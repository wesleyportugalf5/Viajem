import JapaoThree from "../img/Japao03.jpg";

function Contato() {
    return (
        <div className="contato">
            <h2 className="tituloPaginas" id="tituloContato">Entre em Contato</h2>

            <p className="subtituloContato">Para uma experiência incrível comigo. Valores a partir de R$1500</p>

            <form className="formularioContato" onsubmit="enviarWhats(event)">

            <div className="grupoForm">
                <input placeholder="Nome" className="campoForm" />
            </div>
            <div className="grupoForm">
                <textarea className="campoForm" placeholder="Digite sua Mensagem" rows="6"></textarea>
            </div>
            <button type="submit" className="botaoForm">Enviar WhatsApp</button>
            </form>

            <br />

            <p>No máximo, em 2 dias retorno o contato. Será um prazer, vivermos essa experiência juntos.</p>

            <img src={JapaoThree} alt="" className="imagensPaginas" />

            <p className="ultimoParagrafoMax">Como estou passando um tempo no Japão, você pode passar um dia inesquecível comigo, conhecendo esse país incrível por metade do preço.</p>
        </div>
    )
}

export default Contato