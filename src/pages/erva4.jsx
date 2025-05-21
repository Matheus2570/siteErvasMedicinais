import React from "react";
import "./ervaGlobal.css";
import CopaibaImg from "../assets/OleodeCopaiba.jpg";
import CopaibaImg2 from "../assets/OleodeCopaiba2.jpg";

function Copaiba() {
  return (
    <div className="planta-container">
      <div className="planta-header-central">
        <div className="planta-imagem-container">
          <div className="planta-legenda">
            <strong>Imagem 1:</strong> Óleo de copaíba — extraído da resina do tronco da árvore.
          </div>
          <img src={CopaibaImg} alt="Óleo de Copaíba" className="planta-img-lateral" />
        </div>

        <div className="planta-header-texto centralizado">
          <h1>Óleo de Copaíba</h1>
          <p><strong>Nome científico (planta):</strong> <em>Copaifera langsdorffii</em></p>
          <p><strong>Nome popular:</strong> Copaíba</p>
          <p><strong>Parte usada:</strong> Resina (óleo extraído do tronco)</p>
          <p><strong>Onde se encontra:</strong> A copaíba é uma árvore típica da Amazônia e também do Cerrado brasileiro.</p>
        
        </div>

        <div className="planta-imagem-container">
          <div className="planta-legenda">
            <strong>Imagem 2:</strong> Árvore de copaíba — fonte da resina para extrair o óleo.
          </div>
          <img src={CopaibaImg2} alt="Árvore de Copaíba" className="planta-img-lateral" />
        </div>
      </div>

      <div className="planta-secao">
        <h2>Uso indígena</h2>
        <p>
          Os povos indígenas utilizam o óleo de copaíba há muito tempo para cuidar da saúde. Eles aplicam diretamente sobre feridas para ajudar a cicatrizar, além de usar contra tosse e inflamações. É considerado um remédio natural muito eficaz.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Funciona mesmo?</h2>
        <p>
          Sim, vários estudos científicos confirmam que o óleo de copaíba possui propriedades antimicrobianas e anti-inflamatórias. Ele ajuda a combater infecções na pele e acelera a cicatrização, além de ser um excelente calmante natural para irritações.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Uso atual</h2>
        <p>
          Hoje em dia, o óleo de copaíba é usado em diversos produtos de beleza e saúde, como pomadas para feridas, shampoos e loções calmantes. Também é consumido em cápsulas para ajudar no funcionamento do sistema imunológico e melhorar a saúde intestinal.
        </p>
      </div>

      <div className="planta-secao">
        <h2>Alternativa parecida</h2>
        <p>
          Uma alternativa bastante usada é o própolis, que também tem ação antibacteriana e anti-inflamatória. Ambos são ótimas opções para quem prefere remédios naturais para cuidar da saúde e fortalecer o organismo.
        </p>
      </div>
    </div>
  );
}

export default Copaiba;
