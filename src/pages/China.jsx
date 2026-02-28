import ChinaTwo from "../img/China02.jpg";
import ChinaThree from "../img/China03.jpg";

function China() {
    return (
        <div>
            <h2 className="tituloPaginas">China: Grandes exportadores</h2>
            <br />
            <p>
            A China une passado e modernidade. A Grande Muralha é um dos monumentos mais impressionantes do mundo. A Cidade Proibida revela séculos de história imperial.
            </p>

            <img src={ChinaThree} alt="" className="imagensPaginas" />
            

            <p>
            Em Xi’an, o Exército de Terracota impressiona pela grandiosidade. Já Xangai simboliza o dinamismo econômico do país.
            </p>

            <img src={ChinaTwo} alt="" className="imagensPaginas" />

            <p>
            A culinária varia entre regiões, com destaque para o pato laqueado de Pequim e os pratos apimentados de Sichuan.
            </p>
        </div>
    )
}

export default China