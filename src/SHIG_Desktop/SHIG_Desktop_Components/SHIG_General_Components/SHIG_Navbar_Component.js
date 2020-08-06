import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../SHIG_Styles/SHIG_NavbarComponent_Style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { _setTimeoutTrigger } from '../../../SHIG_Helpers/animationHelper';
import {
  _resetContactFormState,
  _resetRenderedState,
  _setIconsRendered,
  _setNavbarTitle,
  _setNavRendered
} from '../../../SHIG_Redux/actions';
import { _isMobile } from '../../../SHIG_Helpers/browserDetection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarComponentDesktop = (props) => {
  let isMobile = _isMobile();
  const rendererState = useSelector(({ renderer }) => renderer);
  const rendered = rendererState.nav_bar;
  const splashRendered = rendererState.splash_page;
  const { innerHeight, innerWidth } = window;
  console.log(innerHeight);
  // rough estimate of large tablet dimensions
  if (innerHeight > 1000 && innerWidth > 1100 && innerHeight < 1100 && innerWidth < 1400) {
    isMobile = false;
  }
  const [show, setShow] = useState(false);
  const links = [
    {
      label: 'Home',
      link: '/',
      className: ''
    },
    {
      label: 'Contact',
      link: '/contact',
      class: ''
    },
    {
      label: 'Services',
      link: '/services',
      class: ''
    },
    {
      label: 'Get a Quote',
      link: '/quote',
      className: 'highlighted'
    }
  ];
  const location = useLocation();

  const dispatch = useDispatch();
  const handleClick = (event) => {
    const newPath = event.target.id;
    let label = newPath === '/' ? '' : event.target.getAttribute('data-label');
    if (location.pathname === '/contact') {
      dispatch(_resetContactFormState());
    }
    if (newPath !== '/' && newPath !== location.pathname) {
      dispatch(_resetRenderedState());
    }
    dispatch(_setNavbarTitle(label));
    if (isMobile && show) {
      setShow(false);
    }
  };

  useEffect(() => {
    _setTimeoutTrigger(dispatch, _setNavRendered, rendered === false && splashRendered === true, true, 500);
  });
  const renderedLinks = links.map(({ link, label, className }) => {
    return (
      <div className={`navbar_link link ${className}`} key={label}>
        <Link
          to={link}
          onClick={handleClick}
          id={link}
          data-label={label}
          data-selected={location.pathname === link && location.pathname !== '/'}
        >
          {label}
        </Link>
      </div>
    );
  });
  if (isMobile) {
    return (
      <div id={show ? 'navbar_component_mobile' : 'navbar_component_mobile_hidden'}>
        {
          <FontAwesomeIcon
            icon={faBars}
            id="fa_bars_menu"
            onClick={() => setShow(!show)}
            style={{ color: show ? '#494949' : 'rgb(249, 218, 144)' }}
          />
        }
        {show ? <div className="navbar_links">{renderedLinks}</div> : null}
      </div>
    );
  }
  return rendered || location.pathname !== '/' ? (
    <div id={isMobile ? 'navbar_component_mobile' : 'navbar_component'}>{renderedLinks}</div>
  ) : null;
};

NavbarComponentDesktop.propTypes = {};

export default NavbarComponentDesktop;
