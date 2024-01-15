import React, { useState, useContext } from "react";
import "../../../style/addnew.css";
import MyContext from "../../../components/Mycontext/Mycontext";
import { useNavigate } from "react-router-dom";
import { admineProductInstance } from "../../../axios/AxiosInstance";

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
  const [selectedFile, setSelectedFile] = useState(null);

  function addNewItem() {
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("title", prdctName);
    formData.append("price", prdctAmount);
    formData.append("category", prdctCategry);
    admineProductInstance
      .post("/add/new", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

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
            <form encType="multipart/form-data">
              <label>Product Name :</label>
              <input
                type="text"
                name="title"
                onChange={(e) => setPrdctName(e.target.value)}
              />
              <label>Category :</label>
              <select onChange={handleSelection} name="category">
                <option value={"men"}>Men</option>
                <option value={"women"}>Women</option>
              </select>
              <label>Amout :</label>
              <input
                name="price"
                type="number"
                onChange={(e) => setPrdctAmount(e.target.value)}
              />
              <label>Image :</label>
              <input
                name="image"
                type="text"
                onChange={(e) => setImg(e.target.value)}
              />
              <input
                type="file"
                name="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
              <span onClick={() => addNewItem()}>ADD</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewHome;
