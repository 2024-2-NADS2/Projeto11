import loginPhoto from '../../assets/img/lixologo.png';
import wave from '../../assets/img/wave1.jpg';
import '../LoginPage/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
var url = 'https://mtrwdw-3000.csb.app';

const LoginPage = () => {

    const navigate = useNavigate();

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

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        axios.post(`${url}/login`, {email, senha})
            .then(res => {
                if (res.status === 200) {
                    // Login bem-sucedido
                    console.log("Login bem-sucedido");
                    navigate('/coleta');
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 401) {
                    // Email ou senha incorreta
                    window.alert('Email ou Senha Incorreta!');
                } else {
                    console.log(err);
                    window.alert('Ocorreu um erro. Tente novamente mais tarde.');
                }
            });
    }


    return (
        <div>
            <img className="wave_login" src={wave} />
            <div className="container_login">
                <div className="img_login">
                    <img src={loginPhoto} />
                </div>
                <div className="login_content">
                    <form onSubmit={handleSubmit}>
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
                                <input type="text" className="input" required onChange={e => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="input_div_login pass_login">
                            <div className="i_login">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Senha</h5>
                                <input type="password" className="input" required onChange={e => setSenha(e.target.value)}/>
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
