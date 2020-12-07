import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Rotas from './components/Rotas';
import Rodape from './components/Rodape';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
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
