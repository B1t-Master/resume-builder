import { useState } from "react";

export default function InputBox({ type = "text", field }) {
  const [value, setValue] = useState("");
  function handleTyping(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <label for={value}>{field}</label>
      <input value={value} onChange={handleTyping} type={type} name="" id="" />
    </>
  );
}
