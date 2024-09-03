import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Toast, { showToast } from "../Components/Toast/Toast";

const EmailVerificationScreen = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/verify-email/${token}`
        );
        showToast(response.data.message, "success");
        setTimeout(() => {
          navigate("/login"); // Redirect to login after successful verification
        }, 2000);
      } catch (error) {
        console.error(error?.response?.data?.message || error.message);
        const errorMessage = error?.response?.data?.message || error.message;
        showToast(errorMessage, "error");
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Toast />
      {loading ? (
        <h2 className="text-2xl text-orange-500">Verifying Email...</h2>
      ) : (
        <h2 className="text-2xl text-red-500">Verification Failed</h2>
      )}
    </div>
  );
};

export default EmailVerificationScreen;
