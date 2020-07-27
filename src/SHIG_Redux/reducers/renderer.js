const startingState = {
  splash_page: false,
  nav_bar: false,
  home_services: false,
  icons_bar: { 0: false, 1: false, 2: false }
};

const rendererReducer = (state = { ...startingState }, action) => {
  const { type, newIcons } = action;

  switch (type) {
    case 'SET_SPLASH_PAGE_TRUE':
      return { ...state, splash_page: true };
    case 'SET_SPLASH_PAGE_FALSE':
      return { ...state, splash_page: false };
    case 'SET_NAV_TRUE':
      return { ...state, nav_bar: true };
    case 'SET_NAV_FALSE':
      return { ...state, nav_bar: false };
    case 'SET_HOME_SERVICES_TRUE':
      return { ...state, home_services: true };
    case 'SET_HOME_SERVICES_FALSE':
      return { ...state, home_services: false };
    case 'SET_ICONS_BAR_TRUE':
      return { ...state, icons_bar: newIcons };
    case 'SET_ICONS_BAR_FALSE':
      return { ...state, icons_bar: newIcons };
    case 'RESET_ALL_RENDERED_STATE':
      return {
        splash_page: false,
        nav_bar: false,
        home_services: false,
        icons_bar: { 0: false, 1: false, 2: false }
      };
    default:
      return state;
  }
};

export default rendererReducer;
