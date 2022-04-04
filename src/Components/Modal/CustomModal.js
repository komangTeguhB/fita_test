import React from "react";
import PropTypes from "prop-types";
import "./CustomModal.css";

const CustomModal = (props) => {
  const { handleClose, show, children } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-head">
          <button type="button" onClick={handleClose} className="close-x">
            X
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </section>
    </div>
  );
};

CustomModal.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  keyItem: PropTypes.string,
};
export default CustomModal;
