import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
      <p>Name: {props.name}</p>
      <p>Brand: {props.brand}</p>
      <p>Price: {props.price}</p>
      <p>Alcohol Content: {props.alcoholContent}</p>
      <p>Pints Left: {props.pintsLeft}</p>
      </div>
      <button onClick={()=> props.whenSellPintClicked(props.id)} class="btn btn-success">Sell Pint</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenSellPintClicked: PropTypes.func
}

export default Keg;