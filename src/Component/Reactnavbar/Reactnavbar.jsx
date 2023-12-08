import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"

function Reactnavbar() {
  let navigate = useNavigate();
  const [produc, setProduc] = useState([]);
  const handleChange = (va)=>{
    fetch(`https://dummyjson.com/products/search?q=${va}`)
      .then((res) => res.json())
      .then((data) => {
        setProduc(data.products);
      });
  }
  const handlelogout = ()=>{
    localStorage.removeItem("login");
    navigate("/login")
  }
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Flipcard</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link>
          {' '}
              <Link className="text-decoration-none text-white" to="/home">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
            {' '}
              <Link className="text-decoration-none text-white" to="/addproduc">
              AddProducs
              </Link>
            </Nav.Link>
            <Nav.Link>
            {' '}
              <Link className="text-decoration-none text-white" to="/producs/2">
              AddToCart
              </Link></Nav.Link>
          </Nav>
          <Form.Control
              type="search"
              placeholder="Search"
              className="ms-2"
              aria-label="Search"
              onChange={(e)=>handleChange(e.target.value)}
            />
            <Nav.Link>
            {' '}
              <Link className="text-decoration-none text-white ms-2" to="/login">
              Login
              </Link></Nav.Link>
              {/* <Nav.Link>
            {' '}
              <Link className="text-decoration-none text-white ms-2" to="/login">
              LogOut
              </Link></Nav.Link> */}
              {/* <button className='btn ' onClick={()=>handlelogout()}>Logout</button> */}
        </Container>
      </Navbar>
      {  produc?.map((value, index) => (
        <div key={index} className="card d-inline-flex m-1" style={{ width: "18rem" }}>
          <img src={value.thumbnail} className="card-img-top"  alt="..." style={{objectFit:'cover'}}/>
          <div className="card-body">
            <h5 className="card-title">{value.title}</h5>
            <p className="card-text">{value.brand}</p>
            <p className="card-text">{value.description}</p>
            <button className="btn btn-primary" onClick={()=>navigate(`/producs/${value.id}`)}>Add to</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Reactnavbar;