import React from "react";
import "./ervaGlobal.css";
import CatuabaImg from "../assets/Catuaba.jpg";
import CatuabaImg2 from "../assets/Catuaba2.jpg";

function Catuaba() {
  return (
    <div className="planta-container">
      <div className="planta-header">
        <img src={CatuabaImg} alt="Catuaba" className="planta-img-lateral" />
        <div className="planta-header-texto">
          <h1>Catuaba</h1>
          <p><strong>Nome científico (planta):</strong> <em>Erythroxylum catuaba</em></p>
          <p><strong>Nome popular:</strong> Catuaba</p>
          <p><strong>Parte usada:</strong> Casca</p>
        </div>
        <img src={CatuabaImg2} alt="Casca da Catuaba" className="planta-img-lateral" />
      </div>

      <div className="planta-secao">
        <h2>Uso indígena</h2>
        <p>
          A catuaba é famosa entre os povos indígenas por dar energia e aumentar o desejo sexual. Eles usam em forma de chá ou infusão.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Funciona mesmo?</h2>
        <p>
          Estudos mostram que ela pode ajudar na circulação e na disposição. A ação estimulante dela é real, especialmente no sistema nervoso.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Uso atual</h2>
        <p>
          Está presente em energéticos naturais e em cápsulas afrodisíacas. É procurada por quem quer melhorar a vitalidade e combater o cansaço.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Alternativa parecida</h2>
        <p>
          Um exemplo parecido é o ginseng, que também melhora o desempenho físico e mental. Os dois são bem populares pra dar energia.
        </p>
      </div>
    </div>
  );
}

export default Catuaba;
