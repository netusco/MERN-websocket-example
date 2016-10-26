var React = require("react"),
	ReactDOM = require("react-dom"),
	ShapeList = require("./components/ShapeList.jsx"),
	ShapesStore = require("./stores/ShapesStore"),
	MobileDetect = require('mobile-detect'),
	md = new MobileDetect(window.navigator.userAgent),
	agent = (md.mobile() || md.tablet()) ? "mobile" : "web";
	_shapes = [],
	AgentSelector = require("./components/AgentSelector.jsx");

var getShapesCallback = function(shapes){
    _shapes = shapes;
    render();
};

ShapesStore.onChange(getShapesCallback);

function render() {
	ReactDOM.render(<AgentSelector shapes={_shapes} agent={agent} />, document.getElementById("container"));    
}
