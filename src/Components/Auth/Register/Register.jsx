import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../../Services/API/apiCalling";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setloading } from "../../../Redux/Loading/loading.js";
import Loading from "./../../Loading/Loading";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.registerUser);
  const { loading } = useSelector((state) => state.loading);
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    rePassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    phone: Yup.string().required("Phone is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
      if (data.message === "success") {
        dispatch(setloading(true));
        navigate("/login");
      } else {
        dispatch(setloading(false));
        alert(data.message);
      }
    },
  });
  return (
    <div className="w-50 m-auto my-5">
      {loading ? <Loading /> : ""}

      <h1 className="my-5">Register Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="form-control mb-3"
          onBlur={formik.handleBlur}
        />

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
        <label htmlFor="rePassword" className="form-label">
          rePassword
        </label>
        <input
          id="rePassword"
          name="rePassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.rePassword}
          className="form-control mb-3"
          onBlur={formik.handleBlur}
        />
        {formik.errors.rePassword && formik.touched.rePassword ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.rePassword}
          </div>
        ) : (
          ""
        )}
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.phone}
          className="form-control mb-3"
          onBlur={formik.handleBlur}
        />
        {formik.errors.phone && formik.touched.phone ? (
          <div className="alert alert-danger" role="alert">
            {formik.errors.phone}
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
