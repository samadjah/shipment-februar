import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>    
      <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
        <div className="container">
          <NavLink className="nav-link navbar-brand" to="/">React Crud</NavLink>
          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSuportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSuportedContent">
            <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active " aria-current="page" to="/about">Ways</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active " aria-current="page" to="/contac">Lost rouds</NavLink>
              </li>
            </ul>
          </div>
          <Link className="btn btn-outline-light w-25" to="/shipment/add">Add Shipment</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
