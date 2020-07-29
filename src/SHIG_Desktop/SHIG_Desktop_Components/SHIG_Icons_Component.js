import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../SHIG_Styles/SHIG_Icons_Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faGlobe,
  faLaptop,
  faMobile,
  faPeopleArrows,
  faTablet,
  faUserCheck,
  faDesktop
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { _setIconsRendered } from '../../SHIG_Redux/actions';
import IconComponent from './SHIG_Icon_Component';
import { _setTimeoutTrigger } from '../../SHIG_Helpers/animationHelper';

const IconsComponent = (props) => {
  const renderedState = useSelector((state) => state.renderer);
  const navRendered = renderedState.nav_bar;
  const iconsRendered = renderedState.icons_bar;
  const dispatch = useDispatch();
  const [mounts, setMounts] = useState(0);
  const displayClass0 = iconsRendered[0] ? 'display' : 'hidden';
  const displayClass1 = iconsRendered[1] ? 'display' : 'hidden';
  const displayClass2 = iconsRendered[2] ? 'display' : 'hidden';
  useEffect(() => {
    if (navRendered && mounts === 0) {
      // setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        // setTimeout(() => {
        const newState = iconsRendered;
        // newState[i] = true;
        _setTimeoutTrigger(dispatch, _setIconsRendered, true, true, 300 * i, newState, i);
        // dispatch(_setIconsRendered(true, newState));
        setMounts(1);
        // }, 250 * i);
      }
      // }, 750);
    }
  }, [dispatch, navRendered, mounts]);
  const webDesignIcon = (
    <IconComponent
      sizing={['3x', '3x', '3x']}
      classNames={['', '', '']}
      icons={[faTablet, faDesktop, faMobile]}
      displayClass={displayClass0}
      label="Web Design"
    />
  );
  const webHostingIcon = (
    <IconComponent
      sizing={['3x', '3x', '2x']}
      icons={[faDesktop, faPeopleArrows, faGlobe]}
      classNames={['', 'people_arrows', '']}
      displayClass={displayClass1}
      label="Web Hosting"
    />
  );
  const consultationIcon = (
    <IconComponent
      sizing={['2x', '3x']}
      icons={[faComments, faUserCheck]}
      classNames={['speech_bubble', '']}
      displayClass={displayClass2}
      label="Consultation"
    />
  );

  return (
    <div className="content">
      <div className="content_wrapper">
        {webDesignIcon}
        {webHostingIcon}
        {consultationIcon}
      </div>
    </div>
  );
};

IconsComponent.propTypes = {};

export default IconsComponent;
