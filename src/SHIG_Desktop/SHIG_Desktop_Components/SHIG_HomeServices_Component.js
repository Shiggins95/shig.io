import React, { useEffect, useState, createRef } from 'react';
import PropTypes from 'prop-types';
import '../../SHIG_Styles/SHIG_DesktopHomeServices_Style.scss';
import { Parallax } from 'react-scroll-parallax';

const HomeServicesComponent = (props) => {
  const [mounts, setMounts] = useState(0);
  const [rendered, setRendered] = useState(false);
  // const [currentWidth, setCurrentWidth] = useState(1);
  const containerRef = createRef();

  useEffect(() => {
    const handleScroll = (event) => {
      const el = document.querySelector('#home_services_inner_container');
      const currentWidth = parseFloat(el.style.width.split('px')[0]);
      if (window.scrollY === 0) {
        console.log(window.innerWidth);
        console.log(currentWidth);
        // do {
        if (currentWidth <= window.innerWidth && event.deltaY > 0) {
          if (currentWidth >= window.innerWidth) {
            setTimeout(() => {
              event.target.removeEventListener('mousewheel', handleScroll);
            }, 1000);
            return;
          }
          event.preventDefault();
          el.style.width = currentWidth + 20 + 'px';
        } else if (currentWidth > 0 && event.deltaY < 0) {
          el.style.width = currentWidth - 20 + 'px';
        }
        if (rendered && currentWidth < window.innerWidth) {
          setRendered(false);
        }
      }
      if (currentWidth >= window.innerWidth) {
        setRendered(true);
      }
    };
    let passiveIfSupported = false;

    if (mounts === 0) {
      try {
        window.addEventListener(
          'test',
          null,
          Object.defineProperty({}, 'passive', {
            get: function () {
              passiveIfSupported = { passive: false };
            }
          })
        );
      } catch (err) {}
      setMounts(1);
    }
    window.addEventListener(
      'scroll',
      (_event) => {
        _event.preventDefault();
      },
      passiveIfSupported
    );
    try {
      // const el = document.querySelector('#home_services_inner_container');
      // const currentWidth = parseFloat(el.style.width.split('px')[0]);
      window.addEventListener('mousewheel', handleScroll, { passive: false });
    } catch (e) {
      console.log(e);
    }
  }, [rendered, mounts, containerRef]);

  console.log('REF', containerRef);

  return mounts ? (
    <div id="home_services_container" style={{ width: '100%' }}>
      <div id="home_services_inner_container" style={{ width: '0' }}>
        <div className="content">
          <h1 id={rendered ? 'rendered' : 'not_rendered'} key="renderer_me">
            <div className="content_box">hello</div>
          </h1>
        </div>
      </div>
    </div>
  ) : null;
};

HomeServicesComponent.propTypes = {};

export default HomeServicesComponent;
