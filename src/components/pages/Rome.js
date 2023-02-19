import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
// import baseURL from "../../api/sipments"


function Home() {
  // let navigate = useNavigate();
  // const apiEndpoint = "http://localhost:3001/shipments";
  
  
  const [shipments, setShipments] = useState([]);  
  
  useEffect(() => {
    loadShipments();
  }, []);
  
  const loadShipments = async () => {
    const result = await axios.get(`http://localhost:3001/shipments`);
    setShipments(result.data);
    
  };
  if (shipments.length === 0)
    return (
      <>
        <div className="container alert alert-warning ">      
          <h2 className="display-4 text-center "> There are no Order in the Database </h2>
        </div>
      </>
    )
  
  return (
    <div className="container">
      <div className="py-4">
      <h1>Shipment page</h1>
        <table className="table table-striped table-hover">
          <thead>
          <tr className="bg-dark text-white">
            <th scope="col">Order No</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Tracking No</th>
            <th scope="col">Status</th>
            <th scope="col">Consignee</th>
            <th scope="col">Actions</th>
          </tr> 
        </thead>
        <tbody>
            {shipments &&
              shipments.map((shipment, id) => (         
                <tr key={shipment.id}>
                  <td>{shipment.orderNo}</td>
                  <td>{shipment.date}</td>
                  <td>{shipment.customer}</td>
                  <td>{shipment.trackingNo}</td>
                  <td>{shipment.status}</td>
                  <td>{shipment.consignee}</td>
                  <td>
                    <Link className="btn btn-sm ms-1 btn-primary" to={`/shipment/open/${shipment.id}`}>Details</Link>
                    <Link className="btn btn-sm ms-1 btn-success" to={`/shipment/${shipment.id}`}>Edit</Link>
                    <Link className="btn btn-sm ms-1 btn-danger m-2" onClick={() => handleSubmit(shipment.id)}>Del</Link>
                  </td>
                </tr>  
              ))}
          </tbody>
        </table>
        </div>
    </div>
  );
  
  function handleSubmit(id) {
    const agree = window.confirm("Do you want to delete?");
    if (agree) {
      axios.delete('http://localhost:3001/shipments/'+id)
      .then(res => {
        alert("Data has deleted allready, sorry!");
        loadShipments();
      })
      .catch (err => console.log(err));
    };    
  }
}
export default Home;


