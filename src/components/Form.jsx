import play from "../../playbutton.png";
import Button from "./Button";
import Select from "./Select";
import Audio from "./Audio";
import { translation } from "../utils/api";
import { useState } from "react";

export default function Form() {
  const [output, setOutput] = new useState("this is output");
  const [input, setInput] = new useState("");
  const [select, setSelect] = new useState("en");

  function selectHandler(e) {
    setSelect(e.target.value);
  }

  function inputHandler(e) {
    setInput(e.target.value);
  }

  function resetHandler() {
    setOutput("");
    setInput("");
  }

  async function submitHandler(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const input = fd.get("input");
    const getLanguage = fd.get("getLanguage");
    const postLanguage = fd.get("postLanguage");
    setOutput(await translation(input, getLanguage, postLanguage));
  }
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="top-section">
        <label htmlFor="input">Enter a sentence to translate</label>
        <Select
          className="dropdown"
          name="getLanguage"
          val="English"
          onChange={selectHandler}
        ></Select>
      </div>
      <input
        id="input"
        type="text"
        name="input"
        value={input}
        onChange={inputHandler}
      />
      <div className="middle-section">
        <Button className="button" type="submit" value="Translate"></Button>
        <Audio
          className="play-button"
          type="button"
          value="Listen"
          img={play}
          text={input}
          languageCode={select}
        ></Audio>
      </div>
      <div className="gap">
        <div className="dotted"></div>
      </div>
      <div className="half-top-section">
        <label htmlFor="output">Get translated text</label>
        <Select className="dropdown" name="postLanguage"></Select>
      </div>
      <div id="output" className="answer">
        <p className="outputWrap">{output}</p>
      </div>
      <div className="bottom">
        <Button
          className="button black"
          type="button"
          value="Reset"
          onClick={resetHandler}
        ></Button>
        <Audio
          className="play-button"
          type="button"
          value="Listen"
          img={play}
          text={output}
          languageCode="hi"
        ></Audio>
      </div>
    </form>
  );
}
