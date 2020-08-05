import React from 'react';
import PropTypes from 'prop-types';
import '../../../SHIG_Styles/SHIG_Popup_Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { _setContactFormError } from '../../../SHIG_Redux/actions';

const PopupModal = (props) => {
  const {
    title,
    message,
    className,
    success,
    resetFunction,
    callback,
    showSubHeading,
    secondaryResetFunction
  } = props;
  const dispatch = useDispatch();
  const closePopup = () => {
    if (!callback) {
      dispatch(_setContactFormError({ errorTitle: '', errorMessage: '', showPopup: false, success: false }));
    } else {
      callback();
    }
    if (success) {
      dispatch(resetFunction());
    }
    if (secondaryResetFunction && success) {
      dispatch(secondaryResetFunction());
    }
  };
  return (
    <div id="popup_container" className={className}>
      <div className="popup_content">
        <div className="close_container">
          <div className="close_content" onClick={closePopup}>
            <p>CLOSE</p>
            <FontAwesomeIcon icon={faTimes} id="fa_close_button" />
          </div>
        </div>
        <div className={`header header_${success.toString()}`}>
          <h1>{title}</h1>
          {!success && showSubHeading ? <h3>The following field(s) are missing:</h3> : null}
        </div>
        <div className="message">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

PopupModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  className: PropTypes.string,
  success: PropTypes.bool,
  resetFunction: PropTypes.func,
  secondaryResetFunction: PropTypes.func,
  callback: PropTypes.func,
  showSubHeading: PropTypes.bool
};

export default PopupModal;
