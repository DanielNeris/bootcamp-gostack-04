import React, { Component } from 'react';

class TechList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            techs: [ 'Node.js', 'ReactJS', 'React Native' ]
        }
    }
    
	render() {
        const { techs } = this.state;

		return (
			<ul>
				<li>Noje.js</li>
				<li>ReactJS</li>
				<li>React Native</li>
			</ul>
		);
	}
}

export default TechList;