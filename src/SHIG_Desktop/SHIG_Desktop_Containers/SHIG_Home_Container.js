import * as React from 'react';
import '../../SHIG_Styles/SHIG_DesktopHome_Style.scss';
import SplashPage from '../../SHIG_Desktop/SHIG_Desktop_Components/SHIG_Home_Components/SHIG_HomeSplash_Component';

class HomeContainerDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    return (
      <div id="home_container" ref={this.ref}>
        <SplashPage />
      </div>
    );
  }
}

HomeContainerDesktop.propTypes = {};

export default HomeContainerDesktop;
