import React from 'react';
import './SHIG_Styles/SHIG_App_Style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComingSoonContainer from './SHIG_Containers/SHIG_ComingSoon_Container';
import NavbarComponentDesktop from './SHIG_Desktop/SHIG_Desktop_Components/SHIG_Navbar_Component';
import HomeContainerDesktop from './SHIG_Desktop/SHIG_Desktop_Containers/SHIG_Home_Container';
import { ParallaxProvider } from 'react-scroll-parallax/cjs';
import { _isMobile } from './SHIG_Helpers/browserDetection';
function App() {
  const isMobile = _isMobile();
  console.log('IS MOBILE', isMobile);
  return (
    <ParallaxProvider>
      <div className="App">
        <Router>
          {!isMobile ? <NavbarComponentDesktop /> : null}
          <Switch>
            <Route exact path="/" component={!isMobile ? HomeContainerDesktop : null} />
            <Route exact path="/contact" component={ComingSoonContainer} />
            <Route exact path="/quote" component={ComingSoonContainer} />
            <Route exact path="/services" component={ComingSoonContainer} />
          </Switch>
        </Router>
      </div>
    </ParallaxProvider>
  );
}

export default App;
