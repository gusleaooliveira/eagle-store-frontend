import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Rotas from './components/Rotas';
import Rodape from './components/Rodape';
import { BrowserRouter as Router } from 'react-router-dom';
import cookie from 'react-cookies'
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState({
    token: cookie.loadAll()
  })

  useEffect(() =>{
    console.log(token);
  })

  return (
    <div>
        <Router>
          <Menu />
          <Rotas />
          <Rodape />
        </Router>
    </div>
  );
}

export default App;
