import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navbar/navbar';
import ItemListContainer from "./components/body/itemlistcontainer/itemlistcontainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import ItemDetailContainer from "./components/body/itemdetailcontainer/ItemDetailContainer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="background-image-container">
            <Container fluid className="background-image-blur">
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="¡Bienvenides a la tienda!"/>} />
                    <Route path="/city/:id" element={<ItemListContainer greeting="¡Bienvenides a la tienda!"/>} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                </Routes>
            </Container>
        </div>

    </BrowserRouter>
  );
}

export default App;
