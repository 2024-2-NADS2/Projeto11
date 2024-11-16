import './parcerias.css';
import ecobraz from '../../assets/img/ecobraz.jpg'

const ParceriasPage = () => {
    return (
        <div>
            <section className="parcerias" id="parcerias">
                <div className="heading">
                    <span>Parcerias</span>
                    <h1>Construindo Juntos um Futuro Sustentável</h1>
                </div>
                <div className="parcerias-container">
                    {/* Parceria 1 - ECOBRAZ */}
                    <div className="box_parcerias">
                        <div className="review-profile">
                            <img src={ecobraz} alt="Logo Ecobraz" />
                            <h3>Ecobraz Emigre</h3>
                        </div>
                        <p>A Ecobraz Emigre é a maior organização de reciclagem de lixo eletrônico do mundo, pioneira na captação de CO₂ por meio da reciclagem. Com seu Centro de Pesquisa e Desenvolvimento Tecnológico, promove soluções inovadoras e sustentáveis. Apoie a Ecobraz: agende sua coleta de lixo eletrônico de forma rápida e sem custos.
                        </p>
                        <div className="social-icons">
                            <a href="https://www.youtube.com/@ecobrazemigre2500"><i className="bx bxl-youtube"></i></a>
                            <a href="https://www.instagram.com/ecobrazemigre/"><i className="bx bxl-instagram"></i></a>
                            <a href="https://ecobraz.org/"><i className="bx bx-globe"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ParceriasPage;
