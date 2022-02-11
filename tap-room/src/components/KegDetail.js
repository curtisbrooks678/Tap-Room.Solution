import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <p>Name: {props.name}</p>
      <p>Brand: {props.brand}</p>
      <p>Price: {props.price}</p>
      <p>Alcohol Content: {props.alcoholContent}</p>
      <p>Pints Left: {props.pintsLeft}</p>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={ () => props.onClickingDelete(keg.id)}>Delete Keg</button>
      {/* <button onClick={ () => props.onClickingAddQuantity(keg.id)}>Add Quantity</button> */}
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  // onClickingAddQuantity: PropTypes.func
};

export default KegDetail;