import { Link } from 'react-router-dom';

import CampinasImg from "../img/Campinas.jpg";
import RiodeJaneiro from "../img/RiodeJaneiro.jpg";
import MinasGerais from "../img/MinasGerais.jpg";
import Franca from "../img/Franca.jpg";
import Italia from "../img/Italia.jpg";
import Alemanha from "../img/Alemanha.jpg";
import Japao from "../img/Japao.jpg";
import China from "../img/China.jpg";
import CoreiadoSul from "../img/CoreiadoSul.jpg";


function Home() {
    return (
        <div className="home">

            <section className="homeDestaque">
                <div className="destaqueContainer">
                <Link to="/campinas" className="categoriasLink">
                    <img src={CampinasImg} alt="Imagem da cidade de Campinas" className="destaqueImg" />
                    <h1 className="destaqueTexto">Por que muitos de São Paulo - SP estão indo morar em Campinas?</h1>
                </Link>
                </div>
            </section>

            <section className="categoriasHome">

                <h2 className="categoriasTitulo">Brasil</h2>
                <section className="categoriasContainer">
                    
                    <div className="categoriasContainerTwo">
                        <Link to="/riodejaneiro" className="categoriasLink">
                            <img src={RiodeJaneiro} alt="" className="categoriasImg" />
                            <p className="categoriasDescricao">Rio de Janeiro: Cidade Maravilhosa</p>
                        </Link>
                    </div>
                    <div className="categoriasContainerTwo">
                    <Link to="/campinas" className="categoriasLink">
                        <img src={CampinasImg} alt="" className="categoriasImg" />
                        <p className="categoriasDescricao">Campinas: Princesa d’Oeste</p>
                    </Link>
                    </div>
                    <div className="categoriasContainerTwo">
                        <Link to="minasgerais" className="categoriasLink">
                            <img src={MinasGerais} alt="" className="categoriasImg" />
                            <p className="categoriasDescricao">Minas Gerais: Terra do Pão de Queijo</p>
                        </Link>
                    </div>
                </section>

                <h2 className="categoriasTitulo">Europa</h2>
                <section className="categoriasContainer">
                    
                    <div className="categoriasContainerTwo">
                        <Link to="franca" className="categoriasLink">
                            <img src={Franca} alt="" className="categoriasImg" />
                            <p className="categoriasDescricao">França: Terra da Luz</p>
                        </Link>
                    </div>
                    <div className="categoriasContainerTwo">
                        <Link to="italia" className="categoriasLink">
                            <img src={Italia} alt="" className="categoriasImg" />
                            <p className="categoriasDescricao">Itália: Berço do Império <br />Romano</p>
                        </Link>
                    </div>
                    <div className="categoriasContainerTwo">
                        <Link to="alemanha" className="categoriasLink">
                            <img src={Alemanha} alt="" className="categoriasImg" />
                            <p className="categoriasDescricao">Alemanha: Terra da Engenharia</p>
                        </Link>
                    </div>
                </section>

                <h2 className="categoriasTitulo">Ásia</h2>
                <section className="categoriasContainer">
                    
                    <div className="categoriasContainerTwo">
                        <Link to="japao" className="categoriasLink"> 
                            <img src={Japao} alt="" className="categoriasImg" />
                            <p className="categoriasDescricao">Japão: Terra dos Animes</p>
                        </Link>
                    </div>
                    <div className="categoriasContainerTwo">
                        <Link to="china" className="categoriasLink">
                            <img src={China} alt="" className="categoriasImg" />
                            <p className="categoriasDescricao">China: Grandes exportadores</p>
                        </Link>
                    </div>
                    <div className="categoriasContainerTwo">
                        <Link to="coreiadosul" className="categoriasLink">
                            <img src={CoreiadoSul} alt="" className="categoriasImg" />
                            <p className="categoriasDescricao">Coreia do Sul: Terra do K-pop e da Tecnologia</p>
                        </Link>
                    </div>
                </section>

            </section>

        </div>
    )
}

export default Home