import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const ShipmentDetails = () => {
  let navigate = useNavigate();
  const {id} = useParams();
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/shipments/"+id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [id])
  
  function handleCancle(e) {
    navigate("/");
  }
  

  return (
    <div className="container">
    <h1>Shipment dedail page</h1>
      <table className="table table-striped table-bordered">
        <caption>Details of Customer order</caption>
        <thead>
          <tr>
            <th className="border-0" scope="col">Order No</th>
            <th className="border-0" scope="col">Date</th>
          </tr> 
          </thead>          
          <tbody>
              <tr>
                <td>{data.orderNo}</td>
                <td >{data.date}</td>                
              </tr>      
            </tbody>
            <thead>
          <tr className="">
            <th  className="border-0" scope="col">Customer</th>
            <th className="border-0" scope="col">Tracking No</th>
          </tr> 
          </thead> 
          <tbody>
              <tr>
                <td >{data.customer}</td>
                <td>{data.trackingNo}</td>               
              </tr>      
            </tbody>
            <thead>
          <tr className="">
            <th className="border-0" scope="col">Status</th>
            <th className="border-0" scope="col">Consignee</th>
          </tr> 
        </thead>
          <tbody>
              <tr>
                <td >{data.status}</td>
                <td>{data.consignee}</td>
            </tr> 
          </tbody>
      </table>
      <Link className="btn btn-lg ms-1 btn-success" to={`/shipment/${data.id}`}>Edit</Link>
      <button className="btn btn-lg" type="button" onClick={() => handleCancle()}>Cancel</button>
    </div>
  
  
  
//     <div className="container">
// <div className="py-4">

// <h1>Shipment detail page</h1>
/* <table className="table table-striped">
<thead>
<tr className="bg-dark text-white">
<th scope="col">Order No</th>
<th scope="col">Date</th>
<th scope="col">Customer</th>
<th scope="col">Tracking No</th>
<th scope="col">Status</th>
<th scope="col">Consignee</th>
</tr> 
</thead>
<tbody>

  <tr >
    <td>{data.orderNo}</td>
    <td>{data.date}</td>
    <td>{data.customer}</td>
    <td>{data.trackingNo}</td>
    <td>{data.status}</td>
    <td>{data.consignee}</td>
    <td><button className="btn" type="button" onClick={() => handleCancle()}>Cancel</button>

    </td>
  </tr>
</tbody>
</table> */
/* </div>
</div> */
);

}


export default ShipmentDetails;












// import axios from "axios"
// import { useEffect, useState } from "react"
// import { Link, useParams } from "react-router-dom"


// const Shipment = () => {
//   const apiEndpoint = "http://localhost:3001/shipments";

//   //   useRef()
//   const { orderNo } = useParams();
  
//   const [shipments, setShipments] = useState({
//     orderNo: '',
//     date: '',
//     customer: '',
//     trackingNo: '',
//     status: '',
//     consignee: '',
//   });
  
//   useEffect(() => {
//   loadShipment();
//   }, []);
  
//   const loadShipment = async (shipment) => {
//     const result = await axios.get(apiEndpoint  + shipment.orderNo);
//     setShipments(result.push((shipm) => shipm.orderNo === shipments.orderNo));
//   };
  
  



//   return (
//     <div className="container">
//       <Link className="btn  btn-primary" to="/">
//         Back to  All shipments
//       </Link>
//         <h1 className="display-4">Shipment Order No:{orderNo}</h1>
//       <hr />
//           <ul  className="list-group">
//       <li className="list-group-item">order nr: {orderNo}</li>
//       <li className="list-group-item">date: {shipments.date}</li>
//       <li className="list-group-item">order nr:{orderNo}</li>
//       {/* <li className="list-group-item">customer:{customer}</li> */}
//       {/* <li className="list-group-item">trackingNo:{trackingNo}</li> */}
//       {/* <li className="list-group-item">status:{status}</li> */}
//       {/* <li className="list-group-item">consignee:{consignee}</li> */}
//       <li className="list-group-item"><Link className="btn btn-primary" to={`/shipment/edit/${orderNo}`}>Edit</Link></li>
//       </ul>
    
//     </div>
//   )
// }
// //   return (
// //     <div className="container">
// //       <Link className="btn  btn-primary" to="/">
// //         Back to  All shipments
// //       </Link>
// //         <h1 className="display-4">Shipment Order No:{orderNo}</h1>
// //       <hr />
// //           <ul  className="list-group">
// //       <li className="list-group-item">order nr: {orderNo}</li>
// //       <li className="list-group-item">date: {shipment.date}</li>
// //       <li className="list-group-item">order nr:{orderNo}</li>
// //       {/* <li className="list-group-item">customer:{customer}</li> */}
// //       {/* <li className="list-group-item">trackingNo:{trackingNo}</li> */}
// //       {/* <li className="list-group-item">status:{status}</li> */}
// //       {/* <li className="list-group-item">consignee:{consignee}</li> */}
// //       <li className="list-group-item"><Link className="btn btn-primary" to={`/shipment/edit/${orderNo}`}>Edit</Link></li>
// //       </ul>
    
// //     </div>
// //   )
// // }


// export default Shipment;