import "../../../style/userlogin.css";
import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MyContext from "../../../components/Mycontext/Mycontext";
import { userLogInstance } from "../../../axios/AxiosInstance";
import { useForm } from "react-hook-form";

import "react-toastify/dist/ReactToastify.css";
const UserLogin = () => {
  const { register, watch } = useForm();

  /////////// state value for localstorage/////
  // const [storedValue, setStoredValue] = useState("");
  // useEffect(() => {
  //   const storedData = localStorage.getItem("myStoredData");
  //   if (storedData) {
  //     setStoredValue(storedData);
  //   }
  // }, []);

  //////////////////////context 😒////////////////////////
  const { setIsLogin } = useContext(MyContext);

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  async function handelLogin() {
    setError(false);
    const user = {
      username: watch().username,
      password: watch().password,
    };
    await userLogInstance
      .post("/login", user)
      .then((res) => {
        setIsLogin(true);
        localStorage.setItem("user", res.data.username);
        localStorage.setItem("userId", res.data._id);
        localStorage.setItem("token", res.data.accessToken);
        navigate("/");
      })
      .catch((err) => setError(err.response.data.message));
  }
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="logo">
            <img src="assets/logo.png" alt="" />
          </div>
          <div className="form">
            <div className="block">
              <span>Username or Email Address</span>
              <input {...register("username")} type="text" />
            </div>
            <div className="block">
              <span>Password</span>
              <input {...register("password")} type="password" />
            </div>
            {error && <p className="form-error">{error}</p>}

            <div className="form-bottom">
              <div className="remeberme">
                <input type="checkbox" />

                <span>Remember Me</span>
              </div>
              <div className="login-btn">
                <button onClick={() => handelLogin()}>Sign Up</button>
              </div>
            </div>
          </div>

          <div className="forgetSection">
            <span>
              <NavLink to={"sign"}>Create new account ?</NavLink>
              <NavLink to={"/adminLog"}>Admin</NavLink>
            </span>
            <span>Lost your password?</span>
            <span>Go to Recycled shoe store</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserLogin;
