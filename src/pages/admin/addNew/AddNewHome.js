import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../config/AxiosConfig";
import "../../../style/addnew.css";
function AddNewHome() {
  const [prdctName, setPrdctName] = useState();
  const [prdctAmount, setPrdctAmount] = useState();
  const [prdctCategry, setPrdctCategry] = useState("Men");
  const [image, setImage] = useState(false);
  const [preiviewImage, setPreiviewImage] = useState(null);
  const navigate = useNavigate();

  ////////////////////// handle selection//////////////////
  function handleSelection(event) {
    setPrdctCategry(event.target.value);
  }

  function addNewItem() {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", prdctName);
    formData.append("price", prdctAmount);
    formData.append("category", prdctCategry);
    axios
      .post("admine/products/add/new", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    alert("added new item 👍");
    navigate("/admin/product");
  }

  const changeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setPreiviewImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="addnew-contianer">
      <div className="addnew-content">
        <div className="addnew-parts">
          <div className="addnew-img">
            {image ? (
              <img src={preiviewImage} alt="shoe" />
            ) : (
              <label>
                <AddAPhotoIcon />
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={changeImage}
                />
              </label>
            )}
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

              <span onClick={() => addNewItem()}>ADD</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewHome;
