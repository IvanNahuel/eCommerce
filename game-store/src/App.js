import './App.css';
import NavBar from './components/NavBar/NavBar';  //importamos nuestro componente creado previamente
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Rouse, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

//<> son etiquetas vacias, o fragments por que el return solo retorna un solo objeto, en este caso, nos permite
//crear nuestra etiqueta vacia y poner dentro nuestras etiquetas

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavBar nombreDeLaTienda="Game store" />
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>

            <Route path="/juego/:id">
              {/*de alguna manera le tenemos que pasar el id del item clickeado */}
              <ItemDetailContainer/>
            </Route>

          </Switch>

        </div>
      </BrowserRouter>
  );
}

export default App;
