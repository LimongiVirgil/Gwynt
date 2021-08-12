
import React from 'react';
import './App.scss';
import Routes from './pages/Route';
import TopIcons from './components/TopIcons/TopIcons'

function App() {
  return (
    <div className="App">
      <TopIcons />
      <Routes/>
    </div>
  );
}

export default App;
