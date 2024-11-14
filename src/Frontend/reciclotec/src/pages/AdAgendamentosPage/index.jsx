import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import icon from '../../assets/img/icon.png';
import '../AdAgendamentosPage/adagendamentos.css';
var url = 'https://mtrwdw-3000.csb.app';

const AdminPanel = () => {
  return (
    // <div className="admin-container">
    //   <aside className="sidebar">
    //     <div className="logo">
    //       <h1>Admin</h1>
    //     </div>
    //     <nav className="menu">
    //       <ul>
    //         <li><a href="#">Novo Usuário</a></li>
    //         <li><a href="#">Atualizar Perfil</a></li>
    //         <li><a href="#">Agendamentos</a></li>
    //       </ul>
    //     </nav>
    //   </aside>
    <div className="admin-panel-body">
            <div className="admin-panel-sidebar">
                <div className="admin-panel-logo">
                    <h2 className="admin-panel-icon"><i className='bx bx-recycle'></i> ReCicloTec</h2>
                    <h1>Painel Administrativo</h1>
                </div>
                <nav className="admin-panel-menu">
                    <a href="/agendamento">Agendamentos</a>
                    <a href="/adUsuario">Cadastrar Usuários</a>
                    <a href="/atUsuario">Atualizar Perfil</a>
                </nav>
            </div>
      <section className="content">
        <div className="appointments-section">
          <h2>Agendamentos</h2>
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Serviços</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>19/08/2021</td>
                <td>João Silva</td>
                <td>joaozinho@yahoo.com</td>
                <td>Recolhimento de eletronicos</td>
                <td>Pendente</td>
                <td>
                  <button className="button-confirm">
                    <span>&#10003;</span>
                  </button>
                  <button className="button-delete">
                    <span>&#10006;</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>18/02/2028</td>
                <td>Maria Oliveira</td>
                <td>mariazinhaoliveirinha@gmail.com</td>
                <td>Reciclagem de baterias</td>
                <td>Confirmado</td>
                <td>
                  <button className="button-confirm">
                    <span>&#10003;</span>
                  </button>
                  <button className="button-delete">
                    <span>&#10006;</span>
                  </button>
                </td>
              </tr>



            <tr>
                <td>18/02/2028</td>
                <td>Maria Oliveira</td>
                <td>mariazinhaoliveirinha@gmail.com</td>
                <td>Reciclagem de baterias</td>
                <td>Confirmado</td>
                <td>
                  <button className="button-confirm">
                    <span>&#10003;</span>
                  </button>
                  <button className="button-delete">
                    <span>&#10006;</span>
                  </button>
                </td>
              </tr>
            </tbody>
            <tr>
                <td>18/02/2028</td>
                <td>Maria Oliveira</td>
                <td>mariazinhaoliveirinha@gmail.com</td>
                <td>Reciclagem de baterias</td>
                <td>Confirmado</td>
                <td>
                  <button className="button-confirm">
                    <span>&#10003;</span>
                  </button>
                  <button className="button-delete">
                    <span>&#10006;</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>18/02/2028</td>
                <td>Maria Oliveira</td>
                <td>mariazinhaoliveirinha@gmail.com</td>
                <td>Reciclagem de baterias</td>
                <td>Cancelado</td>
                <td>
                  <button className="button-confirm">
                    <span>&#10003;</span>
                  </button>
                  <button className="button-delete">
                    <span>&#10006;</span>
                  </button>
                </td>
              </tr>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
