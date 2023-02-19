import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Rome from "./components/pages/Rome";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import AddShipment from "./components/shipments/AddShipment";
import EditShipment from "./components/shipments/EditShipment";
import ShipmentDetails from "./components/shipments/ShipmentDetails";
import PageNotFound from "./components/pages/PageNotFound";


function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Rome/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/shipment/add" element={<AddShipment/>} />
          <Route path="/shipment/:id" element={<EditShipment/>} />
          <Route path="/shipment/open/:id" element={<ShipmentDetails/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;