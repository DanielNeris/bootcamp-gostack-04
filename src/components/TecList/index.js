import React, { Component } from 'react';

class TechList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTech: '',
            techs: ['Node.js', 'ReactJS', 'React Native']
        }
    }

    handleInputChange = e => this.setState({ newTech: e.target.value });

    handleSubmit = e => {
        e.preventDefault();

        const { techs, newTech } = this.state;

        this.setState({ 
            techs: [...techs, newTech],
            newTech: '',
        });
    }

    render() {
        const { techs, newTech } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {techs.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={newTech}
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default TechList;