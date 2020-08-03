import React from 'react';
import PropTypes from 'prop-types';
import '../../../SHIG_Styles/SHIG_Date_Component/SHIG_Days_Style.css';

const Days = (props) => {
  const { divs } = props;
  return <div className="days">{divs}</div>;
};

Days.propTypes = {};

export default Days;
