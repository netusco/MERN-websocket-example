var React = require("react");

module.exports = React.createClass({
	getInitialState: function() {
		return { checked: false };
	},
	onClick: function() {
		var newState = !this.state.checked;
		this.setState = { checked: newState };
		this.props.callbackParent(newState, this.props.sortby);
	},
	render: function() {
		return <button className="btn-class" onClick={this.onClick} checked={this.state.checked}> Sort by {this.props.sortby} </button>
	}
});
