import InputForm from "./InputForm";

export function Sidebar() {
  const sections = [
    {
      id: 0,
      title: "Personal Information",
      isActive: false,
      children: <InputForm></InputForm>,
    },
    {
      id: 1,
      title: "Professional Summary",
      isActive: false,
      children: <InputForm></InputForm>,
    },
    {
      id: 2,
      title: "Experience",
      isActive: false,
      children: <InputForm></InputForm>,
    },
    {
      id: 3,
      title: "Education",
      isActive: false,
      children: <InputForm></InputForm>,
    },
    {
      id: 4,
      title: "Skills",
      isActive: false,
      children: <InputForm></InputForm>,
    },
  ];

  function toggleForm(element) {
    element.isActive = !element.isActive;
  }
  return (
    <>
      {sections.map((element) => (
        <div key={element.id}>
          <div className="fields">
            <h1>{element.title}</h1>
            <button onClick={toggleForm}>{element.isActive ? "+" : "-"}</button>
          </div>
          {element.isActive ? element.children : null}
        </div>
      ))}
    </>
  );
}
