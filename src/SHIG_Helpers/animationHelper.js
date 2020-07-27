export const _setTimeoutTrigger = (dispatch, callback, trigger, params, time) => {
  setTimeout(() => {
    // trigger will be if the component has been rendered
    // so we want to dispatch the state change if it is false
    if (trigger === true) {
      dispatch(callback(params));
    }
  }, time);
};
