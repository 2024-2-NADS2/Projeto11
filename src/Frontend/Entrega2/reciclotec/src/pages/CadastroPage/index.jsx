import { Link, useNavigate } from 'react-router-dom';
import '../CadastroPage/cadastro.css';
import cadastroPhoto from '../../assets/img/lixologo.png';
import wave from '../../assets/img/wave1.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';


const CadastroPage = () => {

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

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3000/cadastro', {nome, cpf, email, telefone, senha})
            .then(res => {
                console.log(res);
                if (res.status === 200 || res.status === 201) {
                    // Login bem-sucedido
                    console.log("Cadastro bem-sucedido");
                    navigate('/login');
                }
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 401) {
                        window.alert('Usuário já cadastrado ou dados incorretos.');
                    } else if (err.response.status === 400) {
                        window.alert('Dados incompletos ou inválidos.');
                    } else {
                        window.alert('Ocorreu um erro. Tente novamente mais tarde.');
                    }
                } else {
                    console.log(err);
                    window.alert('Erro de conexão. Tente novamente mais tarde.');
                }
            });
    }

    return (
        <>
            <img className="wave_cadastro" src={wave} alt="Background wave" />
            <div className="container_cadastro">
                <div className="img_cadastro">
                    <img src={cadastroPhoto} alt="Logo ReCicloTec" />
                </div>
                <div className="cadastro_content">
                    <form onSubmit={handleSubmit}>
                        <h2 className="logo_cadastro"><i className='bx bx-recycle'></i> ReCicloTec</h2>
                        <h3>Cadastre-se</h3>
                        
                        <div className="input_div_cadastro one_cadastro">
                            <div className="i_cadastro">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Nome</h5>
                                <input type="text" className="input" required onChange={e => setNome(e.target.value)} />
                            </div>
                        </div>
                        
                        <div className="input_div_cadastro one_cadastro">
                            <div className="i_cadastro">
                                <i className="fas fa-id-card"></i>
                            </div>
                            <div className="div">
                                <h5>CPF</h5>
                                <input type="text" className="input" maxLength="11" required onChange={e => setCpf(e.target.value)}/>
                            </div>
                        </div>
        
                        <div className="input_div_cadastro one_cadastro">
                            <div className="i_cadastro">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="div">
                                <h5>Email</h5>
                                <input type="email" className="input" required onChange={e => setEmail(e.target.value)}/>
                            </div>
                        </div>
        
                        <div className="input_div_cadastro one_cadastro">
                            <div className="i_cadastro">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="div">
                                <h5>Telefone</h5>
                                <input type="tel" className="input" required onChange={e => setTelefone(e.target.value)}/>
                            </div>
                        </div>
        
                        <div className="input_div_cadastro pass_cadastro">
                            <div className="i_cadastro"> 
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Senha</h5>
                                <input type="password" className="input" required onChange={e => setSenha(e.target.value)}/>
                            </div>
                        </div>
        
                        <Link className="cadastro_a" to="/login">Já possui uma conta? Faça login</Link>
                        <input type="submit" className="btn_cadastro_custom" value="Cadastrar" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default CadastroPage;
