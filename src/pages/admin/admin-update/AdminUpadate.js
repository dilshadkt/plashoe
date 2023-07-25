import React, { useContext, useState } from "react";
import "../../../style/adminUpdate.css";

import { useParams } from "react-router-dom";
// import { shopcardData } from "../../../asset/data/shopCard/ShopData";
import EditIcon from "@mui/icons-material/Edit";
import MyContext from "../../../components/Mycontext/Mycontext";

function AdminUpadate() {
  const cardId = useParams();
  ///////////////// context value ///////////////
  const { orgData, setOrgData } = useContext(MyContext);

  const filter = orgData.filter((item) => item.id === Number(cardId.id));
  const [shoeName, setShoeName] = useState(filter[0].name);
  const [shoeAmount, setShoeAmount] = useState(filter[0].amount);
  const [shoeCategory, setShoeCategory] = useState(filter[0].categorie);
  const [isEdit, setIsEdit] = useState(true);

  function confirmChange() {
    // setcurrentData((prev) => ({
    //   ...prev,
    //   name: shoeName,
    //   amount: shoeAmount,
    //   categorie: shoeCategory,
    // }));

    const updatedItem = orgData.map((item) =>
      item.id === Number(cardId.id)
        ? {
            ...item,
            name: shoeName,
            amount: shoeAmount,
            categorie: shoeCategory,
          }
        : item
    );
    setOrgData(updatedItem);
    setIsEdit(true);
  }
  function handleSelection(event) {
    setShoeCategory(event.target.value);
  }

  return (
    <>
      <div className="admine-update">
        <div className="admine-update-content">
          <div className="admine-update-parts">
            <img src={filter[0].image} />
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
                <option value={"Men"}>Men</option>
                <option value={"Women"}>Women</option>
              </select>
              {!isEdit ? (
                <span className="confirm-btn" onClick={() => confirmChange()}>
                  {" "}
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
