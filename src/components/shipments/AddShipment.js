import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const AddShipment = () => {
  let navigate = useNavigate();

  const [inputData, setInputData] = useState({
      orderNo: '',
      date: '',
      customer: '',
      trackingNo: '',
      status: '',
      consignee: '',
    });
    

  function  handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/shipments", inputData)
        .then(res => {
          alert("Data added to server, goog!");
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
          <h2 className="text-center mb-4">Add Shipment</h2>

          <form onSubmit={handleSubmit} >
            <div className="form-group">
              <div className="col-md-9 mb-3">
              
              <label className='form-label' htmlFor="orderNo">Order No</label>
              <input
                className="form-control"
                type="text"
                required='required'
                placeholder=' Ordering number'
                name='orderNo'
                onChange={e => setInputData({...inputData, orderNo: e.target.value})}
                />
              <label className='form-label' htmlFor="date">Date</label>
              <input
                className="form-control"
                type="text"
                onChange={e => setInputData({...inputData, date: e.target.value})}
                required='required'
                placeholder='11/01/22'
                name='date'
                />
                
              <label className='form-label' htmlFor="status">Shipment status</label>
                <select className="form-select form-select-lg"
                onChange={e => setInputData({...inputData, status: e.target.value})}
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
                  onChange={e => setInputData({...inputData, customer: e.target.value})}
                  required='required'
                  name='customer'
                  placeholder='Customer name'
                />
                <label className='form-label' htmlFor="trackingNo">Tracking No</label>
                <input
                  className="form-control"
                  type="text"
                  onChange={e => setInputData({...inputData, trackingNo: e.target.value})}
                  required='required'
                  name='trackingNo'
                  placeholder='Tracking No'
                  />
              
                <label className='form-label' htmlFor="consignee">Consignee</label>
                <input
                  className="form-control"
                  type="text"
                  onChange={e => setInputData({...inputData, consignee: e.target.value})}
            name='consignee'
            required='required'
            placeholder='Consignee name'
            />
              </div>
            </div>
            <button className="btn btn-success" type="submit">Submit form</button>
            <button className="btn" type="button"  onClick={() => handleCancle()}>Cancel</button>
          </form>
        </div>
      </div>
    </>
    );
  }

export default AddShipment;



