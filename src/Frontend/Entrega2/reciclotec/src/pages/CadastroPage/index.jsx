import { Link } from 'react-router-dom';
import '../CadastroPage/cadastro.css';
import cadastroPhoto from '../../assets/img/lixologo.png';
import wave from '../../assets/img/wave1.jpg';
import { useEffect } from 'react';

const CadastroPage = () => {

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
        <>
            <img className="wave_cadastro" src={wave} alt="Background wave" />
            <div className="container_cadastro">
                <div className="img_cadastro">
                    <img src={cadastroPhoto} alt="Logo ReCicloTec" />
                </div>
                <div className="cadastro_content">
                    <form action="cadastro.html">
                        <h2 className="logo_cadastro"><i className='bx bx-recycle'></i> ReCicloTec</h2>
                        <h3>Cadastre-se</h3>
                        
                        <div className="input_div_cadastro one_cadastro">
                            <div className="i_cadastro">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Nome</h5>
                                <input type="text" className="input" required />
                            </div>
                        </div>
                        
                        <div className="input_div_cadastro one_cadastro">
                            <div className="i_cadastro">
                                <i className="fas fa-id-card"></i>
                            </div>
                            <div className="div">
                                <h5>CPF</h5>
                                <input type="text" className="input" maxLength="11" required />
                            </div>
                        </div>
        
                        <div className="input_div_cadastro one_cadastro">
                            <div className="i_cadastro">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="div">
                                <h5>Email</h5>
                                <input type="email" className="input" required />
                            </div>
                        </div>
        
                        <div className="input_div_cadastro one_cadastro">
                            <div className="i_cadastro">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="div">
                                <h5>Telefone</h5>
                                <input type="tel" className="input" required />
                            </div>
                        </div>
        
                        <div className="input_div_cadastro pass_cadastro">
                            <div className="i_cadastro"> 
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Senha</h5>
                                <input type="password" className="input" required />
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
