import React, { useState } from 'react';
import '../../SHIG_Styles/SHIG_DesktopContact_Style.css';
import OperatingHours from '../SHIG_Desktop_Components/SHIG_OperatingHours_Component';
import ContactForm from '../SHIG_Desktop_Components/SHIG_ContactForm_Component';

const DesktopContactContainer = (props) => {
  return (
    <div id="contact_container">
      <OperatingHours />
      <ContactForm />
    </div>
  );
};

DesktopContactContainer.propTypes = {};

export default DesktopContactContainer;
