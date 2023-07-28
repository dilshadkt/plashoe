import React, { useState } from "react";

function CountButton({ qauntity, setQauntity }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="shoe-quantity-container">
        <button
          onClick={() => {
            qauntity > 1 && setQauntity(qauntity - 1);
          }}
        >
          -
        </button>

        <div>{qauntity}</div>

        <button onClick={() => setQauntity(qauntity + 1)}>+</button>
      </div>
    </>
  );
}

export default CountButton;
