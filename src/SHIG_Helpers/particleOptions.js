export const particleOptions = {
  width: '100vw',
  height: '50vh',
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: false,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 1,
        duration: 2,
        opacity: 0.3,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 50,
        duration: 0.2
      }
    }
  },
  particles: {
    color: {
      value: ['#ff263a', '#ffffff', '#5cff67', '#31fdff'],
      opacity: 0.2
    },
    links: {
      color: ['#ff263a', '#ffffff', '#5cff67', '#31fdff'],
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 0.5
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: true,
      speed: 5,
      straight: false
    },
    number: {
      density: {
        enable: true
      },
      value: 50
    },
    opacity: {
      value: 0.2
    },
    shape: {
      type: ['circle', 'polygon'],
      stroke: {
        width: 0.25,
        color: 'red'
      }
    },
    size: {
      random: true,
      value: 3
    }
  },
  detectRetina: true
};
