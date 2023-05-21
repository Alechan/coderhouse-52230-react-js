import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navbar';
import ItemListContainer from "./components/itemlistcontainer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer />
    </div>

  );
}

export default App;
