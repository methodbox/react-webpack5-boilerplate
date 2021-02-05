const path = require("path");

module.exports = {
  exampleMode: "expand",
  usageMode: "expand",
  defaultExample: false,
  propsParser(filePath, source, resolver, handlers) {
    return require("react-docgen").parse(source, resolver, handlers);
  },
  require: ["@babel/polyfill", path.join(__dirname, "./styleguide.css")],
  sections: [
    {
      name: "Components",
      description:
        "All React component definitions for this app can be found in this section.",
    },
    {
      name: "Props Definitions",
      content: "src/components/Props.md",
      description: "Definitions for props used in function components.",
    },
    {
      name: "State Definitions",
      content: "src/components/State.md",
      description:
        "Definitions for all values found in the React `state` object, a list of components that use them and examples of how they are used can be found in this section.",
    },
  ],
};
