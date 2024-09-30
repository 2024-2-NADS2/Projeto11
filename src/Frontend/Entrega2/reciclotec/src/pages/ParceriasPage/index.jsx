import './parcerias.css';

const ParceriasPage = () => {
    return (
        <div>
            <section className="parcerias" id="parcerias">
                <div className="heading">
                    <span>Parcerias</span>
                    <h1>Construindo Juntos um Futuro Sustentável</h1>
                </div>
                <div className="parcerias-container">
                    {/* Parceria 1 - Generica */}
                    <div className="box_parcerias">
                        <div className="review-profile">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" alt="Microsoft Logo" />
                            <h3>Microsoft</h3>
                        </div>
                        {/* Texto Gerico */}
                        <p>A Microsoft tem apoiado a reciclagem de lixo eletrônico através de várias iniciativas em todo o mundo, promovendo práticas sustentáveis e conscientizando o público.</p>
                        <div className="social-icons">
                            <a href="#"><i className="bx bxl-facebook"></i></a>
                            <a href="#"><i className="bx bxl-instagram"></i></a>
                            <a href="#"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    {/* Parceria 2 - Generica */}
                    <div className="box_parcerias">
                        <div className="review-profile">
                            <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg" alt="Apple Logo" />
                            <h3>Apple</h3>
                        </div>
                        {/* Texto Gerico */}
                        <p>Com a iniciativa Apple Renew, a empresa busca incentivar seus clientes a devolver dispositivos antigos para reciclagem, ajudando a reduzir o impacto ambiental.</p>
                        <div className="social-icons">
                            <a href="#"><i className="bx bxl-facebook"></i></a>
                            <a href="#"><i className="bx bxl-instagram"></i></a>
                            <a href="#"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    {/* Parceria 3 - Generica */}
                    <div className="box_parcerias">
                        <div className="review-profile">
                            <img src="https://img.icons8.com/?size=512&id=17949&format=png" alt="Google Logo" />
                            <h3>Google</h3>
                        </div>
                        {/* Texto Gerico */}
                        <p>O Google apoia organizações sem fins lucrativos para promover a reciclagem e reutilização de dispositivos eletrônicos, investindo em programas de sustentabilidade.</p>
                        <div className="social-icons">
                            <a href="#"><i className="bx bxl-facebook"></i></a>
                            <a href="#"><i className="bx bxl-instagram"></i></a>
                            <a href="#"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ParceriasPage;