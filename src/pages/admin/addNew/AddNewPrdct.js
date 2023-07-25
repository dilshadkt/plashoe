import React from "react";
import "../../../style/addnewprdct.css";
import { Link } from "react-router-dom";
function AddNewPrdct() {
  return (
    <>
      <Link to={"new"}>
        <h1 className="add-New">ADD➕😍</h1>
      </Link>
    </>
  );
}

export default AddNewPrdct;
