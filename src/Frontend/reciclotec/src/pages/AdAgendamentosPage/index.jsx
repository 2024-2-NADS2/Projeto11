import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../AdAgendamentosPage/adAgendamentos.css';
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
        setAgendamentos(response.data);
      } catch (error) {
        setError('Erro ao carregar agendamentos.');
      }
    };

    fetchAgendamentos();
  }, []);

  const confirmarAgendamento = (idAgendamento) => {
    axios.put(`${url}/confirmarAgendamentos`, { idAgendamento }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log("Resposta do servidor ao confirmar:", response.data);
      const { dataColetada, status } = response.data; 
      setAgendamentos((prev) =>
        prev.map((agendamento) =>
          agendamento.id_agendamento === idAgendamento
            ? { ...agendamento, dataColetada, status } 
            : agendamento
        )
      );
    })
    .catch((error) => {
      console.error("Erro ao concluir agendamento:", error);
      alert("Erro ao confirmar o agendamento. Tente novamente.");
    });
  };

  const deletarAgendamento = (idAgendamento) => {
    axios.delete(`${url}/deletarAgendamento`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        'Content-Type': 'application/json'
      },
      data: { idAgendamento },  
    })
    .then((response) => {
      console.log("Resposta do servidor ao deletar:", response.data);
      setAgendamentos((prev) =>
        prev.filter((agendamento) => agendamento.id_agendamento !== idAgendamento)
      );
    })
    .catch((error) => {
      console.error("Erro ao deletar o agendamento:", error);
      alert("Erro ao deletar o agendamento. Tente novamente.");
    });
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
                agendamentos.map((agendamento) => (
                  <tr key={agendamento.id_agendamento}>
                    <td>{new Date(agendamento.dataAgendada).toLocaleDateString()}</td>
                    <td>{agendamento.pessoa}</td>
                    <td>{agendamento.email}</td>
                    <td>{agendamento.produtos}</td>
                    <td>{agendamento.status}</td> 
                    <td>
                      <button
                        className="button-confirm"
                        onClick={() => confirmarAgendamento(agendamento.id_agendamento)}
                        disabled={agendamento.status === 'Concluído'} 
                      >
                        <span>&#10003;</span>
                      </button>
                      <button
                        className="button-delete"
                        onClick={() => deletarAgendamento(agendamento.id_agendamento)}
                      >
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
