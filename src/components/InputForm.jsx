import InputBox from "./details/InputBox";

export default function InputForm({ quantity = 2 }) {
  let inputBoxes = Array(quantity);
  for (let i = 0; i < quantity; i++) {
    inputBoxes.push(<InputBox type="text" />);
  }
  return (
    <>
      {inputBoxes.map((element) => element)}
      <InputBox field="Name" />
    </>
  );
}
