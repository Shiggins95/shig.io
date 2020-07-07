import React from 'react';
import './SHIG_Styles/SHIG_App_Style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComingSoonContainer from './SHIG_Containers/SHIG_ComingSoon_Container';
import NavbarComponent from './SHIG_Components/SHIG_Navbar_Component';
function App() {
  return (
    <div className="App">
      <Router>
        <div id="app_navbar_container">
          <NavbarComponent />
        </div>
        <Switch>
          <Route exact path="/" component={ComingSoonContainer} />
          <Route exact path="/contact" component={ComingSoonContainer} />
          <Route exact path="/quote" component={ComingSoonContainer} />
          <Route exact path="/services" component={ComingSoonContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
