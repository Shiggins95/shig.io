import React from 'react';
import PropTypes from 'prop-types';
import '../../SHIG_Styles/SHIG_DesktopServices_Style.css';
import ServiceComponent from '../SHIG_Desktop_Components/SHIG_Service_Component';
import { useSelector } from 'react-redux';

const DesktopServicesContainer = (props) => {
  const rendererState = useSelector((state) => state.renderer);
  const servicesState = rendererState.services_components;
  const navBarState = rendererState.nav_bar;
  const services = [
    {
      title: 'Web Design',
      iconId: 'web_design',
      text:
        'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.' +
        'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.' +
        'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.' +
        'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.'
    },
    {
      title: 'Web Hosting',
      iconId: 'web_hosting',
      text:
        'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.' +
        'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.' +
        'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.' +
        'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.'
    },
    {
      title: 'Consultation / Support',
      iconId: 'consultation',
      text:
        'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.' +
        'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.' +
        'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.' +
        'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.'
    }
  ];

  return (
    <div id="services_container">
      {services.map((service, index) => (
        <ServiceComponent
          key={service.iconId}
          {...service}
          displayClass={servicesState[index] ? 'component_visible' : 'component_hidden'}
        />
      ))}
      <div className="services_mask" />
    </div>
  );
};

DesktopServicesContainer.propTypes = {};

export default DesktopServicesContainer;
