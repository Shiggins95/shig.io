export const _setTimeoutTrigger = (dispatch, callback, trigger, params, time, optionalParams, index) => {
  setTimeout(() => {
    if (optionalParams) {

      optionalParams[index] = true;
    }
    // trigger will be if the component has been rendered
    // so we want to dispatch the state change if it is false
    if (trigger === true) {
      dispatch(callback(params, optionalParams));
    }
  }, time);
};
