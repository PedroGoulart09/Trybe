import './Card.css';
import React from 'react';

const getColor = (props) => {
  if (props.red) return "Red"
  if (props.blue) return "Blue"
  if (props.green) return "Green"
  if (props.purple) return "Purple"
  return "" ;
}


const Card = props => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                <span>{props.children}</span>
            </div>
           
        </div>
    )
}

export default Card;
