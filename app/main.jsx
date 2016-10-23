var React = require("react"),
	ReactDOM = require("react-dom"),
	ShapeList = require("./components/ShapeList.jsx");

// @todo: add dinamic aggent depending on entry by mobile or webpage
ReactDOM.render(<ShapeList agent="web" />, document.getElementById("container"));    
