import React, { Component } from 'react';

import TechItem from '../TechItem';

class TechList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTech: '',
            techs: ['Node.js', 'ReactJS', 'React Native']
        }
    }

    // static defaultProps = {
    //     tech: 'aaa'
    // };

    handleInputChange = e => this.setState({ newTech: e.target.value });

    handleDelete = (tech) => {
        const { techs } = this.state;

        this.setState({ techs: techs.filter(t => t !== tech) });
    }

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
                    {techs.map(tech => (
                    <TechItem
                        key={tech}
                        tech={tech}
                        onDelete={() => this.handleDelete(tech)}
                    />))}
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