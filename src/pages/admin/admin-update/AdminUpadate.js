import React, { useEffect, useState } from "react";
import "../../../style/adminUpdate.css";
import { useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import axios from "../../../config/AxiosConfig";

function AdminUpadate() {
  const cardId = useParams();

  const [shoe, setShoe] = useState([]);

  useEffect(() => {
    axios
      .get(`/admine/products/${cardId.id}`)
      .then((res) => setShoe(res.data.data));
  }, [cardId.id]);
  useEffect(() => {
    setShoeName(shoe.title);
    setShoeAmount(shoe.price);
    setShoeCategory(shoe.category);
  }, [shoe]);
  ///////////////// context value⬇️⬇️⬆️⬆️ ///////////////

  const [shoeName, setShoeName] = useState("");
  const [shoeAmount, setShoeAmount] = useState("");
  const [shoeCategory, setShoeCategory] = useState("");
  const [isEdit, setIsEdit] = useState(true);

  ////////////////// ediy function  👩‍🔧👨‍🔧////////
  function confirmChange() {
    console.log(shoeCategory);
    const data = {
      title: shoeName,
      price: shoeAmount,
      category: shoeCategory,
    };
    axios
      .put(`/admine/products/${cardId.id}`, data)
      .then((res) => console.log(res));
  }
  function handleSelection(event) {
    setShoeCategory(event.target.value);
  }

  return shoe === "" ? (
    <>
      <div>shimmer</div>
    </>
  ) : (
    <>
      <div className="admine-update">
        <div className="admine-update-content">
          <div className="admine-update-parts">
            <img alt="" src={shoe.image} />
          </div>
          <div className="admine-update-parts upadate-right">
            <form className={!isEdit ? "form-active" : ""}>
              <div className="edit-icon" onClick={() => setIsEdit(!isEdit)}>
                <EditIcon />
              </div>
              <label>Shoe Name :</label>
              <input
                type="text"
                value={shoeName}
                disabled={isEdit ? true : false}
                onChange={(e) => setShoeName(e.target.value)}
              />
              <label>Amount :</label>
              <input
                type="number"
                value={shoeAmount}
                disabled={isEdit ? true : false}
                onChange={(e) => setShoeAmount(e.target.value)}
              />
              <label>Category :</label>

              <select
                disabled={isEdit ? true : false}
                onChange={handleSelection}
              >
                <option value={"men"}>Men</option>
                <option value={"women"}>Women</option>
              </select>
              {!isEdit ? (
                <span className="confirm-btn" onClick={() => confirmChange()}>
                  Confirm
                </span>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUpadate;
