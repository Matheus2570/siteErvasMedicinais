import React from "react";
import "./ervaGlobal.css";
import AndirobaImg from "../assets/OleodeAndiroba.jpg";

function Andiroba() {
  return (
    <div className="planta-container">
      <div className="planta-header">
        <img src={AndirobaImg} alt="Óleo de Andiroba" className="planta-img-lateral" />
        <div className="planta-header-texto">
          <h1>Óleo de Andiroba</h1>
          <p><strong>Nome científico:</strong> <em>Carapa guianensis</em></p>
          <p><strong>Nome popular:</strong> Andiroba</p>
          <p><strong>Parte usada:</strong> Sementes (óleo extraído)</p>
        </div>
      </div>

      <div className="planta-secao">
        <h2>Uso indígena</h2>
        <p>
          O óleo é usado na pele contra picadas, inflamações e dores. Também serve pra massagear músculos cansados e até espantar insetos.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Funciona mesmo?</h2>
        <p>
          A ciência confirma que ele tem ação anti-inflamatória, cicatrizante e repelente. É cheio de ácidos graxos benéficos.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Uso atual</h2>
        <p>
          É usado em cosméticos, cremes, sabonetes e loções calmantes. Também é vendido como óleo puro, direto da floresta pra sua pele.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Alternativa parecida</h2>
        <p>
          O óleo de copaíba é uma alternativa natural bem parecida, usado pra cuidar da pele e tratar inflamações também.
        </p>
      </div>
    </div>
  );
}

export default Andiroba;
