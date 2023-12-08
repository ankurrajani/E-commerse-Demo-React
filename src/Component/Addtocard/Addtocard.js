import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Addtocard = () => {
  const [data, setdata] = useState([]);
  const id = useParams();
  useEffect(() => {
    fetchUsers(id.id);
  }, [id]);
  
console.log(data);
  const fetchUsers = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setdata(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const calculateDiscountedPrice = () => {
    if (data.price && data.discountPercentage) {
      const discount = (data.price * data.discountPercentage) / 100;
      return data.price - discount;
    }
    return data.price;
  };
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            {/* Product picture */}
            <div className="col-sm-5">
              <div className="thumbnail">
                <img src={data.thumbnail} className="img-responsive" alt="" />
                <div className="caption">
                  <div className="row buttons m-3 ">
                    <button
                      className="btn btn-primary  col-sm-4 col-sm-offset-2 btn-lg m-2"
                      style={{
                        fontSize: "1em",
                      }}
                    >
                      <span className="glyphicon glyphicon-shopping-cart" />
                      &nbsp;ADD TO CART
                    </button>
                    <button
                      className="btn btn-primary col-sm-4 col-sm-offset-1 btn-lg m-2"
                      style={{
                        fontSize: "1em",
                      }}
                    >
                      <i className="fa fa-bolt " style={{ fontSize: "1.2em" }} />{" "}
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Description */}
            <div className="col-sm-7 desc">
              <h6>category : {data.category}</h6>
              <div>
                <h4>
                  {data.brand} : {data.title}
                </h4>
                <div className="row">
                  <div className="col-sm-2">
                    <span className="bg-primary p-1 rounded text-white">
                      {data.rating}{" "}
                      <span className="glyphicon glyphicon-star" />
                    </span>
                  </div>
                </div>
                <div>
                  <del className="h3 text-danger">
                    ${data.price}{" "}
                    <span className="h6 text-dark p-4">
                      discount ${data?.discountPercentage}
                    </span>
                  </del>
                  <h3>${calculateDiscountedPrice()}</h3>
                </div>
                <h6>stock : {data.stock}</h6>
                <div className="row">
                  <div
                    className="container col-xs-12"
                    style={{ marginTop: "50px" }}
                  >
                    <div className="panel panel-default">
                      <div className="panel-body">
                        <div className="col-sm-12">
                          <h3>Product Description</h3>
                          <p>{data?.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {
    data?.images?.map((image, index) => {
        return(
            <img key={index} src={image} alt={`Product Image ${index + 1}`}  className="p-2 border" style={{height:"95px"}}/>
        )
    })
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Addtocard;
