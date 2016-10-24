var React = require("react"),
	Shape = require("./Shape.jsx");

module.exports = React.createClass({
	returnRow: function(key, shapes) {
		var rowShapes = [];

		for(let i=key; i<key+3; i++) {
			if(shapes[i]) {
				rowShapes.push( <Shape info={shapes[i]} key={"shape-"+i} /> );
			}
		}

		return rowShapes;
	},
	sortShapes: function(sortBy) {
		var shapes = this.props.shapes;
		var rowShapes = [];

		if(sortBy === 'category') {
			// @TODO: do the sorting of shapes by name 
		} else {
			// @TODO: do the sorting of shapes by color
		}
		
		for(let i = 0; i < shapes.length; i += 3) {
			rowShapes.push(<div className="normal-row" key={i}>{ this.returnRow(i, shapes) }</div>);
		}

		return rowShapes;
	},
	render: function() {
		return(
			<div className="shape-list">
				{ this.sortShapes(this.props.sort) }
			</div>
		)
	}
});


