import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <header>
            <a href="#home" className="logo"> <i className='bx bx-recycle'></i> ReCicloTec</a>
                <div className="bx bx-menu" id="menu-icon"></div>
                <ul className="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Quem Somos</a></li>
                    <li><a href="#processo">Processo de Coleta</a></li>
                    <li><a href="#info">Informações de Coleta</a></li>
                    <li><a href="#agende">Agende sua Coleta</a></li>
                    <li><a href="#news">Notícias</a></li>
                    <li><a href="#parcerias">Parcerias</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </header>
        </div>
    );
}

export default Navbar;
