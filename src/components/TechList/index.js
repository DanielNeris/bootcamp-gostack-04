import React, { Component } from 'react';

import TechItem from '../TechItem';

class TechList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTech: '',
            techs: []
        }
    }

    // Executado assim que o componente aparece em tela
    componentDidMount() {
        const techs = localStorage.getItem('techs');
        console.log(techs)

        if (techs) {
            this.setState({ techs: JSON.parse(techs) });
        }
    }

    // Executado sempre que houver alterações nas props ou estado
    componentDidUpdate(_, prevState) {
        const { techs } = this.state;

        if (prevState.techs !== techs) {
            localStorage.setItem('techs', JSON.stringify(techs));
        }
    }

    // // Executado quando o componente deixa de existir
    // componentWillUnmount() {

    // }

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