import "../../../style/userlogin.css";
import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MyContext from "../../../components/Mycontext/Mycontext";

const UserLogin = () => {
  //////////////////////context 😒////////////////////////
  const { setIsLogin, setCurrentUser, UserData } = useContext(MyContext);

  ////////////////////////////////////////////////////////

  // const [userdata, setUserData] = useState(UserData);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handelLogin() {
    console.log(UserData);
    const currentUser = UserData.filter(
      (item) =>
        item.username === username && Number(item.password) === Number(password)
    );

    if (currentUser.length === 1) {
      setCurrentUser(currentUser[0].username);
      setIsLogin(true);
      navigate("/");
    } else {
      setIsLogin(false);
      alert("you are not loged");
    }
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
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
              />
            </div>
            <div className="block">
              <span>Password</span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
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
