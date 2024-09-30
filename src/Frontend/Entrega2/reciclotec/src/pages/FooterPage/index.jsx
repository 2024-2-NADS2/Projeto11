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
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms Of Use</a>
                        <a href="#">Our Company</a>
                    </div>
                    <p>&#169; ReCicloTec All Right Reserved.</p>
                </footer>
            </section>
        </div>
    )
}

export default FooterPage;