import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import icon from '../../assets/img/icon.png';
import '../AdUsuarioPage/adUsuario.css';
var url = 'https://mtrwdw-3000.csb.app';

const AdUsuarioPage = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState(''); 
    const [messageType, setMessageType] = useState(''); 
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        empresa: '',
        permissao: 'admin'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${url}/cadastro-administrador`, formData, {
                headers: { 'Content-Type': 'application/json' }
            });

            setMessage("Usuário cadastrado com sucesso!");
            setMessageType('success');
            navigate('/adUsuario'); 
        } catch (error) {
            setMessage("Erro ao cadastrar o usuário, tente novamente.");
            setMessageType('error');
        }
    };

    return (
        <div className="admin-panel-body">
            <div className="admin-panel-sidebar">
                <div className="admin-panel-logo">
                    <h2 className="admin-panel-icon"><i className='bx bx-recycle'></i> ReCicloTec</h2>
                    <h1>Painel Administrativo</h1>
                </div>
                <nav className="admin-panel-menu">
                    <a href="/adAgendamentos">Agendamentos</a>
                    <a href="/adUsuario">Cadastrar Usuários</a>
                    <a href="/adAtualizar">Atualizar Perfil</a>
                </nav>
            </div>

            <div className="admin-panel-main-content">
                <div className="admin-panel-container">
                    <h2 className="admin-panel-h2">Cadastrar - Usuários</h2>
                    <p>Utilize o formulário para cadastrar um usuario. </p>

                    {message && ( 
                            <div className={`message ${messageType}`}>
                                {message}
                            </div>
                    )}

                    <form onSubmit={handleSubmit} className="admin-panel-form">
                        <div className="admin-panel-form-group">
                            <label htmlFor="nome" className="admin-panel-label">Nome:</label>
                            <input 
                                type="text" 
                                id="nome" 
                                name="nome" 
                                value={formData.nome} 
                                onChange={handleChange} 
                                className="admin-panel-input" 
                                required 
                            />
                        </div>
                        <div className="admin-panel-form-group">
                            <label htmlFor="email" className="admin-panel-label">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="admin-panel-input" 
                                required 
                            />
                        </div>
                        <div className="admin-panel-form-group">
                            <label htmlFor="senha" className="admin-panel-label">Senha:</label>
                            <input 
                                type="password" 
                                id="senha" 
                                name="senha" 
                                value={formData.senha} 
                                onChange={handleChange} 
                                className="admin-panel-input" 
                                required 
                            />
                        </div>
                        <div className="admin-panel-form-group">
                            <label htmlFor="empresa" className="admin-panel-label">ONG:</label>
                            <select 
                                name="empresa" 
                                value={formData.empresa} 
                                onChange={handleChange}
                                className="admin-panel-select"
                                required
                            >
                                <option value="">Selecione uma ONG</option>
                                <option value="ecobraz">Ecobraz</option>
                            </select>
                        </div>
                        <fieldset className="admin-panel-access-profile">
                            <legend>Permissão:</legend>
                            <label>
                                <input 
                                    type="radio" 
                                    name="permissao" 
                                    value="admin" 
                                    checked={formData.permissao === 'admin'} 
                                    onChange={handleChange} 
                                /> Administrador
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="permissao" 
                                    value="ong" 
                                    checked={formData.permissao === 'ong'} 
                                    onChange={handleChange} 
                                /> ONG
                            </label>
                        </fieldset>
                        <button type="submit" className="admin-panel-button">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdUsuarioPage;
