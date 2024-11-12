import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import wave from '../../assets/img/wave1.jpg';
import loginPhoto from '../../assets/img/lixologo.png';
import '../ColetaPage/coleta.css';

const ColetaPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        uf: '',
        cidade: '',
        estado: '',
        dataAgendada: '',
        ong: '',
        produtos: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            produtos: checked
                ? [...prev.produtos, value]
                : prev.produtos.filter(item => item !== value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formFinal = {
            nome: formData.nome,
            cpf: formData.cpf,
            email: formData.email,
            telefone: formData.telefone,
            cep: formData.cep,
            uf: formData.uf,
            cidade: formData.cidade,
            estado: formData.estado,
            endereco: formData.endereco,
            numero: formData.numero,
            complemento: formData.complemento,
            bairro: formData.bairro,
            ong: formData.ong,
            produtos: formData.produtos,
            dataAgendada: formData.dataAgendada
        };
        
        try {
            await axios.post('http://localhost:3000/agendamentoColeta', formFinal, {
                headers: { 'Content-Type': 'application/json' }
            });

            alert("Agendamento realizado com sucesso!");

            navigate("/");
        } catch (error) {
            alert("Erro ao realizar o agendamento, tente novamente.");

            console.log(error);
        }
    };
    

    // Dados das ONGs
    const ongData = {
        ecobraz: {
            nome: "Ecobraz",
            mapUrl: "https://www.google.com/maps?q=Ecobraz Emigre&output=embed"
        },
    };

    return (
        <div>
            <img className="wave_login" src={wave} alt="Wave Background" />
            <div className="container_login">
                <div className="img_login">
                    <img src={loginPhoto} alt="Collection Logo" />
                </div>
                <div className="login_content">
                    <form onSubmit={handleSubmit} className="coleta-form">
                        <h2 className="logo_login">
                            <i className='bx bx-recycle'></i> ReCicloTec
                        </h2>
                        <h3 className="coleta-subtitle">Agendamento de Coleta</h3>
                        <div className="form-grid">
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="nome" 
                                    placeholder="Coloque Seu Nome" 
                                    value={formData.nome} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Seu Melhor E-mail" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="telefone" 
                                    placeholder="Telefone Para Contato" 
                                    value={formData.telefone} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="cpf" 
                                    placeholder="Seu CPF" 
                                    value={formData.cpf} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="cep" 
                                    placeholder="CEP" 
                                    value={formData.cep} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="endereco" 
                                    placeholder="Endereço" 
                                    value={formData.endereco} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="numero" 
                                    placeholder="Número" 
                                    value={formData.numero} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="complemento" 
                                    placeholder="Complemento" 
                                    value={formData.complemento} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="bairro" 
                                    placeholder="Bairro" 
                                    value={formData.bairro} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="uf" 
                                    placeholder="UF" 
                                    value={formData.uf} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="cidade" 
                                    placeholder="Cidade" 
                                    value={formData.cidade} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="estado" 
                                    placeholder="Estado" 
                                    value={formData.estado} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="date" 
                                    name="dataAgendada" 
                                    placeholder="Data de Agendamento (DD/MM/AAAA)" 
                                    value={formData.dataAgendada} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <select 
                                    name="ong" 
                                    value={formData.ong} 
                                    onChange={handleChange}
                                    className="ong-select"
                                    required
                                >
                                    <option value="">Selecione uma ONG</option>
                                    <option value="ecobraz">Ecobraz</option>
                                </select>
                            </div>
                        </div>
                        <p className="p_login">O que será descartado?</p>
                        <div className="checkbox-group">
                            <label><input type="checkbox" value="Baterias" onChange={handleCheckboxChange} /> Baterias</label>
                            <label><input type="checkbox" value="Importação Temporária" onChange={handleCheckboxChange} /> Descarte de importação temporária</label>
                            <label><input type="checkbox" value="Equipamentos Hospitalares" onChange={handleCheckboxChange} /> Equipamentos hospitalares</label>
                            <label><input type="checkbox" value="Iluminação" onChange={handleCheckboxChange} /> Iluminação</label>
                            <label><input type="checkbox" value="Importação com Crédito" onChange={handleCheckboxChange} /> Descarte de importação com crédito</label>
                            <label><input type="checkbox" value="Equipamentos de Impressão" onChange={handleCheckboxChange} /> Equipamentos de impressão</label>
                            <label><input type="checkbox" value="Informática" onChange={handleCheckboxChange} /> Informática</label>
                            <label><input type="checkbox" value="Ar Condicionado" onChange={handleCheckboxChange} /> Ar condicionado</label>
                            <label><input type="checkbox" value="Máquinas Industriais" onChange={handleCheckboxChange} /> Máquinas e equipamento industriais</label>
                            <label><input type="checkbox" value="Peças Eletrônicas" onChange={handleCheckboxChange} /> Peças e materiais eletrônicos</label>
                            <label><input type="checkbox" value="Equipamentos Eletrônicos" onChange={handleCheckboxChange} /> Equipamentos eletrônicos</label>
                        </div>

                        
                        <button type="submit" className="btn_login_custom">
                            Salvar e Continuar
                        </button>

                        {formData.ong && (
                            <div className="map-section">
                                <h3>{ongData[formData.ong].nome}</h3>
                                <div id="map">
                                    <iframe
                                        src={ongData[formData.ong].mapUrl}
                                        width="100%"
                                        height="300"
                                        style={{ border: '0' }}
                                        allowFullScreen
                                        loading="lazy"
                                        title={`Mapa da ${ongData[formData.ong].nome}`}
                                    />
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ColetaPage;