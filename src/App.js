import React from 'react';
import './SHIG_Styles/SHIG_App_Style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComingSoonContainer from './SHIG_Containers/SHIG_ComingSoon_Container';
import NavbarComponentDesktop from './SHIG_Desktop/SHIG_Desktop_Components/SHIG_General_Components/SHIG_Navbar_Component';
import HomeContainerDesktop from './SHIG_Desktop/SHIG_Desktop_Containers/SHIG_Home_Container';
import { _isMobile } from './SHIG_Helpers/browserDetection';
import DesktopContactContainer from './SHIG_Desktop/SHIG_Desktop_Containers/SHIG_Contact_Container';
import DesktopServicesContainer from './SHIG_Desktop/SHIG_Desktop_Containers/SHIG_Services_Container';
import DesktopGetQuoteContainer from './SHIG_Desktop/SHIG_Desktop_Containers/SHIG_GetQuote_Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons/faMobile';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  const isMobile = _isMobile();
  // const isMobile = false;
  console.log('IS MOBILE', isMobile);
  return (
    <div className="App">
      <div className="rotate">
        <div className="animation">
          <h1>Please rotate your device</h1>
          <FontAwesomeIcon icon={faMobile} id="rotate_mobile" size="2x" />
          <FontAwesomeIcon icon={faSyncAlt} id="rotate_mobile_sync" size={'7x'} />
        </div>
      </div>
      <Router>
        {!isMobile ? <NavbarComponentDesktop /> : <NavbarComponentDesktop />}
        <Switch>
          <Route exact path="/" component={!isMobile ? HomeContainerDesktop : HomeContainerDesktop} />
          <Route
            exact
            path="/contact"
            component={!isMobile ? DesktopContactContainer : DesktopContactContainer}
          />
          <Route
            exact
            path="/quote"
            component={!isMobile ? DesktopGetQuoteContainer : DesktopGetQuoteContainer}
          />
          <Route
            exact
            path="/services"
            component={!isMobile ? DesktopServicesContainer : DesktopServicesContainer}
          />
          <Route
            path="/redirect_stephen"
            component={() => {
              window.location.href = 'http://www.stephen-higgins.co.uk';
              return null;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
