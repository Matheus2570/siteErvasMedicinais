import React from "react";
import "./ervaGlobal.css";
import CatuabaImg from "../assets/Catuaba.png";
import CatuabaImg2 from "../assets/Catuaba2.png";

function Catuaba() {
  return (
    <div className="planta-container">
      <div className="planta-header-central">
        <div className="planta-imagem-container">
          <div className="planta-legenda">
             <strong>Imagem 1:</strong> Casca da catuaba, usada para fazer chá e outros preparados.
          </div>
          <img src={CatuabaImg} alt="Catuaba" className="planta-img-lateral" />
        </div>

        <div className="planta-header-texto centralizado">
          <h1>Catuaba</h1>
          <p><strong>Nome científico (planta):</strong> <em>Erythroxylum catuaba</em></p>
          <p><strong>Nome popular:</strong> Catuaba</p>
          <p><strong>Parte usada:</strong> Casca</p>
        </div>

        <div className="planta-imagem-container">
          <div className="planta-legenda">
              <strong>Imagem 2:</strong> A planta da catuaba, fonte da casca usada.
          </div>
          <img src={CatuabaImg2} alt="Casca da Catuaba" className="planta-img-lateral" />
        </div>
      </div>

      <div className="planta-secao">
        <h2>Uso indígena</h2>
        <p>
          A catuaba é bastante conhecida entre os povos indígenas da Amazônia. Eles costumam preparar chás com a casca para aumentar a energia do corpo e também para melhorar o desejo sexual, usando-a como um tônico natural.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Funciona mesmo?</h2>
        <p>
          Pesquisas indicam que a catuaba pode ajudar a melhorar a circulação sanguínea e aumentar a disposição física e mental. Sua ação estimulante age principalmente no sistema nervoso, ajudando a combater o cansaço.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Uso atual</h2>
        <p>
          Hoje, a catuaba é usada em produtos naturais como energéticos e cápsulas afrodisíacas. Muitas pessoas buscam esses produtos para melhorar a vitalidade, aumentar a resistência e diminuir a fadiga do dia a dia.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Alternativa parecida</h2>
        <p>
          Um exemplo parecido é o ginseng, que também é bastante usado para melhorar o desempenho físico e mental. Tanto a catuaba quanto o ginseng são populares como suplementos naturais para aumentar energia e vitalidade.
        </p>
      </div>
    </div>
  );
}

export default Catuaba;
