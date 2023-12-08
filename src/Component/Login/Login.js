import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("username is required").min(6),
      password: Yup.string().required("password is required").min(6),
    }),
    onSubmit: async (value) => {
      console.log(value);
      try {
        let response = await axios.post("https://dummyjson.com/auth/login", {
          username: value.username,
          password: value.password,
        });
        const { token } = response.data;
        if(token){
             localStorage.setItem("login", token);
             navigate("/home");
        }
        else {
              console.log("errer");        }
          } catch (error) {
              console.log("user is not valid")
              console.error(error);
          }
                              },
  });
  //acharlota
  //M9lbMdydMN
  return (
    <div>
      <form className="mt-2 text-center" onSubmit={formik.handleSubmit}>
      <h1>Login</h1>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formik.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username ? (
            <div className="error text-danger">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="mt-3">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formik.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
            <div className="error text-danger">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

