import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import "../../../style/navabar.css";
import Cart from "../../../components/cart/Cart";
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../../components/Mycontext/Mycontext";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import More from "../More/More";
import instance from "../../../axios/AxiosInstance";

const Navbar = () => {
  const userId = localStorage.getItem("userId");
  const user = localStorage.getItem("user");
  const [islogOpen, setIsLogOpen] = useState(false);
  const [isopenMore, setIsOpenMore] = useState(false);

  const { setCartOpen, cartdata, isLogin, cartOpen, isbtnClick, currentUser } =
    useContext(MyContext);
  const [cartCount, setCartCount] = useState("");
  useEffect(() => {
    instance
      .get(`/user/me`)
      .then((res) => {
        setCartCount(res.data.cart.length);
      })
      .catch((err) => console.log(err));
  }, [cartOpen, isbtnClick]);

  return (
    <>
      <div className="nav-container" id="home">
        <div className="top-nav">
          <span>
            Free Express Shipping on all orders with all duties included
          </span>
        </div>
        <div className="bottom-nav">
          <div className="nav-left">
            <div
              onClick={() => setIsOpenMore(true)}
              className="small-screen-more"
            >
              <div className="more-option">
                <DensityMediumIcon />
              </div>
            </div>
            <div className="nav-logo">
              <p>
                <NavLink to={"/"}>PLASHOE</NavLink>
              </p>
            </div>
            <ul className="nav-items">
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? { color: "black" } : {};
                  }}
                  to={"product-category/men"}
                >
                  MEN
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? { color: "black" } : {};
                  }}
                  to={"product-category/women"}
                >
                  WOMEN
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? { color: "black" } : {};
                  }}
                  to={"product-category/Collection "}
                >
                  COLLECTION
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? { color: "black" } : {};
                  }}
                  to={"look-book"}
                >
                  LOOKBOOK
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? { color: "black" } : {};
                  }}
                  to={"sale"}
                >
                  SALE
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <ul className="nav-items">
              <li>OUR STORY</li>
              <li>CONTACT</li>
            </ul>
            {isLogin && (
              <div
                className="nav-cart-cout-shower-container"
                onClick={() => setCartOpen(true)}
              >
                <div className="nav-cart-cout-shower">{cartCount}</div>
                <LocalMallIcon />
              </div>
            )}
            <div
              className="nav-cart-user-log-icon"
              onClick={() => setIsLogOpen(!islogOpen)}
            >
              <PersonIcon />

              <div
                onMouseLeave={() => setIsLogOpen(false)}
                className={
                  "user-log-details " + (islogOpen && "user-log-active")
                }
              >
                <div>{currentUser ? currentUser.username : "user"}</div>
                {isLogin ? (
                  <div className="user-log-out-btn">
                    <span>Log Out</span>
                    <div
                      className="user-log-btn-icon"
                      onClick={() => (
                        localStorage.setItem("user", ""),
                        localStorage.setItem("userId", "")
                      )}
                    >
                      <Link to={"login"}>
                        <LogoutIcon />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="user-log-out-btn">
                    <span>Log In</span>
                    <div className="user-log-btn-icon">
                      <Link replace to={"login"}>
                        <LoginIcon />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart />
      <div className="more-option-list-data">
        <More isopenMore={isopenMore} setIsOpenMore={setIsOpenMore} />
      </div>
    </>
  );
};
export default Navbar;
