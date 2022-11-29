import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import MyPokemon from './pages/MyPokemon';
import PokemonDetail from './pages/PokemonDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/my-pokemon" element={<MyPokemon />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
}

export default App;
