import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [produc, setProduc] = useState([]);
  const [catagray,setCatagray]=useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("login")
  console.log(token);

  useEffect(() => {
    axios.get("http://localhost:8080/api/users").then(res => {
      console.log(res, "=====res");
    })
       axios.get("https://dummyjson.com/auth/products",{
       headers:{
        'Authorization': `Bearer ${token}`
      } 
       })
      .then((res) => setProduc(res.data.products));
      axios.get("https://dummyjson.com/auth/products/categories",{
       headers:{
        'Authorization': `Bearer ${token}`
      } 
       })
      .then((res) => setCatagray(res.data));
  }, []);
  console.log(produc,catagray);
  // const handlelogout = ()=>{
  //   localStorage.removeItem("login");
  //   navigate("/")
  // }
  const handlecatagray = (value) => {
    axios.get(`https://dummyjson.com/auth/products/category/${value}`,{
      headers:{
       'Authorization': `Bearer ${token}`
     } 
      })
     .then((res) => setProduc(res.data.products));
  }
  return (
    <div>
     <div>
      {
        catagray?.map((value)=>(
 <button className="btn btn-primary m-2" onClick={()=>handlecatagray(value)}>{value}</button>
      ))
      }
     </div>
      { 
        produc?.map((value, index) => (
        <div
          key={index}
          className="card d-inline-flex m-1"
          style={{ width: "18rem" }}
        >
          <img src={value.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{value.title}</h5>
            <p className="card-text">{value.category}</p>
            <p className="card-text">{value.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/producs/${value.id}`)}
            >
              Add to
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;



// import React, { useState, useEffect } from "react";
// import {useNavigate} from "react-router-dom"
// const Home = () => {
//   let navigate = useNavigate();
//   const [produc, setProduc] = useState([]);
//   const [producdatail,setProducdatail]=useState();

//   useEffect(() => {
//     feachdata();
//     prodatail();
//   }, []);
//   const feachdata = async() => {
//    await fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => setProduc(data.products));
//   };
//   const prodatail = ()=>{
//     fetch("https://dummyjson.com/products/categories")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducdatail(data);
//       });
// }
// const feachcatagray = (cat)=>{
//   console.log(cat);
//   fetch(`https://dummyjson.com/products/category/${cat}`)
//     .then((res) => res.json())
//     .then((data) => {
//       setProduc(data.products);
//     });
// }

// // const handleChange = (va)=>{
// //   fetch(`https://dummyjson.com/products/search?q=${va}`)
// //     .then((res) => res.json())
// //     .then((data) => {
// //       setProduc(data.products);
// //     });
// // }
//   console.log(produc,producdatail);
 
 
//   return (
//     <div>
//      <div>
//       {/* <div>
//           <input type="search" placeholder="Search"  onChange={(e)=>handleChange(e.target.value)} />
//       </div> */}
//       <div>
//         {
//           producdatail?.map((value)=>(
//     <button className="btn btn-primary m-2 " onClick={()=>feachcatagray(value)}>{value}</button>
//     ) )
//         }
//       </div>
//      </div>
//       {  produc?.map((value, index) => (
//         <div key={index} className="card d-inline-flex m-1" style={{ width: "18rem" }}>
//           <img src={value.thumbnail} className="card-img-top"  alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{value.title}</h5>
//             <p className="card-text">{value.brand}</p>
//             <p className="card-text">{value.description}</p>
//             <button className="btn btn-primary" onClick={()=>navigate(`/producs/${value.id}`)}>Add to</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;
