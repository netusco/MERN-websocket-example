var React = require("react"),
	sort = require("../../server/data/shapes.json").sort,
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
	sortBy: function(shapes, property, sortOrder) {

		self = this;

		shapes.sort(function (shape1, shape2) {
			return sortOrder[shape1[property]] - sortOrder[shape2[property]]; 
		});

		if(typeof sortOrder.particularCase !== 'undefined' && 
				sortOrder.particularCase.property === property) {
			sortOrder.particularCase.args.forEach(function(args) {
				shapes = self[sortOrder.particularCase.method](shapes, args.idxA, args.idxB);
			});

		}

		return shapes;
	},
	swapShapes: function(array, index_A, index_B) {
		var temp = array[index_A];

		array[index_A] = array[index_B];
		array[index_B] = temp;

		return array;
	},
	sortShapes: function() {
		var sortBy = this.props.sort,
			shapes = this.props.shapes;

		if(sortBy === 'categories') {
			shapes = this.sortBy(shapes, 'color', sort.category.colorOrder);
			shapes = this.sortBy(shapes, 'name', sort.category.categoryOrder);
		} else {
			shapes = this.sortBy(shapes, 'name', sort.color.categoryOrder);
			shapes = this.sortBy(shapes, 'color', sort.color.colorOrder);
		}

		return shapes;
	},
	displayShapes() {
		var rowShapes = [],
			shapes = this.sortShapes();

		for(let i = 0; i < shapes.length; i += 3) {
			rowShapes.push(<div className="normal-row" key={i}>{ this.returnRow(i, shapes) }</div>);
		}

		return rowShapes;
	},
	render: function() {
		return(
			<div className="shape-list">
				{ this.displayShapes() }
			</div>
		)
	}
});


