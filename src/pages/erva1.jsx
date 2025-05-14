import React from "react";
import "./ervaGlobal.css";
import AcoitaCavaloImg from "../assets/CascadeAcoita-Cavalo.jpg";
import AcoitaCavaloImg2 from "../assets/CascadeAcoita-Cavalo2.jpg";

function AcoitaCavalo() {
  return (
    <div className="planta-container">
      <div className="planta-header">
        <img src={AcoitaCavaloImg} alt="Casca de Açoita-Cavalo" className="planta-img-lateral" />
        <div className="planta-header-texto">
          <h1>Casca de Açoita-Cavalo</h1>
          <p><strong>Nome científico (planta):</strong> <em>Luehea divaricata</em></p>
          <p><strong>Nome popular:</strong> Açoita-Cavalo</p>
          <p><strong>Parte usada:</strong> Casca do tronco</p>
        </div>
        <img src={AcoitaCavaloImg2} alt="Casca da planta Açoita-Cavalo" className="planta-img-lateral" />
      </div>

      <div className="planta-secao">
        <h2>Uso indígena</h2>
        <p>
          Os povos indígenas usam a casca pra fazer chás que aliviam febre, dor e gripe. Ela também é usada em banhos relaxantes e rituais.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Funciona mesmo?</h2>
        <p>
          Sim! A ciência já comprovou que ela tem ação anti-inflamatória e analgésica. Ou seja, ajuda de verdade no alívio das dores.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Uso atual</h2>
        <p>
          Hoje em dia, ela é usada em cápsulas, chás e cremes pra tratar dores nas articulações e nos músculos. É uma alternativa natural e acessível.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Alternativa parecida</h2>
        <p>
          Tem efeito parecido com o da arnica, que também é super usada pra machucados e dores. As duas são ótimas opções naturais.
        </p>
      </div>
    </div>
  );
}

export default AcoitaCavalo;
