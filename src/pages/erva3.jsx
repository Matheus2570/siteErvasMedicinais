import React from "react";
import "./ervaGlobal.css";
import AndirobaImg from "../assets/OleodeAndiroba.jpg";
import AndirobaImg2 from "../assets/OleodeAndiroba2.jpg";

function Andiroba() {
  return (
    <div className="planta-container">
      <div className="planta-header-central">
        <div className="planta-imagem-container">
          <div className="planta-legenda">
            <strong>Imagem 1:</strong> O óleo extraído das sementes da andiroba.
          </div>
          <img src={AndirobaImg} alt="Óleo de Andiroba" className="planta-img-lateral" />
        </div>

        <div className="planta-header-texto centralizado">
          <h1>Óleo de Andiroba</h1>
          <p><strong>Nome científico (planta):</strong> <em>Carapa guianensis</em></p>
          <p><strong>Nome popular:</strong> Andiroba</p>
          <p><strong>Parte usada:</strong> Sementes (óleo extraído)</p>
          <p><strong>Onde se encontra:</strong> Muito comum na Amazônia e região norte do Brasil.</p>
        </div>

        <div className="planta-imagem-container">
          <div className="planta-legenda">
            <strong>Imagem 2:</strong> Fruto da andiroba, fonte das sementes para o óleo.
          </div>
          <img src={AndirobaImg2} alt="Fruto da Andiroba" className="planta-img-lateral" />
        </div>
      </div>

      <div className="planta-secao">
        <h2>Uso indígena</h2>
        <p>
          Os povos indígenas usam o óleo de andiroba para cuidar da pele, aplicando-o em picadas de insetos, inflamações e dores. Também é comum o uso para massagear músculos cansados e para ajudar a afastar insetos na floresta.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Funciona mesmo?</h2>
        <p>
          Pesquisas mostram que o óleo possui propriedades anti-inflamatórias, cicatrizantes e repelentes naturais. Ele é rico em ácidos graxos e compostos que ajudam a proteger e regenerar a pele.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Uso atual</h2>
        <p>
          Hoje, o óleo de andiroba é usado em diversos produtos, como cremes, sabonetes e loções calmantes. Também pode ser encontrado puro, vendido direto da floresta, para quem busca um produto natural para a pele.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Alternativa parecida</h2>
        <p>
          O óleo de copaíba é uma alternativa bastante parecida, também usado para tratar a pele e reduzir inflamações. Ambos são reconhecidos pela ação natural e benefícios para a saúde.
        </p>
      </div>
    </div>
  );
}

export default Andiroba;
