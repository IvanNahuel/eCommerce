import './App.css';
import NavBar from './components/NavBar/NavBar';  
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/CartContext/CartContext';
import Cart from './components/Cart/Car';
import FormularioOc from './components/FormularioOc/FormularioOc';
import Categoria from './components/Categoria/Categoria';

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
              <Cart/>
            </Route>

            <Route path="/formularioOc">
              <FormularioOc/>
            </Route>

            <Route path="/categoria/:categoria">
              <Categoria/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
