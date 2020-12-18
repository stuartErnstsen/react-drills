import React from 'react';

function ListDisplay(props) {
    return (
        props.array.map((string, i) => <h2 ket={i}>{string}</h2>)
    )
}

export default ListDisplay;