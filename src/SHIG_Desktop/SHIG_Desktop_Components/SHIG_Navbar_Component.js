import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../SHIG_Styles/SHIG_NavbarComponent_Style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { _setTimeoutTrigger } from '../../SHIG_Helpers/animationHelper';
import { _resetRenderedState, _setIconsRendered, _setNavRendered } from '../../SHIG_Redux/actions';

const NavbarComponentDesktop = (props) => {
  const rendererState = useSelector((state) => state.renderer);
  const rendered = rendererState.nav_bar;
  const splashRendered = rendererState.splash_page;
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
    console.log(location.pathname);
    if (newPath !== '/') {
      dispatch(_resetRenderedState());
    }
  };

  useEffect(() => {
    _setTimeoutTrigger(dispatch, _setNavRendered, rendered === false && splashRendered === true, true, 500);
  });
  const renderedLinks = links.map(({ link, label, className }) => {
    return (
      <div className={`navbar_link link ${className}`} key={label}>
        <Link to={link} onClick={handleClick} id={link}>
          {label}
        </Link>
      </div>
    );
  });
  return rendered || location.pathname !== '/' ? <div id="navbar_component">{renderedLinks}</div> : null;
};

NavbarComponentDesktop.propTypes = {};

export default NavbarComponentDesktop;
