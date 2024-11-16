import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../AdAgendamentosPage/adagendamentos.css';
var url = 'http://localhost:3000';

const AdAgendamentosPage = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const token = localStorage.getItem('adminToken'); 
        const response = await axios.get(`${url}/visualizarAgendamentos`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        console.log("Dados recebidos:", response.data);
        setAgendamentos(response.data);
      } catch (error) {
        console.error('Erro ao carregar agendamentos:', error);
        setError('Erro ao carregar agendamentos.');
      }
    };

    fetchAgendamentos();
  }, []);

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
              {agendamentos.length > 0 ? (
                agendamentos.map((agendamento, index) => (
                  <tr key={index}>
                    <td>{new Date(agendamento.dataAgendada).toLocaleDateString()}</td>
                    <td>{agendamento.pessoa}</td>
                    <td>{agendamento.email}</td>
                    <td>{agendamento.produtos}</td>
                    <td>{agendamento.dataColeta != null ? 'Concluído' : 'Pendente'}</td> 
                    <td>
                      <button className="button-confirm">
                        <span>&#10003;</span>
                      </button>
                      <button className="button-delete">
                        <span>&#10006;</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Nenhum agendamento encontrado</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdAgendamentosPage;
