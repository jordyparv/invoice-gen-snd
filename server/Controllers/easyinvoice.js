// Import the library into your project
const easyinvoice = require('easyinvoice');
const { generateTemplate } = require('../utils/invoice_formatter');
const { sendEmail } = require('../utils/sendemail');

const User = require('../Models/User');

//const fs = require('fs');
// Create your invoice! Easy!

const generateInvoice = async (data) => {
  const result = await easyinvoice.createInvoice(data);
  //await fs.writeFileSync('invoice.pdf', result.pdf, 'base64');
  return result;
};

exports.makeinvoice = async (req, res) => {
  const { data, user, mailOptions } = req.body;

  try {
    if (Object.entries(data).length !== 0) {
      const _user = await User.findById(user._id);

      if (
        _user.sent_count > _user.email_send_limit &&
        _user.email_send_limit != 0
      ) {
        return res
          .status(202)
          .json({ data: 'your sending email limit exceeded' });
      }
      const result = await generateInvoice(
        generateTemplate({
          ...data,
          logo: data.logo,
        })
      );
      
      let email_options = {
        subject: mailOptions.subject,
        email_text: mailOptions.mail_text,
        email_html: mailOptions.mail_html,
        file_name: data.invoice_number,
        attachments: result.pdf,
      };
      if (_user.email_send_limit == 0) {
        email_options.email_to = mailOptions.to;
        email_options.bcc = mailOptions.bcc;
      } else {
        email_options.email_to = mailOptions.to;
        // .split(',')
        // .slice(0, _user.email_send_limit + 1 - _user.sent_count)
        // .join(',') || data.email_to;

        email_options.bcc = mailOptions.bcc;
        // .split(',')
        // .slice(0, _user.email_send_limit + 1 - _user.sent_count)
        // .join(',') || data.email_to;
      }
      // if ((await sendEmail(email_options)).accepted != undefined) {
      //   const updated_user = await User.updateOne(
      //     { _id: user._id },
      //     {
      //       sent_count: _user.sent_count + 1, //(data.email_to.split(',').length || 1),
      //     }
      //   );
      //   if (updated_user) {
      //     res.status(200).json({ data: 'Mail sent successfully' });
      //   } else {
      //     res
      //       .status(404)
      //       .json({ data: 'Mail sent successfully but failed to update db' });
      //   }
      // } else res.status(404).json({ data: 'Mail failed' });
    } else res.status(404).json({ data: 'invoice values are required' });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ data: 'something went wrong' });
  }
};
exports.previewinvoice = async (req, res) => {
  const { data } = req.body;

  try {
    if (Object.entries(data).length !== 0) {
      const result = await generateInvoice(
        generateTemplate({ ...data, logo: data.logo })
      );
      res.status(200).json({ data: result.pdf });
    } else res.status(404).json({ data: 'invoice values are required' });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ data: 'something went wrong' });
  }
};
