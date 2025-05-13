import React from "react";
import "./ervaGlobal.css";
import GuaranaImg from "../assets/PoDeGuarana.jpg";

function Guarana() {
  return (
    <div className="planta-container">
      <div className="planta-header">
        <img src={GuaranaImg} alt="Guaraná em pó" className="planta-img-lateral" />
        <div className="planta-header-texto">
          <h1>Guaraná em Pó</h1>
          <p><strong>Nome científico:</strong> <em>Paullinia cupana</em></p>
          <p><strong>Nome popular:</strong> Guaraná</p>
          <p><strong>Parte usada:</strong> Sementes (moídas em pó)</p>
        </div>
      </div>

      <div className="planta-secao">
        <h2>Uso indígena</h2>
        <p>
          Os povos da Amazônia usam o guaraná como fonte de energia e foco. Misturam o pó em bebidas e consomem antes de caçadas e rituais.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Funciona mesmo?</h2>
        <p>
          Comprovado: o guaraná tem cafeína natural, que melhora a atenção e dá disposição. Também ajuda na queima de gordura.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Uso atual</h2>
        <p>
          Muito usado em bebidas energéticas, cápsulas e suplementos fitness. Também aparece em dietas pra emagrecer com mais energia.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Alternativa parecida</h2>
        <p>
          O café é o primo famoso do guaraná quando o assunto é energia. Mas o guaraná costuma ter efeito mais prolongado.
        </p>
      </div>
    </div>
  );
}

export default Guarana;
