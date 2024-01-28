import { languageArray } from "../utils/languageArray";
import { useState } from "react";
export default function Select({ className, name, val }) {
  const [value, setValue] = useState(val === "English" ? "en" : "hi");

  function handleSelectChange(e) {
    setValue(e.target.value);
  }
  return (
    <select
      value={value}
      onChange={handleSelectChange}
      className={className}
      name={name}
    >
      {languageArray.map((lang) => (
        <option key={lang.language} value={lang.language}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}
