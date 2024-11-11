import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const code = params.get("code");

  //   if (code) {
  //     // Simpan kode ke state, session, atau localStorage jika diperlukan
  //     console.log("Google Auth Code:", code);
  //     navigate("/dashboard"); // Alihkan ke halaman Dashboard
  //   }
  // }, [navigate]);

  const handleLogin = () => {
    window.location.href =
      "https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=61045499287-ir1hbv6255l2pj58loc362knscqhu3ah.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fsigned&scope=openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&state=kbTGFPeU0SbRxFAij7ukCkksUJ4Xsr&access_type=offline";
  };
  

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default LoginPage;
