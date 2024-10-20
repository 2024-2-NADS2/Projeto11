import './footer.css';

const FooterPage = () => {
    return (
        <div>
            <section>
                <footer className="footer_section" id="footer_section">
                    <div className="social">
                        <a href="#"><i className="bx bxl-facebook"></i></a>
                        <a href="#"><i className="bx bxl-instagram"></i></a>
                        <a href="#"><i className="bx bxl-linkedin"></i></a>
                        <a href="#"><i className="bx bxl-youtube"></i></a>
                    </div>
                    <div className="links">
                        <a href="#">Política de Privacidade</a>
                        <a href="#">Termos de Uso</a>
                        <a href="#">Nossa Empresa</a>
                    </div>
                    <p>&#169; ReCicloTec Todos os Direitos Reservados.</p>
                </footer>
            </section>
        </div>
    )
}

export default FooterPage;