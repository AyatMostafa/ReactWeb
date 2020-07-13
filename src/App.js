import React from 'react';
// import logo from './logo.svg';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
      
    );
}

export default App;
