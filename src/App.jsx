import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/nav";
import Erva1 from "./pages/erva1";
import Erva2 from "./pages/erva2";
import Erva3 from "./pages/erva3";
import Erva4 from "./pages/erva4";
import Erva5 from "./pages/erva5";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/erva1" element={<Erva1 />} />
        <Route path="/erva2" element={<Erva2 />} />
        <Route path="/erva3" element={<Erva3 />} />
        <Route path="/erva4" element={<Erva4 />} />
        <Route path="/erva5" element={<Erva5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;