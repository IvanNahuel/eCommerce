import './App.css';
import NavBar from './components/NavBar/NavBar';  //importamos nuestro componente creado previamente
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/CartContext/CartContext';
import Cart from './components/Cart/Car';
import FormularioOc from './components/FormularioOc/FormularioOc';

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

            <Route path="/compra/:idCompra">
              {/*hacer una card, que te muestre tu compra y con el ID de compra*/}
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
