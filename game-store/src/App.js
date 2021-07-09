import './App.css';
import NavBar from './components/NavBar/NavBar';  //importamos nuestro componente creado previamente
import Body from './components/BodyContainer/Body';

//<> son etiquetas vacias, o fragments por que el return solo retorna un solo objeto, en este caso, nos permite
//crear nuestra etiqueta vacia y poner dentro nuestras etiquetas

function App() {
  return (
    <>
      <div className="App">
        <NavBar nombreDeLaTienda="Game store" />
        <Body></Body>
      </div>
    </>
  );
}

export default App;
