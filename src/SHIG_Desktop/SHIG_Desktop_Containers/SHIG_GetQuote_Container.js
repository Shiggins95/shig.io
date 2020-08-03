import React from 'react';
import PropTypes from 'prop-types';
import OperatingHours from '../SHIG_Desktop_Components/SHIG_OperatingHours_Component';
import '../../SHIG_Styles/SHIG_GetQuote_Style.css';
import GetQuoteWizard from '../SHIG_Desktop_Components/SHIG_QuoteWizard_Component';

const DesktopGetQuoteContainer = (props) => {
  return (
    <div id="get_quote_container">
      <OperatingHours />
      <GetQuoteWizard />
    </div>
  );
};

DesktopGetQuoteContainer.propTypes = {};

export default DesktopGetQuoteContainer;
