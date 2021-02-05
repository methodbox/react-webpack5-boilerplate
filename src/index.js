import * as React from "react";
import * as ReactDOM from "react-dom";
//  Main component
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <div>
        <Main />
      </div>
    </>
  );
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
module.hot.accept();
