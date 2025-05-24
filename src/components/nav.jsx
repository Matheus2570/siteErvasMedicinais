import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./nav.css";
import BotaoMudarTema from "./botao";

function Nav() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef(null); // Referência para o menu
  const menuButtonRef = useRef(null); // Referência para o botão de menu

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };


  const handleMenuClick = () => {
    setMenuAberto(false); // Fecha o menu ao clicar em uma opção
  };

  // Hook para detectar cliques fora do menu e botão
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) && 
        menuButtonRef.current && 
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuAberto(false); // Fecha o menu se clicar fora
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navBar">
      <div className="navTopo">
        <h1 className="tituloSite">Ervas Medicinais</h1>
        <div className="teste">
          <BotaoMudarTema />
        </div>
        <i
          ref={menuButtonRef}
          className="bx bx-menu"
          onClick={alternarMenu}
        ></i>
      </div>

      {menuAberto && (
        <div ref={menuRef} id="menu-opcoes" className="menu-opcoes">
          <ul>
            <li><Link onClick={handleMenuClick} to="/" className="navLink">🏠 Página Principal</Link></li>
            <li><Link  onClick={handleMenuClick}  to="/erva1" className="navLink">🌿 Casca de Açoita-Cavalo</Link></li>
            <li><Link onClick={handleMenuClick}  to="/erva2" className="navLink">🍃 Catuaba</Link></li>
            <li><Link onClick={handleMenuClick}  to="/erva3" className="navLink">🌱 Óleo de Andiroba</Link></li>
            <li><Link onClick={handleMenuClick}  to="/erva4" className="navLink">🌳 Óleo de Copaíba</Link></li>
            <li><Link onClick={handleMenuClick}  to="/erva5" className="navLink">🍂 Guaraná em Pó</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
