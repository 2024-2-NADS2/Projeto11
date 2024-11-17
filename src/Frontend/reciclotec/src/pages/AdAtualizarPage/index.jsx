import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './adAtualizar.css';
var url = 'https://mtrwdw-3000.csb.app';

const AdminPanel = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState(''); 
    const [messageType, setMessageType] = useState(''); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const token = localStorage.getItem('adminToken');
    
                if (!token) {
                    navigate('/login');
                    return;
                }
    
                const response = await axios.get(`${url}/perfil-administrador`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
    
                const { nome, email, senha } = response.data;
                setNome(nome);
                setEmail(email);
                setSenha(senha);
            } catch (error) {
                navigate('/login');
            }
        };
    
        fetchAdminData();
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !email) {
            setMessage('Por favor, forneça nome e email.');
            setMessageType('error');
            return;
        }

        try {
            const token = localStorage.getItem('adminToken');
            const response = await axios.put(`${url}/atualizar-perfil`, { nome, email, senha }, {
                headers: {
                    'Authorization': `Bearer ${token}`,  
                },
            });

            setMessage('Atualizado realizado com sucesso!');
            setMessageType('success');
            navigate('/adAtualizar') ;
        } catch (error) {
            if (error.response) {
                if (error.response.status === 403) {
                    alert('Tente novamente.');
                } else {
                    alert(error.response.data);
                }
            } else {
                alert('Erro ao conectar com o servidor.');
            }
        }
    };

    return (
        <div className="admin-panel-body">
            <aside className="admin-panel-sidebar">
                <div className="admin-panel-logo">
                    <h2 className="admin-panel-icon"><i className="bx bx-recycle"></i> ReCicloTec</h2>
                    <h1>Painel Administrativo</h1>
                </div>
                <nav className="admin-panel-menu">
                    <a href="/adAgendamentos">Agendamentos</a>
                    <a href="/adAtualizar">Atualizar Perfil</a>
                </nav>
            </aside>
            
            <main className="admin-panel-main-content">
                <div className="admin-panel-container">
                    <h2 className="admin-panel-h2">Atualizar - Usuários</h2>
                    <p>Utilize o formulário para atualizar as informações de um usuário já existente.</p>

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
                                className="admin-panel-input"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                        <div className="admin-panel-form-group">
                            <label htmlFor="email" className="admin-panel-label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="admin-panel-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="admin-panel-form-group">
                            <label htmlFor="senha" className="admin-panel-label">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                className="admin-panel-input"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="admin-panel-button">Salvar</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AdminPanel;
