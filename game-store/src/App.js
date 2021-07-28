import './App.css';
import NavBar from './components/NavBar/NavBar';  //importamos nuestro componente creado previamente
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Rouse, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/CartContext/CartContext';

function App() {
  return (

    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar nombreDeLaTienda="Game store" />
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>

            <Route path="/juego/:id">
              <ItemDetailContainer/>
            </Route>

            <Route path="/cart">
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
