import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import '../../../SHIG_Styles/SHIG_PreferredCheckbox_Style.css';
import { _setWizardPreferredContact } from '../../../SHIG_Redux/actions/quoteWizardActions';

const PreferredCheckbox = (props) => {
  const { preferredContact } = useSelector((state) => state.wizardReducer);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    const dataId = event.target.getAttribute('data-id');
    dispatch(_setWizardPreferredContact(dataId));
  };
  return (
    <div className="preferred_checkbox">
      <p>Preferred Contact</p>
      <div
        className="checkbox"
        data-selected={preferredContact === props.id}
        data-id={props.id}
        onClick={handleClick}
      />
    </div>
  );
};

PreferredCheckbox.propTypes = {};

export default PreferredCheckbox;
