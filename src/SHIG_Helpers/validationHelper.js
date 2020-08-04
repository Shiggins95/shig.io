export const _validateEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

export const _validatePhoneNumber = (phoneNumber) => {
  if (phoneNumber === '') {
    return false;
  }
  // replace spaces, 44 & + from phone number
  // TODO - proud of this, first decent-ish regex I've written without looking up
  let _phoneNumber = phoneNumber.replace(/(44| |\+)/gm, '');
  console.log('PHONE NUMBER: ', _phoneNumber);
  console.log('PHONE NUMBER LENGTH: ', _phoneNumber.length);
  if (Number.isNaN(parseInt(_phoneNumber, 10))) {
    console.log('isnan: ', parseInt(_phoneNumber, 10));
    return false;
  }
  return _phoneNumber.length === 11 || _phoneNumber.length === 10;
};
