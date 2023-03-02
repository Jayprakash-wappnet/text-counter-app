import React, { useState } from "react";

function TextArea(props) {
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Uppper case", "success");
  };
  const handleOnChange = (event) => {
    console.log("You clicked on change !");
    setText(event.target.value);
  };

  const handleLowcase = () => {
    let lowCase = text.toLowerCase();
    setText(lowCase);
    props.showAlert("Converted into Lower case", "success");
  };
  const handleClearText = () => {
    let clrText = "";
    setText(clrText);
    props.showAlert("Text cleared", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied into clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let exText = text.split(/[ ]+/);
    setText(exText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="mb-3 my-5 justify-start"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {/* Heading is passed using props concept*/}
          <h2>{props.heading}</h2>
        </label>
        <textarea
          className="form-control"
          id="textBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#254574" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <button className="btn btn-primary mt-2 mx-3" onClick={handleUpCase}>
          Convert Into Uppercase
        </button>{" "}
        <button className="btn btn-secondary mt-2 mx-3" onClick={handleLowcase}>
          Covnert Into Lowercase
        </button>
        <button className="btn btn-danger mt-2 mx-3" onClick={handleClearText}>
          Clear
        </button>
        <button className="btn btn-success mt-2 mx-3" onClick={handleCopy}>
          Copy
        </button>
        <button
          className="btn btn-warning mt-2 mx-3"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      {/* below code for count total words and character */}
      <div
        className="container my-8"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text analysis:</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length !=0}).length} Words,{text.length} character
        </p>
        <p>To read text take a time : {0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Write Some thing into Above text box for Preview"}
        </p>
      </div>
    </>
  );
}

export default TextArea;
