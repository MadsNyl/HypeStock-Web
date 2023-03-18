import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import ScrollToTop from "./functions/ScrollToTop";
import Articles from "./pages/Articles";
import Exchanges from "./pages/Exchanges";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Stock from "./pages/Stock";
import Reddit from "./pages/Reddit";
import Search from "./pages/Search";
import Trending from "./pages/Trending";


function App() {

  // const location = useLocation();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/reddit" element={<Reddit />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/stock" element={<Search />} />
            <Route path="/stock/:symbol" element={<Stock />} />
            <Route path="/trending" element={<Trending />} />
        </Routes>
      </Nav>
    </BrowserRouter>
  )
}

export default App
