var React = require("react"),
	MobileWeb = require("./Mobile.jsx"),
	WebPage = require("./Webpage.jsx");

module.exports = React.createClass({
	selectAgent: function(agent) {
		if(agent === 'mobile') {
			return <MobileWeb agentInfo={this.props.agentInfo} />	
		} else {
			return <WebPage shapes={this.props.shapes} />	
		}
	},
	render: function() {
		return (<div>{this.selectAgent(this.props.agent)}</div>)
	} 
});

