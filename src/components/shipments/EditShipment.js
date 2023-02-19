import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditShipment = () => {
  let navigate = useNavigate();
  const {id} = useParams();
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/shipments/"+id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [id])
  
  
  function handleSubmit(e) {
    e.preventDefault();
    axios.put("http://localhost:3001/shipments/"+id, data)
    .then(res => {
      alert("Data updated to server, go!");
      navigate("/");
    })
    .catch (err => console.log(err));
  };
  

function handleCancle(e) {
  navigate("/");
  }
  
  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit Shipment</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="col-md-9 mb-3">
              
              {/* <label className='form-label' htmlFor="id">ID</label>
              <input
                type="text"
                disable name='id'
                  value={data.id}
                className="form-control"
                /> */}
              <label className='form-label' htmlFor="orderNo">Order No</label>
              <input
                type="text"
                name='orderNo'
                  value={data.orderNo}
                  onChange={e => setData({...data, orderNo: e.target.value})}
                className="form-control"
                />
              <label className='form-label' htmlFor="date">Date</label>
              <input
                className="form-control"
                type="text"
                required='required'
                  name='date'
                  value={data.date}
                  onChange={e => setData({...data, date: e.target.value})}
                />
                
              <label className='form-label' htmlFor="status">Shipment status</label>
                <select className="form-select"
                  value={data.status}
                  onChange={e => setData({ ...data, status: e.target.value })}
                  name="status">                  
                  <option >'In Transit'</option>
                  <option >'Delivered'</option>
                  <option >'Shipped'</option>
                  <option >'Delay'</option>
                </select>
                <label className='form-label' htmlFor="customer">Customer</label>
                <input
                  className="form-control"
                  type="text"
                  required='required'
                  name='customer'
                  value={data.customer}
                  onChange={e => setData({...data, customer: e.target.value})}
                  placeholder='Customer name'
                />
                <label className='form-label' htmlFor="trackingNo">Tracking No</label>
                <input
                  className="form-control"
                  type="text"
                  required='required'
                  name='trackingNo'
                  value={data.trackingNo}
                  onChange={e => setData({...data, trackingNo: e.target.value})}
                  placeholder='Tracking No'
                  />
              
                <label className='form-label' htmlFor="consignee">Consignee</label>
                <input
                  className="form-control"
                  type="text"
                  name='consignee'
                  value={data.consignee}
                  onChange={e => setData({ ...data, consignee: e.target.value })}
                  required='required'
                  placeholder='Consignee name'
                  />
              </div>
            </div>
            <button className="btn btn-success" type="subbmit">Submit form</button>
            <button className="btn" type="button"  onClick={() => handleCancle()}>Cancel</button>
          </form>
        </div>
      </div>
    </>
  );
}
 
export default EditShipment;