import React, { useState } from "react";
import "../../style/newlook.css";
import NewLookImage from "../../components/NewLookImage";
import { newLookData } from "../../asset/data/newLook/NewLookImageData";

function NewLook() {
  const newLook = newLookData;
  // const [newLook, setNewLook] = useState(newLookData);
  return (
    <>
      <div className="newlook-container">
        <div className="look-head">Lookbook</div>
        <div className="newlook-image-container">
          <div className="newlook-image">
            {newLook.map((item) => (
              <NewLookImage
                image={item.Image}
                caption={item.caption}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewLook;
