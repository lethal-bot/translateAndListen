import play from "../../playbutton.png";
export default function Form() {
  return (
    <form className="form">
      <div className="top-section">
        <label>Enter a sentence to translate</label>
        <select className="dropdown" name="Language" id="">
          <option value="English">English</option>
        </select>
      </div>
      <input type="text" />
      <div className="middle-section">
        <button className="button">Translate</button>
        {/* <div className="middle-left">
          <button className="button">Translate</button>
          <button className="round">Reset</button>
        </div> */}
        <button className="play-button">
          <img className="play" src={play} alt="play" />
          Listen
        </button>
      </div>
      <div className="gap">
        <div className="dotted"></div>
      </div>
      <div className="half-top-section">
        <label>Get translated text</label>
        <select className="dropdown" name="" id="">
          <option value="Hindi">Hindi</option>
        </select>
      </div>
      <div className="answer"></div>
      <div className="bottom">
        <button className="button red">Reset</button>
        <button className="play-button">
          <img className="play" src={play} alt="play" />
          Listen
        </button>
      </div>
    </form>
  );
}
