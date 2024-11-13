import React from 'react';
import '../AdUsuarioPage/adusuario.css';
import axios from 'axios';
import icon from '../../assets/img/icon.png';
function AdUsuarioPage() {
  return (
    <div className="admin-panel">
      <div className="sidebar">
        <div className="logo">
          <h1>RECICLOTEC</h1>
          <img className="icon" src={icon} alt="icon"/>
           <h1>Painel Administrativo</h1>
        </div>
        <nav className="menu">
          <a href="agendamento.html">Agendamentos</a>
          <a href="#usuarios">Usuários</a>
          <a href="#atualizar">Atualizar Perfil</a>
        </nav>
      </div>

      <div className="main-content">
        <div className="container">
          <h2>Usuários - Alterar</h2>
          <p>Utilize o formulário para alterar os dados de um usuário já cadastrado.</p>
          <form id="userForm">
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Usuário:</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmação da senha:</label>
              <input type="password" id="confirmPassword" name="confirmPassword" />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status:</label>
              <select id="status" name="status">
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
              </select>
            </div>
            <fieldset className="access-profile">
              <legend>Perfil de acesso:</legend>
              <label><input type="radio" name="accessProfile" value="admin" /> Administrador</label>
              <label><input type="radio" name="accessProfile" value="padrao" /> Padrão</label>
              <label><input type="radio" name="accessProfile" value="ONG" /> ONG</label>
            </fieldset>
            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdUsuarioPage;
