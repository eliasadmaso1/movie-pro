import "./Reiginster.css";

export default function Reg(props) {
  return (
    <div className="regDiv">
      <h1 style={{ color: "white" }}>{props.fName}</h1>
      <form>
        <label>User Name: </label>
        <input />
        <label>Email: </label>
        <input />
        <label>Password: </label>
        <input />
      </form>
    </div>
  );
}
