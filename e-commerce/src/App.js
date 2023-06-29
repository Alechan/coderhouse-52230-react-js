import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navbar/navbar';
import ItemListContainer from "./components/body/itemlistcontainer/itemlistcontainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import ItemDetailContainer from "./components/body/itemdetailcontainer/ItemDetailContainer";
import './App.css';
import {ROUTES} from './constants';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="background-image-container">
            <Container fluid className="background-image-blur">
                <Routes>
                    <Route path={ROUTES.HOME} element={<ItemListContainer greeting="¡Bienvenides a la tienda!"/>} />
                    <Route path={ROUTES.CITY_ITEMS_TEMPLATE} element={<ItemListContainer />} />
                    <Route path={ROUTES.ITEM_DETAIL_TEMPLATE} element={<ItemDetailContainer />} />
                    <Route path="*" element={<ItemListContainer greeting="¡Bienvenides a la tienda!"/>} />
                </Routes>
            </Container>
        </div>

    </BrowserRouter>
  );
}

export default App;
