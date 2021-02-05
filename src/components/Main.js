import * as React from "react";
//  child components import here
import AnotherComponent from "./AnotherComponent";
//  styles
import "../styles/main.css";
//  images
import Octocat from "../images/Octocat.jpg";

export default class Main extends React.Component {
  state = {
    name: "Main",
  };

  render() {
    return (
      <>
        <div>
          <h3>This is the {this.state.name} component.</h3>
          <AnotherComponent name="AnotherComponent" />
          <div id="img-div">
            <div id="border">
              <img src={Octocat} width="300" id="octocat-img" />
              <p for="octocat-img" class="octocat-text">
                This is an image test.
              </p>
              <p class="octocat-text-small">
                If you can see this, Webpack is loading images correctly.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
