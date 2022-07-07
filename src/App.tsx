import React from 'react';
import './App.css';
import AllProducts from './components/AllProducts';
import HeaderView from './components/Header';
import BreadView from './components/Product/bread';
import { Product } from './dyumData';

function App() {
  return (
    <div className="App">
      <HeaderView />
      <AllProducts/>
    </div>
  );
}

export default App;
