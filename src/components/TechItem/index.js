import React from 'react';
import PropTypes from 'prop-types';

function TechIntem({ tech, onDelete }) {
    return (
        <li>
            {tech}
            <button onClick={onDelete} type="button">Remover</button>
        </li>
    );
}

TechIntem.defaultProps = {
    tech: 'Oculto',
};

TechIntem.prototypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
}

export default TechIntem;