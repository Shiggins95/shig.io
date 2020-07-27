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
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            const newState = iconsRendered;
            newState[i] = true;
            dispatch(_setIconsRendered(true, newState));
            setMounts(1);
          }, 250 * i);
        }
      }, 750);
    }
  }, [dispatch, navRendered, mounts]);
  const webDesignIcon = (
    <div className={`content_box ${displayClass0}`}>
      <h2>Web Design</h2>
      <div className="icons">
        <FontAwesomeIcon icon={faTablet} size={'3x'} className="fa_icon" />
        <FontAwesomeIcon icon={faDesktop} size={'3x'} className="fa_icon" />
        <FontAwesomeIcon icon={faMobile} size={'3x'} className="fa_icon" />
      </div>
    </div>
  );
  const webHostingIcon = (
    <div className={`content_box ${displayClass1}`}>
      <h2>Web Hosting</h2>
      <div className="icons">
        <FontAwesomeIcon icon={faDesktop} size={'3x'} className="fa_icon" />
        <FontAwesomeIcon icon={faPeopleArrows} size={'2x'} className="fa_icon people_arrows" />
        <FontAwesomeIcon icon={faGlobe} size={'3x'} className="fa_icon" />
      </div>
    </div>
  );

  const consultationIcon = (
    <div className={`content_box ${displayClass2}`}>
      <h2>Consultation</h2>
      <div className="icons">
        <FontAwesomeIcon icon={faComments} size={'2x'} className="fa_icon speech_bubble" />
        <FontAwesomeIcon icon={faUserCheck} size={'3x'} className="fa_icon" />
      </div>
    </div>
  );

  return (
    <div className="content">
      {webDesignIcon}
      {webHostingIcon}
      {consultationIcon}
    </div>
  );
};

IconsComponent.propTypes = {};

export default IconsComponent;
