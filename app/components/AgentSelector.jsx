var React = require("react"),
	MobileWeb = require("./Mobile.jsx"),
	WebPage = require("./Webpage.jsx");

module.exports = React.createClass({
	selectAgent: function(agent) {
		if(agent === 'mobile') {
			return <MobileWeb />	
		} else {
			return <WebPage />	
		}
	},
	render: function() {
		return (<div>{this.selectAgent(this.props.agent)}</div>)
	} 
});

