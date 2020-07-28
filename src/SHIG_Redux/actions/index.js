export const _setSplashRendered = (value) => {
  const type = value === true ? 'SET_SPLASH_PAGE_TRUE' : 'SET_SPLASH_PAGE_FALSE';
  return { type };
};
export const _setNavRendered = (value) => {
  const type = value === true ? 'SET_NAV_TRUE' : 'SET_NAV_FALSE';
  return { type };
};
export const _setHomeServicesRendered = (value) => {
  const type = value === true ? 'SET_HOME_SERVICES_TRUE' : 'SET_HOME_SERVICES_FALSE';
  return { type };
};
export const _setIconsRendered = (value, newIcons) => {
  const type = value === true ? 'SET_ICONS_BAR_TRUE' : 'SET_ICONS_BAR_FALSE';
  return { type, newIcons };
};
export const _setButtonsRendered = (value) => {
  const type = value === true ? 'SET_BUTTONS_BAR_TRUE' : 'SET_BUTTONS_BAR_FALSE';
  return { type };
};

export const _resetRenderedState = () => {
  return { type: 'RESET_ALL_RENDERED_STATE' };
};
