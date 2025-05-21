import React from "react";
import "./ervaGlobal.css";
import GuaranaImg from "../assets/PoDeGuarana.jpg";
import GuaranaImg2 from "../assets/PoDeGuarana2.jpg";

function Guarana() {
  return (
    <div className="planta-container">
      <div className="planta-header-central">
        <div className="planta-imagem-container">
          <div className="planta-legenda">
            <strong>Imagem 1:</strong> O pó de guaraná — resultado do processamento das sementes secas e moídas.
          </div>
          <img src={GuaranaImg} alt="Guaraná em pó" className="planta-img-lateral" />
        </div>

        <div className="planta-header-texto centralizado">
          <h1>Guaraná em Pó</h1>
          <p><strong>Nome científico (planta):</strong> <em>Paullinia cupana</em></p>
          <p><strong>Nome popular:</strong> Guaraná</p>
          <p><strong>Parte usada:</strong> Sementes (moídas em pó)</p>
        </div>

        <div className="planta-imagem-container">
          <div className="planta-legenda">
            <strong>Imagem 2:</strong> A planta do guaraná — com folhas, flores e frutos, que originam as sementes.
          </div>
          <img src={GuaranaImg2} alt="Planta do guaraná" className="planta-img-lateral" />
        </div>
      </div>

      <div className="planta-secao">
        <h2>Uso indígena</h2>
        <p>
          Os povos da Amazônia utilizam o guaraná como uma importante fonte de energia e concentração. Tradicionalmente, o pó é misturado em bebidas para ser consumido antes de caçadas e rituais, garantindo resistência e foco.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Funciona mesmo?</h2>
        <p>
          Sim, O guaraná é cientificamente comprovado como uma fonte natural de cafeína, que melhora a atenção, disposição e desempenho cognitivo. Além disso, possui propriedades que ajudam no metabolismo e podem contribuir para a queima de gordura.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Uso atual</h2>
        <p>
          Atualmente, o guaraná é amplamente utilizado na composição de bebidas energéticas, cápsulas e suplementos fitness. Muitas dietas incluem o guaraná como aliado para quem busca mais energia no dia a dia, especialmente em regimes para perda de peso.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Alternativa parecida</h2>
        <p>
          O café é uma alternativa bastante conhecida, sendo também uma fonte natural de cafeína. No entanto, o guaraná possui um efeito mais prolongado e gradual, evitando picos abruptos de energia.
        </p>
      </div>
    </div>
  );
}

export default Guarana;
