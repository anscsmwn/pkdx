import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import MyPokemon from './pages/MyPokemon';
import PokemonDetail from './pages/PokemonDetail';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-pokemon" element={<MyPokemon />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
