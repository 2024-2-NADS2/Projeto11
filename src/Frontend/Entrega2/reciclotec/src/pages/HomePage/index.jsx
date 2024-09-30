import homePhoto from '../../assets/img/home1.jpg';
import './home.css';

const HomePage = () => {
    return (
        <div>
            {/* Home  */}
            <section className="home" id="home">
                <div className="home-text">
                    <span> Seja Bem Vindo</span>
                    <h1> ReCicloTec</h1>
                    <h2> Reciclagem de <br /> Lixo Eletronico</h2>
                    <a href="#about" className="btn"> Participe agora</a>
                </div>
                <div className="home-img">
                    <img className="img_home" src={homePhoto} alt="" />
                </div>
            </section>
        </div>
    )
}

export default HomePage;