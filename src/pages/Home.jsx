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

            <section className="categoriasHome">

                <h2 className="categoriasTitulo">Brasil</h2>
                <section className="categoriasContainer">
                    
                    <div className="categoriasContainerTwo">
                        <img src={Campinas} alt="" className="categoriasImg" />
                        <p className="categoriasDescricao">Campinas: Princesa d’Oeste</p>
                    </div>
                    <div className="categoriasContainerTwo">
                        <img src={RiodeJaneiro} alt="" className="categoriasImg" />
                        <p className="categoriasDescricao">Rio de Janeiro: Cidade Maravilhosa</p>
                    </div>
                    <div className="categoriasContainerTwo">
                        <img src={MinasGerais} alt="" className="categoriasImg" />
                        <p className="categoriasDescricao">Minas Gerais: Terra do Pão de Queijo.</p>
                    </div>
                </section>

            </section>

        </div>
    )
}

export default Home