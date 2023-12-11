
import './App.css';
import nota from './imagen/nota1.png';
import ListaNotas from './componentes/ListaNotas';

function App() {
  return (
    <div className="notas">
      <div className='logo-notas'>
        <img src={nota} className='logo' alt='logonotes' />
      </div>
      <div className='lista-notas'>
        <h1>Mis Notas</h1>
        <ListaNotas />
      </div>
    </div>

  );
}

export default App;
