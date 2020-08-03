import React from 'react';
import PropTypes from 'prop-types';
import '../../SHIG_Styles/SHIG_Popup_Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { _setContactFormError } from '../../SHIG_Redux/actions';

const PopupModal = (props) => {
  const { title, message, className, success, resetFunction } = props;
  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(_setContactFormError({ errorTitle: '', errorMessage: '', showPopup: false, success: false }));
    if (success) {
      dispatch(resetFunction());
    }
  };
  return (
    <div id="popup_container" className={className}>
      <div className="popup_content">
        <div className="close_container">
          <div className="close_content">
            <p>CLOSE</p>
            <FontAwesomeIcon icon={faTimes} id="fa_close_button" onClick={closePopup} />
          </div>
        </div>
        <div className={`header header_${success.toString()}`}>
          <h1>{title}</h1>
          {!success ? <h3>The following field(s) are missing:</h3> : null}
        </div>
        <div className="message">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

PopupModal.propTypes = {};

export default PopupModal;
