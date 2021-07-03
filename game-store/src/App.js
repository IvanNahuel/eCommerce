import './App.css';
import NavBar from './components/NavBar/NavBar';  //importamos nuestro componente creado previamente
import ItemContainer from './components/itemListContainer/itemListContainer';

//<> son etiquetas vacias, o fragments por que el return solo retorna un solo objeto, en este caso, nos permite
//crear nuestra etiqueta vacia y poner dentro nuestras etiquetas

function App() {
  const darBienvenida = () => alert("Bienvenido a nuestra tienda"); //paso la funcion por el parametro y la ejecuto en el componente

  return (
    <>
      <div className="App">
        <NavBar nombreDeLaTienda="Game store" subtitulo="store" darBienvenida={darBienvenida} />
        <ItemContainer item="Call of duty Blacks ops II" />
      </div>
    </>
  );
}

export default App;
