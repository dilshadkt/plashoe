import HomeContainer from "../homeContainer/HomeContainer";
import NewLook from "../new-look/NewLook";
import ContentCard from "../../components/content-card/ContentCard";
import BrowsShoe from "../../components/brows-shoe/BrowsShoe";
import Sale from "../sales/Sale";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CartedProduct } from "../../asset/data/cart-data/CartedProduct";
import MyContext from "../../components/Mycontext/Mycontext";
import "../../style/home.css";
import UserLogin from "../auth/user/UserLogin";
import HomeLayout from "../HomeLayout/HomeLayout";
import { shopcardData } from "../../asset/data/shopCard/ShopData";
import AdminLayout from "../AdminLayout/AdminLayout";
import AdminUsers from "../../components/admin-users/AdminUsers";
import AdmineProduct from "../admin/admin-product/AdmineProduct";
import AdmineRevenue from "../admin/Admin-revenue/AdmineRevenue";
import AdmineCategory from "../../components/AdmineCategory/AdmineCategory";
import AddNewPrdct from "../admin/addNew/AddNewPrdct";
import AdminUpadate from "../admin/admin-update/AdminUpadate";
import AddNewHome from "../admin/addNew/AddNewHome";
import AdmineAll from "../admin/adminAllcategry/AdmineAll";
import UserSignUp from "../auth/user Sign/UserSignUp";
import AdmineUserDetails from "../../components/admin-users/Admine-user-Details/AdmineUserDetails";
import { UserData } from "../../asset/data/userData/Userdata";
import AdminLog from "../admin/adminLog/AdminLog";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const [orgData, setOrgData] = useState(shopcardData);
  const [cartOpen, setCartOpen] = useState(false);
  const [shoeqauntiy, setShoeQauntity] = useState(1);
  const [cartdat, setCartData] = useState(CartedProduct);
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState("User");
  const [currentAdmin, setCurrentAdmin] = useState("");
  const [userData, setUerData] = useState(UserData);

  const [issAdmineLogin, setIsAdmineLogin] = useState(false);

  /////////////////////// passing context 😒 /////////////////////
  const myName = {
    setCartOpen: setCartOpen,
    cartdata: cartdat,
    cartOpen: cartOpen,
    setCartData: setCartData,
    shoeqauntiy: shoeqauntiy,
    isLogin: isLogin,
    setIsLogin: setIsLogin,
    setCurrentUser: setCurrentUser,
    currentUser: currentUser,
    orgData: orgData,
    setOrgData: setOrgData,
    UserData: userData,
    setUerData: setUerData,
    currentAdmin: currentAdmin,
    setCurrentAdmin: setCurrentAdmin,
    setIsAdmineLogin: setIsAdmineLogin,
  };

  /////////////////////////////////////////////////////////////

  useEffect(() => {
    if (location.pathname === "/admin") {
      issAdmineLogin ? navigator("/admin") : navigator("/adminLog");
    }
  });

  return (
    <MyContext.Provider value={myName}>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomeContainer />} />
          <Route path="product-category/:id" element={<ContentCard />} />
          <Route path="look-book" element={<NewLook />} />
          <Route path="sale" element={<Sale />} />
          <Route
            path="browse/:noid"
            element={
              <BrowsShoe
                qauntity={shoeqauntiy}
                setQauntity={setShoeQauntity}
                setCartData={setCartData}
              />
            }
          />
        </Route>

        <Route path="login/sign" element={<UserSignUp />} />
        <Route path="login" element={<UserLogin />} />
        <Route path="adminLog" element={<AdminLog />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminUsers />} />
          <Route path="user/:userId" element={<AdmineUserDetails />} />
          <Route path="product" element={<AdmineProduct />}>
            <Route index element={<AdmineAll />} />
            <Route path=":id" element={<AdmineCategory />} />
            <Route path=":id" element={<AdmineCategory />} />
            <Route path="add" element={<AddNewPrdct />} />
            <Route path="add/new" element={<AddNewHome />} />
            <Route path=":id/browse/:id" element={<AdminUpadate />} />
            <Route path="browse/:id" element={<AdminUpadate />} />
          </Route>
          <Route path="revenue" element={<AdmineRevenue />} />
        </Route>
      </Routes>

      <div className={cartOpen && "homeBlurEffect"}></div>
    </MyContext.Provider>
  );
};
export default Home;
