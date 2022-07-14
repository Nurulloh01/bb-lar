import React from 'react';
import './App.css';
import AllProducts from './components/AllProducts';
import HeaderView from './components/Header';

function App() {
  return (
    <div className="App">
      <HeaderView />
      <AllProducts/>
    </div>
  );
}

export default App;
