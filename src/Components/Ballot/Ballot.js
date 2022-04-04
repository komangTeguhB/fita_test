import React from "react";
import PropTypes from "prop-types";
import "./Ballot.css";
const Ballot = (props) => {
  const { title, imageUrl, keyItem } = props;
  return (
    <div className="box-paper" id={keyItem} key={keyItem}>
      <p className="ballot-title">{title}</p>
      <div
        className="image-container"
        id={"imgContainer-" + keyItem}
        key={"imgContainer-" + keyItem}
      >
        <img
          src={imageUrl}
          alt="NomineeImage"
          id={"img-" + keyItem}
          key={"img-" + keyItem}
        />
      </div>
      <button
        className="select-ballot-button"
        type="submit"
        id={"button-" + keyItem}
        key={"button-" + keyItem}
      >
        Select Button
      </button>
    </div>
  );
};

Ballot.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  keyItem: PropTypes.string,
};

export default Ballot;
