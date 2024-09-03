import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Toast, { showToast } from "../Components/Toast/Toast";

const RegisterScreen = () => {
  const USERS_API_URL = "http://localhost:5000/api/users";
  const [data, setData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const sp = new URLSearchParams(location.search);
  const redirect = sp.get("redirect") || "/";

  const changeHandler = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    if (data.email !== data.confirmEmail) {
      showToast("Emails do not match!", "error");
      return;
    }
    if (data.password !== data.confirmPassword) {
      showToast("Passwords do not match!", "error");
      return;
    }

    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(`${USERS_API_URL}`, data, config);
      showToast("Registration Successful! Verification email sent.", "success");

      setTimeout(() => {
        navigate(`/login?redirect=${redirect}`); // Redirect to login after registration
      }, 2000);
    } catch (error) {
      console.error(error?.response?.data?.message || error.message);
      const errorMessage = error?.response?.data?.message || error.message;
      showToast(errorMessage, "error");
    }
    setLoading(false);
  };

  return (
    <div className="contacts-form form max-w-md mx-auto my-5 p-10 border rounded-lg shadow-lg bg-black flex flex-col items-center text-white">
      <Toast />
      <h4 className="mb-8 text-2xl text-orange-500">REGISTER AN ACCOUNT</h4>
      <form onSubmit={registerHandler} className="flex flex-col items-center">
        {[
          ["name", "text", "Your Name"],
          ["email", "email", "Your Email"],
          ["confirmEmail", "email", "Confirm Your Email"],
          ["password", "password", "Enter New Password"],
          ["confirmPassword", "password", "Confirm Your New Password"],
        ].map(([id, type, placeholder]) => (
          <input
            key={id}
            type={type}
            id={id}
            className="font-bold mb-4 text-xl shadow appearance-none border rounded w-full py-3 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
            placeholder={placeholder}
            onChange={changeHandler}
          />
        ))}
        <div className="m-2">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" required />
            <span className="ml-2 text-white">
              Agree with statements in{" "}
              <a className="text-blue-500 hover:text-orange-500" href="">
                Terms of Service
              </a>
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="button font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-xl"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <p className="mt-5 text-lg md:text-xl">
          Already have an account?{" "}
          <Link className="text-blue-500 hover:text-orange-500" to="/login">
            Log in
          </Link>
        </p>
        <button
          type="button"
          className="button mt-4 w-full"
          onClick={() => (window.location.href = "/api/users/google")}
        >
          Sign Up with Google
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
