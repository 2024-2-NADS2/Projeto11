import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../AdAgendamentosPage/adAgendamentos.css';
var url = 'https://mtrwdw-3000.csb.app';

const AdAgendamentosPage = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); 
  const [modalAction, setModalAction] = useState(null); 
  const [selectedAgendamento, setSelectedAgendamento] = useState(null); 

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
    setSelectedAgendamento(idAgendamento);
    setModalAction('confirmar');
    setModalVisible(true);
  };

  const deletarAgendamento = (idAgendamento) => {
    setSelectedAgendamento(idAgendamento);
    setModalAction('deletar');
    setModalVisible(true);
  };

  const executeModalAction = () => {
    if (modalAction === 'confirmar') {
      axios.put(`${url}/confirmarAgendamentos`, { idAgendamento: selectedAgendamento }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          const { dataColetada, status } = response.data;
          setAgendamentos((prev) =>
            prev.map((agendamento) =>
              agendamento.id_agendamento === selectedAgendamento
                ? { ...agendamento, dataColetada, status }
                : agendamento
            )
          );
        })
        .catch((error) => {
          alert('Erro ao confirmar o agendamento. Tente novamente.');
        });
    } else if (modalAction === 'deletar') {
      axios.delete(`${url}/deletarAgendamento`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
          'Content-Type': 'application/json',
        },
        data: { idAgendamento: selectedAgendamento },
      })
        .then((response) => {
          setAgendamentos((prev) =>
            prev.filter((agendamento) => agendamento.id_agendamento !== selectedAgendamento)
          );
        })
        .catch((error) => {
          alert('Erro ao deletar o agendamento. Tente novamente.');
        });
    }

    setModalVisible(false);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="admin-panel-body">
      <div className="admin-panel-sidebar">
        <div className="admin-panel-logo">
          <h2 className="admin-panel-icon"><i className="bx bx-recycle"></i> ReCicloTec</h2>
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

      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{modalAction === 'confirmar' ? 'Confirmar Agendamento' : 'Deletar Agendamento'}</h3>
            <p>
              {modalAction === 'confirmar' ? 'Você tem certeza que deseja confirmar este agendamento?': 'Você tem certeza que deseja deletar este agendamento?'}
            </p>
            <div className="modal-actions">
              <button onClick={executeModalAction}>Confirmar</button>
              <button onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdAgendamentosPage;
