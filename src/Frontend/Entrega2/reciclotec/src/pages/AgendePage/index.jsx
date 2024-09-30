import { Link } from 'react-router-dom';
import agendePhoto from '../../assets/img/agendee.png';


const AgendePage = () => {
    return (
        <div>
            <section className="agende" id="agende">
                <div className="heading">
                    <span>Contribua para um mundo mais sustentável</span>
                    <h1>Agende a entrega dos seus eletrônicos</h1>
                </div>
                <div className="container">
                    <div className="agende-text">
                        <h2>Como funciona o agendamento</h2>
                        <p>Nosso sistema de coleta de eletrônicos é simples e eficiente. Para começar, faça o login ou crie sua conta. Depois de acessar, você poderá fornecer as informações dos itens que deseja descartar e selecionar o ponto de entrega mais conveniente entre nossos parceiros, como ONGs e locais de descarte autorizados.</p>
                        <p>Após o agendamento, basta levar seus eletrônicos até o local escolhido na data e hora selecionada. Estamos comprometidos em garantir que seus dispositivos sejam reciclados de forma segura e responsável, contribuindo para um futuro mais sustentável.</p>
                        <Link to="/login" className="btn">Agende agora</Link>
                    </div>
                    <div className="agende-img">
                        <img src={agendePhoto} alt="Imagem ilustrativa sobre reciclagem e sustentabilidade" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AgendePage;