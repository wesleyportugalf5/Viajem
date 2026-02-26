import Campinas from "../img/Campinas.jpg"
import RiodeJaneiro from "../img/RiodeJaneiro.jpg";
import MinasGerais from "../img/MinasGerais.jpg"
import RioGrandedoSul from "../img/RioGrandedoSul.jpg";

function Home() {
    return (
        <div className="home">
            <section className="homeDestaque">
                <div className="destaqueContainer">
                    <img src={Campinas} alt="Imagem da cidade de Campinas" className="destaqueImg" />
                    <h1 className="destaqueTexto">Por que muitos de São Paulo - SP estão indo morar em Campinas?</h1>
                </div>
            </section>
        </div>
    )
}

export default Home