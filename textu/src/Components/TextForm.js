import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpCase = () => {
    console.log("clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    console.log(text);
  };
  const handleTitle = () => {
    let titleCase = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    console.log(titleCase);
    setText(titleCase);
  };
  const handleClear = () => {
    let clear = "";
    setText(clear);
  };
  const handleCopy = () => {
    let copy = text.selectAll;
    setText(copy);
  };
  const handleClick = (e) => {
    console.log("change");
    setText(e.target.value);
  };

  const [text, setText] = useState("Please type here......");
  return (
    <div
      className="container my-4"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>{props.header}</h1>
      <div className="form-floating my-4">
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "gray" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          className="form-control"
          value={text}
          placeholder="Leave a comment here"
          onChange={handleClick}
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary m-1" onClick={handleUpCase}>
          Uppercase
        </button>
        <button className="btn btn-secondary m-1" onClick={handleLowerCase}>
          Lowercase
        </button>
        <button className="btn btn-success m-1" onClick={handleTitle}>
          SentenceCase
        </button>
        <button className="btn btn-danger m-1" onClick={handleClear}>
          Clear All
        </button>
        <button className="btn btn-primary m-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2> Word Summary</h2>
        <p>
          {text.split(" ").length} Word {text.length} characters
        </p>
        <i>{0.008 * text.split(" ").length} minutes to read</i>
        <h3>Preview</h3>
        <p>{text.length > 1 ? text : "Enter something to see"}</p>
      </div>
    </div>
  );
}
