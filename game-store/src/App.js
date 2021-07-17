import './App.css';
import NavBar from './components/NavBar/NavBar';  //importamos nuestro componente creado previamente
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Rouse } from 'react-router-dom';

//<> son etiquetas vacias, o fragments por que el return solo retorna un solo objeto, en este caso, nos permite
//crear nuestra etiqueta vacia y poner dentro nuestras etiquetas

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavBar nombreDeLaTienda="Game store" />
          <Switch>

            <ItemListContainer/>

          </Switch>

        </div>
      </BrowserRouter>
  );
}

export default App;
