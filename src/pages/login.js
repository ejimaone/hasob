import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ButtonLoader } from "../components/button-loader";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  username: Yup.string()
    .email("Invalid email address")
    .required("Required field"),
  password: Yup.string().required("Required field"),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit(values) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("isLoggedIn", true);
        navigate("/");
        window.location.reload();
      }, 2000);
    },
    validationSchema,
  });
  return (
    <div className="container flex-col flex items-center mt-20 justify-center">
      <div className="  w-1/3 ">
        <h1 className="text-4xl text-center">Login</h1>
        <form className="mt-5 text-left" onSubmit={formik.handleSubmit}>
          <label htmlFor="email" className="text-xs">
            Email
          </label>

          <div className="mt-1 relative">
            <input
              type="text"
              id={"email"}
              {...formik.getFieldProps("username")}
              className="border rounded border-green-700 py-4 mb-2 w-full bg-transparent"
              placeholder="Email Address"
            />
            <div className="text-red-600 text-xs mt-2">
              {formik.touched.username ? formik.errors.username : undefined}
            </div>
          </div>
          <label htmlFor="password" className=" text-xs ">
            Password
          </label>

          <div className="mt-1 relative">
            <input
              type="password"
              id={"password"}
              {...formik.getFieldProps("password")}
              className="border rounded border-green-700 py-4 w-full bg-transparent"
              placeholder="Password"
            />
            <div className="text-red-600 text-xs mt-2">
              {formik.touched.password ? formik.errors.password : undefined}
            </div>
          </div>

          <div>
            <button
              className="bg-green-700 w-full  mt-5 p-4 rounded text-white disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!formik.isValid}
              type="submit"
            >
              {isLoading ? <ButtonLoader /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
