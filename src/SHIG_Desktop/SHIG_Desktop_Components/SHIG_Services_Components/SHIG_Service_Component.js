import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IconComponent from '../SHIG_Icon_Components/SHIG_Icon_Component';
import {
  faComments,
  faDesktop,
  faGlobe,
  faMobile,
  faPeopleArrows,
  faTablet,
  faUserCheck
} from '@fortawesome/free-solid-svg-icons';
import '../../../SHIG_Styles/SHIG_Service_Style.css';
import { useDispatch, useSelector } from 'react-redux';
import { _setTimeoutTrigger } from '../../../SHIG_Helpers/animationHelper';
import { _setServicesComponentsRendered } from '../../../SHIG_Redux/actions';

const ServiceComponent = (props) => {
  const rendererState = useSelector((state) => state.renderer);
  const servicesState = rendererState.services_components;
  const navBarState = rendererState.nav_bar;
  const [mounts, setMounts] = useState(0);
  const dispatch = useDispatch();
  const { iconId, title, text, displayClass, index } = props;
  const iconMapping = {
    web_design: (
      <IconComponent
        sizing={['3x', '3x', '3x']}
        classNames={['', '', '']}
        icons={[faTablet, faDesktop, faMobile]}
        // displayClass={displayClass0}
        label={title}
      />
    ),
    consultation: (
      <IconComponent
        sizing={['2x', '3x']}
        icons={[faComments, faUserCheck]}
        classNames={['speech_bubble', '']}
        // displayClass={displayClass2}
        label={title}
      />
    ),
    web_hosting: (
      <IconComponent
        sizing={['3x', '3x', '2x']}
        icons={[faDesktop, faPeopleArrows, faGlobe]}
        classNames={['', 'people_arrows', '']}
        // displayClass={displayClass1}
        label={title}
      />
    )
  };
  useEffect(() => {
    if (mounts === 0) {
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          _setTimeoutTrigger(dispatch, _setServicesComponentsRendered, true, true, 200 * i, servicesState, i);
        }
        setMounts(1);
      }, 100);
    }
  }, [dispatch, mounts, servicesState]);
  return (
    <div className="service_component">
      <div className={`animatable_${iconId !== 'web_hosting' ? 'left' : 'right'} ${displayClass}`}>
        <div className="icon_container">{iconMapping[iconId]}</div>
        <div className="text_container">
          <div className="service_description" id={`service_description_${index}`}>
            <h2>{text.header}</h2>
            <h3>{text.sub_header}</h3>
            <div className="description">
              {text.description.split('////').map((desc) => (
                <p key={desc}>{desc}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceComponent.propTypes = {};

export default ServiceComponent;
