import React from 'react';

function TechIntem({ tech, onDelete }) {
    return (
        <li>
            {tech}
            <button onClick={onDelete} type="button">Remover</button>
        </li>
    );
}
export default TechIntem;