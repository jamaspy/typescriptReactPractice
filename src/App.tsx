import React from 'react';
import PokemonSearch from './components/PokemonSearch'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
     <PokemonSearch name="James Aspinall" numberOfPokemons={12}/>
    </div>
  );
}

export default App;
