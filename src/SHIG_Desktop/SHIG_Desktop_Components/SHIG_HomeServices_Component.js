import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../SHIG_Styles/SHIG_DesktopHomeServices_Style.scss';

const HomeServicesComponent = (props) => {
  const [mounts, setMounts] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      // grab the container to pull from the side
      const el = document.querySelector('#home_services_inner_container');
      // grab the content container to expand
      const contentEl = document.querySelector('#home_services_content');
      // scrolling index for determining whether to expand / collapse window
      let currentScrollingIndex = parseInt(contentEl.getAttribute('data-scroll-index'), 10);
      // get current width of container
      const currentWidth = parseFloat(el.style.width.split('px')[0]);
      // if we are at the top of the screen
      if (window.scrollY === 0) {
        // remove event listener if the current width is at its maximum
        if (currentWidth <= window.innerWidth && event.deltaY > 0) {
          if (currentWidth >= window.innerWidth) {
            setTimeout(() => {
              event.target.removeEventListener('mousewheel', handleScroll);
            }, 1000);
            return;
          }
          // prevent scrolling temporarily
          event.preventDefault();
          // set content width
          contentEl.style.width = '80%';
          // update container width by 20px
          el.style.width = currentWidth + 20 + 'px';
          contentEl.setAttribute('data-scroll-index', (currentScrollingIndex + 20).toString());
        } else if (currentWidth > 0 && event.deltaY) {
          if (currentScrollingIndex > 0) {
            contentEl.setAttribute('data-scroll-index', (currentScrollingIndex - 20).toString());
          }
          if (currentScrollingIndex <= 0) {
            el.style.width = currentWidth - 20 + 'px';
          }
        }
      }
    };

    // initialised to check if feature is enabled
    let passiveIfSupported = false;

    // if first mount, add listener to test if passive is supported and then add scroll and mousewheel listener to
    // handle updating the side bar
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
      window.addEventListener(
        'scroll',
        (_event) => {
          _event.preventDefault();
        },
        passiveIfSupported
      );
    }
    try {
      window.addEventListener('mousewheel', handleScroll, { passive: false });
    } catch (e) {
      console.log(e);
    }
  }, [mounts]);


  return mounts ? (
    <div id="home_services_container" style={{ width: '100%' }}>
      <div id="home_services_inner_container" style={{ width: '0' }}>
        <div className="content" style={{ width: '0' }} id="home_services_content" data-scroll-index="0">
          {}
        </div>
      </div>
    </div>
  ) : null;
};

HomeServicesComponent.propTypes = {};

export default HomeServicesComponent;
