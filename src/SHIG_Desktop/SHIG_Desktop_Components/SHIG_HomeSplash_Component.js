import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { _setSplashRendered } from '../../SHIG_Redux/actions';
import { _setTimeoutTrigger } from '../../SHIG_Helpers/animationHelper';
import '../../SHIG_Styles/SHIG_DesktopHomeSplash_Style.scss';
import IconsComponent from './SHIG_Icons_Component';
import Particles from 'react-tsparticles';

const SplashPage = (props) => {
  const rendererState = useSelector((state) => state.renderer);
  const rendered = rendererState.splash_page;
  const dispatch = useDispatch();

  useEffect(() => {
    _setTimeoutTrigger(dispatch, _setSplashRendered, rendered === false, true, 300);
  });

  return (
    <div id="splash_page_container">
      {rendered ? (
        <div id="home_top">
          <Particles
            id="tsparticles"
            options={{
              width: '100vw',
              height: '50vh',
              fpsLimit: 60,
              interactivity: {
                detectsOn: 'canvas',
                events: {
                  onClick: {
                    enable: true,
                    mode: 'push'
                  },
                  onHover: {
                    enable: false,
                    mode: 'repulse'
                  },
                  resize: true
                },
                modes: {
                  bubble: {
                    distance: 1,
                    duration: 2,
                    opacity: 0.3,
                    size: 40
                  },
                  push: {
                    quantity: 4
                  },
                  repulse: {
                    distance: 50,
                    duration: 0.2
                  }
                }
              },
              particles: {
                color: {
                  value: ['#ff263a', '#ffffff', '#5cff67', '#31fdff'],
                  opacity: 0.2
                },
                links: {
                  color: ['#ff263a', '#ffffff', '#5cff67', '#31fdff'],
                  distance: 150,
                  enable: true,
                  opacity: 0.2,
                  width: 0.5
                },
                collisions: {
                  enable: true
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outMode: 'bounce',
                  random: true,
                  speed: 5,
                  straight: false
                },
                number: {
                  density: {
                    enable: true,
                  },
                  value: 50
                },
                opacity: {
                  value: 0.2
                },
                shape: {
                  type: ['circle', 'polygon'],
                  stroke: {
                    width: 0.25,
                    color: 'red'
                  }
                },
                size: {
                  random: true,
                  value: 3
                }
              },
              detectRetina: true
            }}
          />
          <div className="header">
            <h1>SHIG</h1>
            <h2>Delivering beautiful web journeys since 2019</h2>
          </div>
          <IconsComponent />
        </div>
      ) : null}

      <div id="home_bottom">
        <div className="buttons">
          <button>Make Custom Enquiry</button>
          <button>Get Quote</button>
          <button>Previous Work</button>
        </div>
      </div>
    </div>
  );
};

SplashPage.propTypes = {};

export default SplashPage;
