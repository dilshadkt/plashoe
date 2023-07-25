import React, { useContext, useState } from "react";
import "../../../style/userSign.css";
import { useNavigate } from "react-router-dom";
import MyContext from "../../../components/Mycontext/Mycontext";
import { Password } from "@mui/icons-material";
function UserSignUp() {
  ////////////////// navigate /////////////
  const history = useNavigate();
  ////////////////////////////////////////
  ////////////// context 🏳️‍🌈🏳️‍🌈///////////
  const { setUerData, UserData } = useContext(MyContext);

  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState();
  const [userPass, setUserPass] = useState("");
  const [userConfPass, setUserConfPass] = useState();

  /////////////////////////validation states //////////////
  const [isemptyname, setIsEmptyName] = useState(false);
  const [isemptyPass, setIsEmptyPass] = useState(false);
  const [isempty, setIsEmpty] = useState(false);

  function UserSignin() {
    setIsEmptyName(false);
    setIsEmptyPass(false);
    setIsEmpty(false);
    if (username === "" || userEmail === "") {
      setIsEmptyName(true);
    } else if (userPass === "") {
      setIsEmpty(true);
    } else if (userPass !== userConfPass) {
      setIsEmptyPass(true);
    } else {
      setUerData((prev) => [
        ...prev,
        { name: username, username: userEmail, password: userPass },
      ]);
      console.log(UserData);
      history("/login");
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
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username :</label>
              <input
                type="mail"
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <div className={"errPass " + (isemptyPass ? "empty-active" : "")}>
                Password must be equal
              </div>
              <div className={"errPass " + (isempty ? "empty-active" : "")}>
                Enter Password
              </div>
              <label>Password :</label>
              <input
                type="password"
                onChange={(e) => setUserPass(e.target.value)}
              />
              <label>Confirm Password :</label>
              <input
                type="password"
                onChange={(e) => setUserConfPass(e.target.value)}
              />

              <div className="userSign-btn">
                <span onClick={() => UserSignin()}>Sign Up</span>
              </div>
            </form>
          </div>
          <div className="already-have-ac" onClick={() => history(-1)}>
            {" "}
            already has an account ?
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSignUp;
