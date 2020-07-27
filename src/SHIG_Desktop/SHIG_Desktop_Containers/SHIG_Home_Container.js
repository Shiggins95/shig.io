import * as React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
// import { BIRDS } from '../../vanta-master/src/vanta.birds';
import '../../SHIG_Styles/SHIG_DesktopHome_Style.scss';
import SplashPage from '../../SHIG_Desktop/SHIG_Desktop_Components/SHIG_HomeSplash_Component';
import HomeServicesComponent from '../../SHIG_Desktop/SHIG_Desktop_Components/SHIG_HomeServices_Component';

class HomeContainerDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  //
  // componentDidMount() {
  //   console.log(this.ref);
  //   this.vantaEffect = BIRDS({
  //     el: this.ref.current,
  //     THREE: THREE
  //   });
  // }
  // componentWillUnmount() {
  //   if (this.vantaEffect) this.vantaEffect.destroy();
  // }

  render() {
    return (
      <div id="home_container" ref={this.ref}>
        <SplashPage />
        <HomeServicesComponent />
        {/*<div style={{ background: 'red', width: '100vw', height: '100vh' }}>hello</div>*/}
      </div>
    );
  }
}

HomeContainerDesktop.propTypes = {};

export default HomeContainerDesktop;
