import aboutPhoto from '../../assets/img/about.png';
import './quemSomos.css';

const QuemSomosPage = () => {
    return (
        <div>
            <section className="about" id="about">
                <div className="heading">
                    <span>Quem somos</span>
                    <h1>Nossa missão</h1>
                </div>
                <div className="container">
                    <div className="about-img">
                        <img className="img_about"  src={aboutPhoto} alt="Imagem ilustrativa sobre reciclagem" />
                    </div>
                    <div className="about-text">
                        <h2>Promovendo a Sustentabilidade e o Futuro Verde</h2>
                        <p>Somos uma plataforma comprometida em facilitar o descarte correto e a gestão de lixo eletrônico. Nossa missão é conectar pessoas e empresas a pontos de coleta de forma simples e eficiente, contribuindo para a preservação do meio ambiente e para a conscientização sobre a importância da reciclagem.</p>
                        <p>Nosso objetivo é criar um impacto positivo, tornando o processo de coleta de resíduos eletrônicos acessível e gamificado, incentivando práticas sustentáveis em todo o país. Acreditamos que pequenas ações podem gerar grandes mudanças, e estamos aqui para tornar isso possível.</p>
                        <a href="#contact" className="btn">Entre em Contato</a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default QuemSomosPage;
