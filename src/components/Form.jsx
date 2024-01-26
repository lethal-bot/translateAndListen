import play from "../../playbutton.png";
import Button from "./Button";
import Select from "./Select";
import { detectLanguage, translation } from "../utils/api";
import { useState } from "react";

export default function Form() {
  const [output, setOutput] = new useState("");

  async function submitHandler(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const input = fd.get("input");
    const getLanguage = fd.get("getLanguage");
    const postLanguage = fd.get("postLanguage");
    detectLanguage(input);
    setOutput(await translation(input, getLanguage, postLanguage));
  }
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="top-section">
        <label htmlFor="input">Enter a sentence to translate</label>
        <Select className="dropdown" name="getLanguage" val="English"></Select>
      </div>
      <input id="input" type="text" name="input" />
      <div className="middle-section">
        <Button className="button" type="submit" value="Translate"></Button>
        <Button
          className="play-button"
          type="button"
          value="Listen"
          img={play}
        ></Button>
      </div>
      <div className="gap">
        <div className="dotted"></div>
      </div>
      <div className="half-top-section">
        <label htmlFor="output">Get translated text</label>
        <Select className="dropdown" name="postLanguage"></Select>
      </div>
      <div id="output" className="answer">
        {output}
      </div>
      <div className="bottom">
        <Button className="button black" type="reset" value="Reset"></Button>
        <Button
          className="play-button"
          type="button"
          value="Listen"
          img={play}
        ></Button>
      </div>
    </form>
  );
}
