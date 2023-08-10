import React, { useEffect, useContext } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import { UserData } from "../../asset/data/userData/Userdata";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MyContext from "../Mycontext/Mycontext";

function AdminUsers() {
  ////////////////// context 😍/////////////////
  const { UserData } = useContext(MyContext);
  ///////////////////////////////////////////////

  function removeItem(id) {
    const result = filterdata.filter((item) => item.id !== id);
    setFilterdata(result);
  }

  /////////////////////////// search operation //////////////////////
  const data = UserData;
  // const [data, setdata] = useState(UserData);
  const [filterdata, setFilterdata] = useState(UserData);
  const [search, setSearch] = useState([]);
  function filterData(search, users) {
    const result = users.filter((item) =>
      item.username.toLowerCase().includes(search)
    );
    setFilterdata(result);
  }
  useEffect(() => {
    filterData(search, data);
  }, [search, data]);
  return (
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
        {filterdata.map((item) => (
          <>
            <div key={item.id} className="admine-user-details">
              <div className="admine-user-box">
                <div className="user-box userbox-left">
                  <NavLink to={`user/${item.id}`}>
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
          </>
        ))}
      </div>
    </>
  );
}

export default AdminUsers;
