import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <p><input
          type="text"
          name="name"
          placeholder="Name of Keg"/></p>
        <p><input
          type="text"
          name="brand"
          placeholder="Keg Brand"/></p>
        <p><input
          type="text"
          name="price"
          placeholder="Price of Keg"/></p>
        <p><input
          type="text"
          name="alcoholContent"
          placeholder="Alcohol Content"/></p>
        <button type="submit" className={props.buttonStyle}> {props.buttonText} </button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;