import React from 'react';

export default function Car(props) {
    return (
        <article className="car">
            <h2>{props.Company}</h2>
            <p className="model">{props.Model}</p>
            <p>{props.Details}</p>
        </article>
    );
}