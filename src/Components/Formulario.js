import React from "react";
export default function Formulario(props) {
  return (
    <form>
    <div className="input-container">
    <input type="text" value={props.username} placeholder="username"></input>
    </div>
    <div>
      <input type="password" value={props.password || ""} />
      </div>
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
  );
}
