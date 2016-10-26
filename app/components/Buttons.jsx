var React = require("react");

module.exports = React.createClass({
	onClick: function() {
		this.props.callbackParent(true, this.props.sortby);
	},
	render: function() {
		return <button className="btn-class" onClick={this.onClick}> Sort by {this.props.sortby} </button>
	}
});
