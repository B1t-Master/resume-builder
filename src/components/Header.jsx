import "../styles/header.css";
export default function Header() {
  return (
    <header>
      <div>
        <h1>Resume Builder </h1>
        <p>Based on</p>
        <a
          target="_blank"
          href="https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs"
        >
          {" "}
          Jake's resume template{" "}
        </a>
      </div>
      <hr />
    </header>
  );
}
