import React from "react";
class Before extends React.Component {
  render() {
    return (
      <div className="before">
        <h1>
          Tic-React-T{""}
          <img
            src="./logo192.png"
            height="24px"
            width="24px"
            alt="react-logo"
          />
          {""}e!
        </h1>
      </div>
    );
  }
}

class After extends React.Component {
  render() {
    return (
      <div className="after">
        <hr />
        <p>
          <a href="https://github.com/vandelvan/tic-react-toe">Github Repo</a>
        </p>
        <p>
          <a href="https://vandelvan.github.io/">Coded by Ivan Orozco</a>
        </p>
      </div>
    );
  }
}
export { Before, After };
