var React = require("react"),
	ReactDOM = require("react-dom"),
	AgentSelector = require("./components/AgentSelector.jsx");

// @todo: add dinamic aggent depending on entry by mobile or webpage
ReactDOM.render(<AgentSelector agent="web" />, document.getElementById("container"));    
