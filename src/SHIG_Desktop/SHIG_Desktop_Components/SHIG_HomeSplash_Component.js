import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { _setButtonsRendered, _setSplashRendered } from '../../SHIG_Redux/actions';
import { _setTimeoutTrigger } from '../../SHIG_Helpers/animationHelper';
import '../../SHIG_Styles/SHIG_DesktopHomeSplash_Style.scss';
import IconsComponent from './SHIG_Icons_Component';
import Particles from 'react-tsparticles';
import { particleOptions } from '../../SHIG_Helpers/particleOptions';

const SplashPage = (props) => {
  const rendererState = useSelector((state) => state.renderer);
  const rendered = rendererState.splash_page;
  const iconsRenderedObj = rendererState.icons_bar;
  const buttonsRendered = rendererState.buttons_bar;
  const dispatch = useDispatch();

  useEffect(() => {
    _setTimeoutTrigger(dispatch, _setSplashRendered, rendered === false, true, 300);
    if (!buttonsRendered) {
      let iconsRendered = true;
      for (const icon in iconsRenderedObj) {
        if (iconsRenderedObj.hasOwnProperty(icon)) {
          if (iconsRenderedObj[icon] === false) {
            iconsRendered = false;
          }
        }
      }
      if (iconsRendered) {
        _setTimeoutTrigger(dispatch, _setButtonsRendered, true, true, 300);
      }
    }
  });

  return (
    <div id="splash_page_container">
      <Particles id="tsparticles" options={particleOptions} />
      {rendered ? (
        <div id="home_top">
          <div className="header">
            <h1>SHIG</h1>
            <h2>Delivering beautiful web journeys since 2019</h2>
          </div>
          <IconsComponent />
        </div>
      ) : null}
      <div id="home_bottom">
        {buttonsRendered ? (
          <div className="buttons">
            <button className="appear_left">Make Custom Enquiry</button>
            <button className="appear_center">Get Quote</button>
            <button className="appear_right">Previous Work</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

SplashPage.propTypes = {};

export default SplashPage;
