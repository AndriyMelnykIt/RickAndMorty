import React from 'react';

function Location({ location }) {

    let { name, dimension, residents, type } = location;

    return (
        <div className="card black location">
            <div className="card-content">
                <h4 className="green-text">{name}</h4>
                <br/>
                <ul className="collection">
                    <li className="collection-item"><strong>Dimension: </strong>{dimension}</li>
                    <li className="collection-item"><strong>Type: </strong>{type}</li>
                    <li className="collection-item"><strong>Residents: </strong>{residents.length}</li>
                </ul>
            </div>
        </div>
    );
}

export default Location;