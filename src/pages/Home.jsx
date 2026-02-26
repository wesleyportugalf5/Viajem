import Campinas from "../img/Campinas.jpg"
import RiodeJaneiro from "../img/RiodeJaneiro.jpg";
import MinasGerais from "../img/MinasGerais.jpg"


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

                <h2 className="categoriasTitulo">Europa</h2>
                <section className="categoriasContainer">
                    
                    <div className="categoriasContainerTwo">
                        <img src={Campinas} alt="" className="categoriasImg" />
                        <p className="categoriasDescricao">França: Terra da Luz</p>
                    </div>
                    <div className="categoriasContainerTwo">
                        <img src={RiodeJaneiro} alt="" className="categoriasImg" />
                        <p className="categoriasDescricao">Itália: Berço do Império <br />Romano</p>
                    </div>
                    <div className="categoriasContainerTwo">
                        <img src={MinasGerais} alt="" className="categoriasImg" />
                        <p className="categoriasDescricao">Alemanha: Terra da Engenharia</p>
                    </div>
                </section>

                <h2 className="categoriasTitulo">Ásia</h2>
                <section className="categoriasContainer">
                    
                    <div className="categoriasContainerTwo">
                        <img src={Campinas} alt="" className="categoriasImg" />
                        <p className="categoriasDescricao">Japão: Terra dos Animes</p>
                    </div>
                    <div className="categoriasContainerTwo">
                        <img src={RiodeJaneiro} alt="" className="categoriasImg" />
                        <p className="categoriasDescricao">China: Grandes exportadores</p>
                    </div>
                    <div className="categoriasContainerTwo">
                        <img src={MinasGerais} alt="" className="categoriasImg" />
                        <p className="categoriasDescricao">Coreia do Sul: Terra do K-pop e da Tecnologia</p>
                    </div>
                </section>

            </section>

        </div>
    )
}

export default Home