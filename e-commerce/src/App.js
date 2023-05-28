import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navbar/navbar';
import ItemListContainer from "./components/body/itemlistcontainer/itemlistcontainer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer greeting="¡Bienvenides a la tienda!"/>
    </div>

  );
}

export default App;
