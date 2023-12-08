import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom"

const Addproducs = () => {
  const [produc, setProduc] = useState();
  let navigate = useNavigate();

  console.log(produc);
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      description: "",
      price: "",
      discountPercentage: "",
      rating: "",
      stock: "",
      brand: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("title is required"),
      category: Yup.string().required("category is required"),
      description: Yup.string().required("description is required"),
      price: Yup.number().required("price is required"),
      discountPercentage: Yup.number().required(
        "discountPercentage is required"
      ),
      rating: Yup.number().required("rating is required"),
      stock: Yup.number().required("stock is required"),
      brand: Yup.string().required("brand is required"),
    }),
    onSubmit: (value) => {
      console.log(value);
      fetch("https://dummyjson.com/products/add", {
        method: "post",
        body: JSON.stringify(value),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate("/home")
        });
    },
  });

  return (
    <div className="text-center">
      <div>
        <h2>ADD TO PRODUC</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-2">
          <input
            type="text"
            value={formik.values.title}
            placeholder="Title"
            name="title"
            onChange={formik.handleChange}
          />
          {formik.errors.title ? (
            <div className="error">{formik.errors.title}</div>
          ) : null}
        </div>
        <div className="mt-2">
          <input
            type="text"
            value={formik.values.category}
            placeholder="Category"
            name="category"
            onChange={formik.handleChange}
          />
          {formik.errors.category ? (
            <div className="error">{formik.errors.category}</div>
          ) : null}
        </div>
        <div className="mt-2">
          <input
            type="text"
            value={formik.values.description}
            placeholder="Description"
            name="description"
            onChange={formik.handleChange}
          />
          {formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>
        <div className="mt-2">
          <input
            type="text"
            value={formik.values.price}
            placeholder="Price"
            name="price"
            onChange={formik.handleChange}
          />
          {formik.errors.price ? (
            <div className="error">{formik.errors.price}</div>
          ) : null}
        </div>
        <div className="mt-2">
          <input
            type="text"
            value={formik.values.discountPercentage}
            placeholder="DiscountPercentage"
            name="discountPercentage"
            onChange={formik.handleChange}
          />
          {formik.errors.discountPercentage ? (
            <div className="error">{formik.errors.discountPercentage}</div>
          ) : null}
        </div>
        <div className="mt-2">
          <input
            type="text"
            value={formik.values.rating}
            placeholder="Rating"
            name="rating"
            onChange={formik.handleChange}
          />
          {formik.errors.rating ? (
            <div className="error">{formik.errors.rating}</div>
          ) : null}
        </div>
        <div className="mt-2">
          <input
            type="text"
            value={formik.values.stock}
            placeholder="Stock"
            name="stock"
            onChange={formik.handleChange}
          />
          {formik.errors.stock ? (
            <div className="error">{formik.errors.stock}</div>
          ) : null}
        </div>

        <div className="mt-2">
          <input
            type="text"
            value={formik.values.brand}
            placeholder="Brand"
            name="brand"
            onChange={formik.handleChange}
          />
          {formik.errors.brand ? (
            <div className="error">{formik.errors.brand}</div>
          ) : null}
        </div>
        <div className="mt-2">
          <button type="submit" className="btn btn-primary">
            ADD TO PRODUCS
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addproducs;
