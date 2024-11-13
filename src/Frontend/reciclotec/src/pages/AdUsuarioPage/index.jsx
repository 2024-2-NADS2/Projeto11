import React from 'react';
import '../AdUsuarioPage/adusuario.css';
import axios from 'axios';
import icon from '../../assets/img/icon.png';

function AdUsuarioPage() {
  return (
    <div className="admin-panel-body">
      <div className="admin-panel-sidebar">
        <div className="admin-panel-logo">
          <h1>RECICLOTEC</h1>
          <img className="admin-panel-icon" src={icon} alt="icon"/>
          <h1>Painel Administrativo</h1>
        </div>
        <nav className="admin-panel-menu">
          <a href="agendamento.html">Agendamentos</a>
          <a href="#usuarios">Usuários</a>
          <a href="#atualizar">Atualizar Perfil</a>
        </nav>
      </div>

      <div className="admin-panel-main-content">
        <div className="admin-panel-container">
          <h2 className="admin-panel-h2">Usuários - Alterar</h2>
          <p>Utilize o formulário para alterar os dados de um usuário já cadastrado.</p>
          <form id="userForm">
            <div className="admin-panel-form-group">
              <label htmlFor="name" className="admin-panel-label">Nome:</label>
              <input type="text" id="name" name="name" className="admin-panel-input" />
            </div>
            <div className="admin-panel-form-group">
              <label htmlFor="email" className="admin-panel-label">E-mail:</label>
              <input type="email" id="email" name="email" className="admin-panel-input" />
            </div>
            <div className="admin-panel-form-group">
              <label htmlFor="username" className="admin-panel-label">Usuário:</label>
              <input type="text" id="username" name="username" className="admin-panel-input" />
            </div>
            <div className="admin-panel-form-group">
              <label htmlFor="password" className="admin-panel-label">Senha:</label>
              <input type="password" id="password" name="password" className="admin-panel-input" />
            </div>
            <div className="admin-panel-form-group">
              <label htmlFor="confirmPassword" className="admin-panel-label">Confirmação da senha:</label>
              <input type="password" id="confirmPassword" name="confirmPassword" className="admin-panel-input" />
            </div>
            <div className="admin-panel-form-group">
              <label htmlFor="status" className="admin-panel-label">Status:</label>
              <select id="status" name="status" className="admin-panel-select">
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
              </select>
            </div>
            <fieldset className="admin-panel-access-profile">
              <legend>Perfil de acesso:</legend>
              <label><input type="radio" name="accessProfile" value="admin" /> Administrador</label>
              <label><input type="radio" name="accessProfile" value="padrao" /> Padrão</label>
              <label><input type="radio" name="accessProfile" value="ONG" /> ONG</label>
            </fieldset>
            <button type="submit" className="admin-panel-button">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdUsuarioPage;
