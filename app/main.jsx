var React = require("react"),
	ReactDOM = require("react-dom"),
	ShapeList = require("./components/ShapeList.jsx"),
	ShapesStore = require("./stores/ShapesStore"),
	_shapes = [],
	AgentSelector = require("./components/AgentSelector.jsx");

var getShapesCallback = function(shapes){
    _shapes = shapes;
    render();
};

ShapesStore.onChange(getShapesCallback);

// @todo: add dinamic aggent depending on entry by mobile or webpage
function render() {
	ReactDOM.render(<AgentSelector shapes={_shapes} agent="web" />, document.getElementById("container"));    
}
