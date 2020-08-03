import React from 'react';
import './SHIG_Styles/SHIG_App_Style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComingSoonContainer from './SHIG_Containers/SHIG_ComingSoon_Container';
import NavbarComponentDesktop from './SHIG_Desktop/SHIG_Desktop_Components/SHIG_Navbar_Component';
import HomeContainerDesktop from './SHIG_Desktop/SHIG_Desktop_Containers/SHIG_Home_Container';
import { _isMobile } from './SHIG_Helpers/browserDetection';
import DesktopContactContainer from './SHIG_Desktop/SHIG_Desktop_Containers/SHIG_Contact_Container';
import DesktopServicesContainer from './SHIG_Desktop/SHIG_Desktop_Containers/SHIG_Services_Container';
import DesktopGetQuoteContainer from './SHIG_Desktop/SHIG_Desktop_Containers/SHIG_GetQuote_Container';
function App() {
  const isMobile = _isMobile();
  // const isMobile = false;
  console.log('IS MOBILE', isMobile);
  return (
    <div className="App">
      <Router>
        {!isMobile ? <NavbarComponentDesktop /> : null}
        <Switch>
          <Route exact path="/" component={!isMobile ? HomeContainerDesktop : ComingSoonContainer} />
          <Route
            exact
            path="/contact"
            component={!isMobile ? DesktopContactContainer : ComingSoonContainer}
          />
          <Route exact path="/quote" component={!isMobile ? DesktopGetQuoteContainer : ComingSoonContainer} />
          <Route
            exact
            path="/services"
            component={!isMobile ? DesktopServicesContainer : ComingSoonContainer}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
