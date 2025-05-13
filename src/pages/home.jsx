import React from "react";
import "./home.css";
import ErvasMedicinais from "../assets/ErvasMedicinais.jpg";

function Home() {
  return (
    <main className="home-container">
      <div className="home-header">
        <h1 className="home-titulo">Saber das Ervas</h1>
        <p className="home-subtitulo">
          Bem-vindo ao nosso espaço dedicado ao estudo das ervas medicinais, com um enfoque especial nos saberes tradicionais das comunidades indígenas. Aqui, você encontrará informações sobre as propriedades e os benefícios de diversas plantas medicinais.
        </p>
      </div>

      <section className="home-introducao">
        <img src={ErvasMedicinais} alt="Ervas Medicinais" className="home-imagem" />
        <div className="home-texto-container">
          <p className="home-texto">
            O site foi desenvolvido com o objetivo de compartilhar o conhecimento ancestral sobre o uso das ervas medicinais pelas comunidades indígenas. Muitas dessas plantas são amplamente reconhecidas pela medicina moderna devido às suas propriedades terapêuticas, sendo eficazes no tratamento de diversas doenças e condições de saúde.
          </p>
          <p className="home-texto">
            Entre as ervas abordadas estão o <strong>guaraná em pó</strong>, <strong>óleo de copaíba</strong>, <strong>andiroba</strong>, <strong>casca de açoita-cavalo</strong> e <strong>catuaba</strong>. Cada uma dessas plantas possui características únicas, com diversos benefícios comprovados pela ciência, que podem contribuir de forma significativa para a saúde e bem-estar.
          </p>
        </div>
      </section>

      <section className="home-blocos">
        <div className="home-bloco">
          <h2 className="bloco-titulo">O que são as Ervas Medicinais?</h2>
          <p className="bloco-texto">
            As ervas medicinais são plantas com propriedades terapêuticas, utilizadas ao longo dos séculos por diversas culturas, incluindo as comunidades indígenas. Elas são empregadas no tratamento de diversas doenças, oferecendo alternativas naturais e eficazes para a promoção da saúde.
          </p>
        </div>
        <div className="home-bloco">
          <h2 className="bloco-titulo">A Importância da Medicina Indígena</h2>
          <p className="bloco-texto">
            A medicina indígena é baseada em um profundo conhecimento da natureza e das plantas medicinais. Transmitidos por gerações, esses saberes ancestrais são fundamentais para o cuidado com a saúde nas comunidades indígenas, oferecendo métodos naturais e sustentáveis de tratamento.
          </p>
        </div>
        <div className="home-bloco">
          <h2 className="bloco-titulo">Ervas como o Guaraná e a Copaíba</h2>
          <p className="bloco-texto">
            O guaraná em pó é conhecido por suas propriedades energizantes e por ajudar na concentração. Já o óleo de copaíba é amplamente utilizado devido às suas propriedades anti-inflamatórias e curativas. Essas e outras ervas serão exploradas em profundidade nas páginas do site, oferecendo um melhor entendimento de seus benefícios.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
