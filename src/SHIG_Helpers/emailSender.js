import emailJS from 'emailjs-com';

export const _sendEmail = async (template, params) => {
  const user = 'user_NZ9AngoKPS2Lb7NFOpI8I';
  const serviceId = 'gmail';
  const res = await emailJS.send(serviceId, template, params, user);
  console.log(res);
};
