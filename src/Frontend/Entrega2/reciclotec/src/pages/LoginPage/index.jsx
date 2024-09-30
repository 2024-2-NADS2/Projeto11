import loginPhoto from '../../assets/img/lixologo.png';
import wave from '../../assets/img/wave1.jpg';
import '../LoginPage/login.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const LoginPage = () => {

   useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function addcl() {
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    }

    function remcl() {
        let parent = this.parentNode.parentNode;
        if (this.value === "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach(input => {
        input.addEventListener("focus", addcl);
        input.addEventListener("blur", remcl);
    });

    return () => {
        inputs.forEach(input => {
            input.removeEventListener("focus", addcl);
            input.removeEventListener("blur", remcl);
        });
    };
}, []);

    return (
        <div>
            <img className="wave_login" src={wave} />
            <div className="container_login">
                <div className="img_login">
                    <img src={loginPhoto} />
                </div>
                <div className="login_content">
                    <form action="index.html">
                        <h2 className="logo_login"><i className='bx bx-recycle'></i> ReCicloTec</h2>
                        <p className='p_login'>
                            Ainda não está cadastrado? <Link id="cadastro_login" to="/cadastro">Cadastre-se aqui</Link>
                        </p>
                        <div className="input_div_login one_login">
                            <div className="i_login">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Email</h5>
                                <input type="text" className="input" />
                            </div>
                        </div>
                        <div className="input_div_login pass_login">
                            <div className="i_login">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Senha</h5>
                                <input type="password" className="input" />
                            </div>
                        </div>
                        <a className="login_a" href="#">Esqueceu a senha?</a>
                        <input type="submit" className="btn_login_custom" value="Login" /> {/* Atualizado aqui */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
