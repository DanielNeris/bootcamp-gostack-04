import React, { Component } from 'react';

class TechList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTech: '',
            techs: ['Node.js', 'ReactJS', 'React Native']
        }
    }

    handleInputChange = e => console.log(e.target.value);

    render() {
        const { techs } = this.state;

        return (
            <>
                <ul>
                    {techs.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
                <input type="text" onChange={this.handleInputChange} />
            </>
        );
    }
}

export default TechList;