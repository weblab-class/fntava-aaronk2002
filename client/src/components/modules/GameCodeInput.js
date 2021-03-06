import React, { useState } from "react";
import { post } from "../../utilities";

import "./GameCodeInput.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const GameCodeInput = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO Post to server
    setValue("");
  };
  return (
    <>
      <div className="container">
        <div className="GameCodeContainer">
          <input
            type="text"
            placeholder="Insert Game Code Here"
            value={value}
            onChange={handleChange}
            className="NewPostInput-input"
          />
          <button
            type="submit"
            value="Submit"
            onClick={handleSubmit}
            className="NewPostInput-button"
          >
            Join With Game Code
          </button>
        </div>
      </div>
    </>
  );
};

export default GameCodeInput;