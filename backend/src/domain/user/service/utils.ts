import { createTransport, SendMailOptions } from 'nodemailer';
require('dotenv').config();

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '0'),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const createResetPasswordMailOptions = (
  toEmail: string,
  resetLink: string,
): SendMailOptions => {
  const emailHtml = `
    <html>
      <body>
        <p>Hello,</p>
        <p>You requested a password reset for your account.</p>
        <p>Please click on the link below to reset your password:</p>
        <a href="${resetLink}" style="color: blue;">Reset Password</a>
        <p>If you did not request a password reset, please ignore this email.</p>
        <p>Thanks,</p>
        <p>chatApp Team</p>
      </body>
    </html>
  `;

  return {
    from: 'chat-app@gmail.com',
    to: toEmail,
    subject: 'Reset your password',
    html: emailHtml,
  };
};

export const sendEmail = async (options: SendMailOptions) => {
  try {
    const info = await transporter.sendMail(options);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.log(error);
    throw new Error('Error sending email');
  }
};
