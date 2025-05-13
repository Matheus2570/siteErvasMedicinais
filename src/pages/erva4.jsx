import React from "react";
import "./ervaGlobal.css";
import CopaibaImg from "../assets/OleodeCopaiba.jpg";

function Copaiba() {
  return (
    <div className="planta-container">
      <div className="planta-header">
        <img src={CopaibaImg} alt="Óleo de Copaíba" className="planta-img-lateral" />
        <div className="planta-header-texto">
          <h1>Óleo de Copaíba</h1>
          <p><strong>Nome científico:</strong> <em>Copaifera langsdorffii</em></p>
          <p><strong>Nome popular:</strong> Copaíba</p>
          <p><strong>Parte usada:</strong> Resina (óleo extraído do tronco)</p>
        </div>
      </div>

      <div className="planta-secao">
        <h2>Uso indígena</h2>
        <p>
          Os indígenas usam o óleo direto da árvore pra tratar feridas, tosse e inflamações. Ele também é usado como “antibiótico natural”.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Funciona mesmo?</h2>
        <p>
          Sim! Ele tem propriedades antimicrobianas e cicatrizantes comprovadas. Atua combatendo infecções e acelerando a cura da pele.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Uso atual</h2>
        <p>
          Está presente em pomadas, shampoos e loções. Também é usado como suplemento natural pra saúde intestinal e imunidade.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Alternativa parecida</h2>
        <p>
          O própolis tem funções parecidas, usado também como antibiótico natural e pra fortalecer a imunidade.
        </p>
      </div>
    </div>
  );
}

export default Copaiba;
