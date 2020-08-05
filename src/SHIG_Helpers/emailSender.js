import emailJS from 'emailjs-com';

export const _sendEmail = async (template, params) => {
  const user = 'user_NZ9AngoKPS2Lb7NFOpI8I';
  const serviceId = 'gmail';
  const res = await emailJS.send(serviceId, template, params, user);
  console.log(res);
};

export const _sendEmailLocal = async (params) => {
  const response = await fetch('http://localhost:8080/api/email/send_email', {
    body: JSON.stringify(params),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log(response);
};
