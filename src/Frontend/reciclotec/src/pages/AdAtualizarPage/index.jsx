import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../AdAtualizarPage/adatualizar.css';
var url = 'https://mtrwdw-3000.csb.app';



const AdminPanel = () => {
    return (
        <div className="admin-panel-body">
            <aside className="admin-panel-sidebar">
                <div className="admin-panel-logo">
                    <h2 className="admin-panel-icon"><i className='bx bx-recycle'></i> ReCicloTec</h2>
                    <h1>Painel Administrativo</h1>
                </div>
                <nav className="admin-panel-menu">
                    <a href="/adAgendamentos">Agendamentos</a>
                    <a href="/adUsuario">Cadastrar Usuários</a>
                    <a href="/adAtualizar">Atualizar Perfil</a>
                </nav>
            </aside>
            
            <main className="admin-panel-main-content">
                <div className="admin-panel-container">
                    <h2 className="admin-panel-h2">Atualizar - Usuários</h2>
                    <p>Utilize o formulário para atualizar as informações de um usuário já existente.</p>
                    <form action="#" method="POST" className="admin-panel-form">
                        <div className="admin-panel-form-group">
                            <label htmlFor="nome" className="admin-panel-label">Nome:</label>
                            <input type="text" id="nome" name="nome" className="admin-panel-input" required />
                        </div>
                        <div className="admin-panel-form-group">
                            <label htmlFor="email" className="admin-panel-label">Email:</label>
                            <input type="email" id="email" name="email" className="admin-panel-input" required />
                        </div>
                        <div className="admin-panel-form-group">
                            <label htmlFor="senha" className="admin-panel-label">Senha:</label>
                            <input type="password" id="senha" name="senha" className="admin-panel-input" required />
                        </div>
                        <button type="submit" className="admin-panel-button">Salvar</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AdminPanel;
