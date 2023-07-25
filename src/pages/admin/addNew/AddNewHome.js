import React, { useState, useContext } from "react";
import "../../../style/addnew.css";
import MyContext from "../../../components/Mycontext/Mycontext";
import { useNavigate } from "react-router-dom";

function AddNewHome() {
  const [prdctName, setPrdctName] = useState();
  const [prdctAmount, setPrdctAmount] = useState();
  const [prdctCategry, setPrdctCategry] = useState("Men");
  const [img, setImg] = useState("");

  ///////////////// context value ///////////////
  const { orgData, setOrgData } = useContext(MyContext);

  const navigate = useNavigate();

  ////////////////////// handle selection//////////////////
  function handleSelection(event) {
    setPrdctCategry(event.target.value);
  }

  //////////////ADD////////////////////

  function addNewItem() {
    setOrgData([
      ...orgData,
      {
        name: prdctName,
        amount: prdctAmount,
        image: img,
        categorie: prdctCategry,
        id: orgData.length + 1,
      },
    ]);
    alert("added new item 👍");
    navigate("/admin/product");
  }

  return (
    <div className="addnew-contianer">
      <div className="addnew-content">
        <div className="addnew-parts">
          <div className="addnew-img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="addnew-parts">
          <div className="addnew-form">
            <form>
              <label>Product Name :</label>
              <input
                type="text"
                onChange={(e) => setPrdctName(e.target.value)}
              />
              <label>Category :</label>
              <select onChange={handleSelection}>
                <option value={"Men"}>Men</option>
                <option value={"Women"}>Women</option>
              </select>
              <label>Amout :</label>
              <input
                type="number"
                onChange={(e) => setPrdctAmount(e.target.value)}
              />
              <label>Image :</label>
              <input type="text" onChange={(e) => setImg(e.target.value)} />
              <span onClick={() => addNewItem()}>ADD</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewHome;
