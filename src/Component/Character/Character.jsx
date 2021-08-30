import React, {Fragment, useState} from "react";
import './Character.css'


const Character = (props) => {

    const [toggle, setToggle] = useState(false)

    return (
        <article className="card">
            <img src={props.result.image} alt={`photo of ${props.result.name}`}/>
            <button className="card_info"
                onClick={(event) => {
                event.preventDefault()
                setToggle(!toggle)
            }}>Info

            </button>

            {toggle && (
                <Fragment>
                    <p>Name: {props.result.name}</p>
                    <p>Origin: {props.result.origin.name}</p>
                    <p>Location: {props.result.location.name}</p>
                    <p>Species: {props.result.species}</p>
                    <p>Status: {props.result.status}</p>
                    <p>Type: {props.result.type}</p>
                </Fragment>)}
        </article>
    )
}

export default Character;
