import { useState } from "react";
const Headline = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>"{name}"</div>
      <span onClick={() => setIsOpen(!isOpen)}>isOpen ? "➕" : "➖"</span>
      {children}
    </>
  );
};

export default Headline;
