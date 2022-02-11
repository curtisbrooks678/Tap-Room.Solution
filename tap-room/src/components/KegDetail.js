import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <p>Name: {keg.name}</p>
      <p>Brand: {keg.brand}</p>
      <p>Price: {keg.price}</p>
      <p>Alcohol Content: {keg.alcoholContent}</p>
      <p>Pints Left: {keg.pintsLeft}</p>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={ () => props.onClickingDelete(keg.id)}>Delete Keg</button>
      <button onClick={ keg.pintsLeft += 1 }>Sell Pint</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSellPint: PropTypes.func
};

export default KegDetail;