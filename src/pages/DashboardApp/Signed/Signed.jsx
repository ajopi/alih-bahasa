// SignedPage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      console.log("Google Auth Code:", code);
      navigate("/dashboard");
    }
  }, [navigate]);

  return <div>Redirecting...</div>;
};

export default Signed;
