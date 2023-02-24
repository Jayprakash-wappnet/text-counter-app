import React, { useState } from "react";

function TextArea(props) {
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("You clicked on change !");
    setText(event.target.value);
  };

  const handleLowcase = () => {
    let lowCase = text.toLowerCase();
    setText(lowCase);
  };

  const [text, setText] = useState("Enter text...");
  return (
    <>
      <div className="mb-3 my-5 justify-start">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {/* Heading is passed using props concept*/}
          <h2>{props.heading}</h2>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary mt-5" onClick={handleUpCase}>
          Convert Into Uppercase
        </button>{" "}
        <br />
        <button className="btn btn-secondary mt-2" onClick={handleLowcase}>
          Covert Into Lowercase
        </button>
      </div>

      {/* below code for count total words and character */}
      <div className="container my-8">
        <h2>Your text analysis:</h2>
        <p>
          {text.split(" ").length} Words,{text.length} character
        </p>
      </div>
    </>
  );
}

export default TextArea;
