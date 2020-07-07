import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../SHIG_Styles/SHIG_NavbarComponent_Style.scss';

const NavbarComponent = (props) => {
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
  const renderedLinks = links.map(({ link, label }) => {
    return (
      <div className="navbar_link link">
        <Link to={link}>{label}</Link>
      </div>
    );
  });
  return <div id="navbar_component">{renderedLinks}</div>;
};

NavbarComponent.propTypes = {};

export default NavbarComponent;
