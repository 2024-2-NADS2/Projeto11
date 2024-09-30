import home2Photo from '../../assets/img/home2.jpg';
import './info.css';

const InfoColetaPage = () => {
    return (
        <div>
            <section className="info" id="info">
                <div className="heading">
                    <span>Entenda o processo</span>
                    <h1>Informações sobre Coleta</h1>
                </div>
                <div className="container">
                    <div className="info-img">
                        <img className="img_info"  src={home2Photo} alt="" />
                    </div>
                    <div className="info-text">
                        <h2>Como funciona nossa coleta de eletrônicos</h2>
                        <p>Nosso serviço de coleta de eletrônicos visa facilitar o descarte correto de dispositivos como celulares, computadores, televisores e eletrodomésticos. Para garantir a segurança e o transporte adequado dos itens coletados, siga as orientações a seguir:</p>
                        <ul>
                            <li>Remova baterias e outros componentes móveis dos dispositivos, se possível.</li>
                            <li>Certifique-se de que os eletrônicos estejam desligados e higienizados.</li>
                            <li>Embale os itens em caixas ou sacolas resistentes para facilitar o transporte seguro.</li>
                        </ul>
                        <p>Estamos comprometidos com a sustentabilidade, e a sua participação nesse processo ajuda a reduzir o impacto ambiental causado pelo descarte incorreto de eletrônicos.</p>
                        <a href="#agende" className="btn">Saiba mais</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InfoColetaPage;