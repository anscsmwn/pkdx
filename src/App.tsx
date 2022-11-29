import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import MyPokemon from './pages/MyPokemon';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/my-pokemon" element={<MyPokemon />} />
    </Routes>
  );
}

export default App;
