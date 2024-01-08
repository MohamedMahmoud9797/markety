import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../../Services/API/apiCalling";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setloading } from "../../../Redux/Loading/loading.js";
import Loading from "./../../Loading/Loading";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.registerUser);
  const { loading } = useSelector((state) => state.loading);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
      if (data.message === "success") {
        dispatch(setloading(true));
        navigate("/home");
      } else {
        dispatch(setloading(false));
        alert(data.message);
      }
    },
  });
  return (
    <div className="w-50 m-auto my-5">
      {loading ? <Loading /> : ""}

      <h1 className="my-5">Login Form</h1>
      <form onSubmit={formik.handleSubmit}>
        {formik.errors.name && formik.touched.name ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.name}
          </div>
        ) : (
          ""
        )}

        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="form-control mb-3"
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.email}
          </div>
        ) : (
          ""
        )}
        <label htmlFor="password" className="form-label">
          password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="form-control mb-3"
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.password}
          </div>
        ) : (
          ""
        )}

        <button
          type="submit"
          className="btn bg-main text-white"
          disabled={!formik.isValid && formik.dirty}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
