const nodemailer = require('nodemailer');
// const { google } = require('googleapis');
// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;
// const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
// const oAuth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

exports.sendEmail = async (options) => {
  try {
    // const accessToken = await oAuth2Client.getAccessToken();

    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     type: 'OAuth2',
    //     user: process.env.GMAIL_USER,
    //     clientId: CLIENT_ID,
    //     clientSecret: CLIENT_SECRET,
    //     refreshToken: REFRESH_TOKEN,
    //     accessToken: accessToken,
    //   },
    //   from: process.env.GMAIL_USER,
    // });
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOPtion = {
      from: process.env.EMAIL_USER,
      to: options.bcc,
      bcc: options.bcc,
      subject: options.subject,
      text: options.email_text,
      html: options.email_html,
      attachments: [
        {
          filename: options.file_name + 'invoice.pdf',
          content: options.attachments,
          encoding: 'base64',
        },
      ],
    };

    const info = await transporter.sendMail(mailOPtion);
    if (info) {
      console.log(info);
      return info;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
