
import React from 'react';
import './App.scss';
import Routes from './pages/Route';
import Musics from './components/Musics/Musics'

function App() {
  return (
    <div className="App">
      <Musics />
      <Routes/>
    </div>
  );
}

export default App;