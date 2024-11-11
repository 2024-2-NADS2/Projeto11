import React, { useState } from "react";
import wave from '../../assets/img/wave1.jpg';
import icon from '../../assets/img/lixologo.png';
import './produto.css';

const ProdutoPage = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setSelectedItems(prev => (
            checked ? [...prev, value] : prev.filter(item => item !== value)
        ));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Itens selecionados:", selectedItems);
    };

    return (
        <div>
            <img className="wave_login" src={wave} alt="Fundo" />
            <div className="container_login">
                <div className="img_login">
                    <img src={icon} alt="Logo" />
                </div>
                <div className="login_content">
                    <form onSubmit={handleSubmit}>
                        <h2 className="logo_login"><i className='bx bx-recycle'></i> ReCicloTec</h2>
                        <h2 className="produto_titulo">DESCARTE DE ELETRÔNICOS - AGENDAMENTO DE COLETA</h2>
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
                        <input type="submit" className="btn_login_custom" value="AGENDAR SUA COLETA" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProdutoPage;
