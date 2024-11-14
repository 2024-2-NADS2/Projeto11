import './ods.css';
import cicloColeta from '../../assets/img/cicloColeta.png';
import ods11 from '../../assets/img/ods11.jpg';
import ods13 from '../../assets/img/ods13.jpg';
import ods15 from '../../assets/img/ods15.jpg';

const OdsPage = () => {
  return (
    <div>
        <div className="heading">
          <span>Compromisso com o Futuro</span>
          <h1>Coleta Responsável e Sustentabilidade</h1>
    </div>
      <div className="ods-page-container">
        <div className="ods-page-diagram">
          <h2>Descarte de Eletrônicos - Etapas da Coleta</h2>
          <div className="ods-page-steps">
            <img src={cicloColeta} alt="Ciclo de Coleta" />
          </div>
        </div>

        <div className="ods-page-ods">
          <h2>ReCicloTec ODS</h2>
          <div className="ods-page-ods-goals">
            <div className="ods-page-ods-goal">
              <img src={ods11} alt="ODS 11" />
            </div>
            <div className="ods-page-ods-goal">
              <img src={ods13} alt="ODS 13" />
            </div>
            <div className="ods-page-ods-goal">
              <img src={ods15} alt="ODS 15" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdsPage;
