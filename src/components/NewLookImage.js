import React from "react";
import "../style/newlookimage.css";
function NewLookImage({ image, caption }) {
  return (
    <>
      <div className="look-image-content">
        <img alt="" src={image} />
      </div>
      <div className="look-image-captions">
        <div className="look-image-captions-content">
          <div className="look-image-captions-content-left">{caption}</div>
          <div className="look-image-captions-content-right">
            <p>
              Elementum donec leo vulputate sit proin suspendisse malesuada
              neque proin gravida ut platea vitae duis hac hac vel id ipsum
              ultricies ut faucibus ultrices.
            </p>
            <div className="caption-btn">
              <button>SHOP NOW</button>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewLookImage;
