import React from "react";
import PropTypes from "prop-types";

function Item(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
      <p>Name: {props.name}</p>
      <p>Brand: {props.brand}</p>
      <p>Price: {props.price}</p>
      <p>Alcohol Content: {props.alcoholContent}</p>
      <p>Pints Left: {props.pintsLeft}</p>
      <hr />
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsLeft: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
}

export default Item;