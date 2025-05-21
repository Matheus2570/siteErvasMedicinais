import React from "react";
import "./ervaGlobal.css";
import AcoitaCavaloImg from "../assets/CascadeAcoita-Cavalo.jpg";
import AcoitaCavaloImg2 from "../assets/CascadeAcoita-Cavalo2.jpg";

function AcoitaCavalo() {
  return (
    <div className="planta-container">
      <div className="planta-header-central">
        <div className="planta-imagem-container">
          <div className="planta-legenda">
            <strong>Imagem 1:</strong> Casca da Açoita-Cavalo, usada para chás e banhos.
          </div>
          <img src={AcoitaCavaloImg} alt="Casca de Açoita-Cavalo" className="planta-img-lateral" />
        </div>

        <div className="planta-header-texto centralizado">
          <h1>Casca de Açoita-Cavalo</h1>
          <p><strong>Nome científico (planta):</strong> <em>Luehea divaricata</em></p>
          <p><strong>Nome popular:</strong> Açoita-Cavalo</p>
          <p><strong>Parte usada:</strong> Casca do tronco</p>
        </div>

        <div className="planta-imagem-container">
          <div className="planta-legenda">
            <strong>Imagem 2:</strong> Casca da planta Açoita-Cavalo.
          </div>
          <img src={AcoitaCavaloImg2} alt="Casca da planta Açoita-Cavalo" className="planta-img-lateral" />
        </div>
      </div>

      <div className="planta-secao">
        <h2>Uso indígena</h2>
        <p>
          Os povos indígenas utilizam a casca da Açoita-Cavalo para preparar chás que ajudam a aliviar febres, dores e sintomas de gripe. Também costumam usar a planta em banhos para relaxar e em rituais tradicionais.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Funciona mesmo?</h2>
        <p>
          Sim, Pesquisas científicas comprovam que a casca possui propriedades anti-inflamatórias e analgésicas, ou seja, ajuda a reduzir inflamações e aliviar dores no corpo.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Uso atual</h2>
        <p>
          Atualmente, a Açoita-Cavalo é encontrada em cápsulas, chás e cremes usados para tratar dores musculares e articulares. É uma opção natural, acessível e eficaz para quem busca alívio sem remédios químicos.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Alternativa parecida</h2>
        <p>
          Uma alternativa com efeito parecido é a arnica, muito usada para tratar machucados e dores musculares. Ambas são ótimas opções naturais para cuidados com o corpo.
        </p>
      </div>
    </div>
  );
}

export default AcoitaCavalo;
