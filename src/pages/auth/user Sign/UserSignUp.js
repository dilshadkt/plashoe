import React, { useState } from "react";
import "../../../style/userSign.css";
import { useNavigate } from "react-router-dom";
// import MyContext from "../../../components/Mycontext/Mycontext";
import { userLogInstance } from "../../../axios/AxiosInstance";
import { useForm } from "react-hook-form";

function UserSignUp() {
  ////////////////// navigate /////////////
  const history = useNavigate();
  // const { setUerData, UserData } = useContext(MyContext);
  const { register, watch } = useForm();

  /////////////////////////validation states //////////////
  const [isemptyname, setIsEmptyName] = useState(false);
  const [isemptyPass, setIsEmptyPass] = useState(false);
  const [isempty, setIsEmpty] = useState(false);
  const [error, setError] = useState(false);
  function UserSignin() {
    setIsEmptyName(false);
    setIsEmptyPass(false);
    setIsEmpty(false);
    if (watch().username === "" || watch().email === "") {
      setIsEmptyName(true);
    } else if (watch().password === "") {
      setIsEmpty(true);
    } else if (watch().password !== watch().confirmPassword) {
      setIsEmptyPass(true);
    } else {
      const user = {
        username: watch().username,
        email: watch().email,
        password: watch().password,
        confirmPass: watch().confirmPassword,
      };
      userLogInstance
        .post("/register", user)
        .then((res) => {
          history("/login");
        })
        .catch((err) => {
          setError(err.response.data.message);
          alert(`${err.response.data.message}`);
        });
    }
  }

  return (
    <>
      <div className="userSign-body">
        <div className="userSign-content">
          <div className="userSign-logo-section">
            <div className="userSignin-logo">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0BwpcUPAu9WH5bOICKbpExWFUk4nExbc1g&usqp=CAU"
              />
            </div>
          </div>
          <div className="userSignin-form">
            <div
              className={"errUserName " + (isemptyname ? "empty-active" : "")}
            >
              Enter username😒
            </div>
            <form>
              <label>Name :</label>
              <input type="text" {...register("username")} />
              <label>Username :</label>
              <input type="mail" {...register("email")} />
              <div className={"errPass " + (isemptyPass ? "empty-active" : "")}>
                Password must be equal
              </div>
              <div className={"errPass " + (isempty ? "empty-active" : "")}>
                Enter Password
              </div>
              <label>Password :</label>
              <input type="password" {...register("password")} />
              <label>Confirm Password :</label>
              <input type="password" {...register("confirmPassword")} />
              {error && <p className="register-error-message">{error}</p>}
              <div className="userSign-btn">
                <span onClick={() => UserSignin()}>Sign Up</span>
              </div>
            </form>
          </div>
          <div className="already-have-ac" onClick={() => history(-1)}>
            already has an account ?
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSignUp;
