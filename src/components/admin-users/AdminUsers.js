import React, { Fragment, useEffect } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import MyContext from "../Mycontext/Mycontext";
import axios from "axios";

function AdminUsers() {
  ////////////////// context 😍/////////////////
  // const { UserData } = useContext(MyContext);
  const [UserDatas, setUserData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/admine").then((res) => {
      setData(res.data.data);
      setUserData(res.data.data);
    });
  }, []);

  ///////////////////////////////////////////////

  function removeItem(id) {
    const result = filterdata.filter((item) => item.id !== id);
    setFilterdata(result);
  }

  /////////////////////////// search operation //////////////////////
  const [data, setData] = useState(UserDatas);
  const [filterdata, setFilterdata] = useState(UserDatas);
  const [search, setSearch] = useState([]);

  function filterData(search, users) {
    if (search && users) {
      const result = users.filter((item) =>
        item.username.toLowerCase().includes(search)
      );
      setFilterdata(result);
    }
  }
  useEffect(() => {
    filterData(search, data);
  }, [search, data]);
  return UserDatas === "" ? (
    <>
      <div>shimmer</div>
    </>
  ) : (
    <>
      <div className="admin-search-body">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      <div className="admin-users-content">
        {filterdata.map((item, index) => (
          <Fragment key={item._id}>
            <div className="admine-user-details">
              <div className="admine-user-box">
                <div className="user-box userbox-left">
                  <NavLink to={`user/${item._id}`}>
                    <div className="user-box-logo">
                      <img
                        alt=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE85hRxY6RrYvL8hhco7qmc3NnyMx_picyr9baG_MZmA&s"
                      />
                    </div>
                  </NavLink>
                  <div className="user-box-details">
                    <span>{item.username} 🏳️‍🌈</span>
                    <p>{item.password}</p>
                  </div>
                </div>
                <div className="user-box userbox-right">
                  <span onClick={() => removeItem(item.id)}>
                    <DeleteOutlineOutlinedIcon />
                  </span>
                </div>
              </div>
            </div>

            <hr />
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default AdminUsers;
