import CoreiadoSulTwo from "../img/CoreiadoSul02.jpg";
import CoreiadoSulThree from "../img/CoreiadoSul03.jpg";

function CoreiadoSul() {
    return (
        <div>
            <h2 className="tituloPaginas">Coreia do Sul: Terra do K-pop e da Tecnologia</h2>
            <br />
            <p>
            A Coreia do Sul ganhou o mundo com o K-pop e os doramas, mas oferece muito mais.
            </p>
            
            <img src={CoreiadoSulThree} alt="" className="imagensPaginas"  />

            <p>
            Em Seul, o Palácio Gyeongbokgung revela a história da dinastia Joseon. A N Seoul Tower oferece vistas panorâmicas incríveis. Em Busan, a Praia de Haeundae é um dos destinos litorâneos mais populares.
            </p>

            
            <img src={CoreiadoSulTwo} alt="" className="imagensPaginas" />

            <p>Na gastronomia, kimchi, bulgogi e churrasco coreano são experiências imperdíveis.</p>
        </div>
    )
}

export default CoreiadoSul