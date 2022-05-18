import React from 'react';

import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';



const App = () => {
  return (
    <div className="App"> 
    <p id="home">test</p>
    <ToastContainer />    
     <PortfolioContainer />  
    </div>
  );
}

export default App;

