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
      link: '/'
    },
    {
      label: 'Contact',
      link: '/contact'
    },
    {
      label: 'Services',
      link: '/services'
    },
    {
      label: 'Get a Quote',
      link: '/quote'
    }
  ];
  const location = useLocation();

  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(location.pathname);
    if (location.pathname !== '/') {
      dispatch(_resetRenderedState());
    }
  };

  useEffect(() => {
    _setTimeoutTrigger(dispatch, _setNavRendered, rendered === false && splashRendered === true, true, 500);
  });
  const renderedLinks = links.map(({ link, label }) => {
    return (
      <div className="navbar_link link" key={label}>
        <Link to={link} onClick={handleClick}>
          {label}
        </Link>
      </div>
    );
  });
  return rendered ? <div id="navbar_component">{renderedLinks}</div> : null;
};

NavbarComponentDesktop.propTypes = {};

export default NavbarComponentDesktop;
