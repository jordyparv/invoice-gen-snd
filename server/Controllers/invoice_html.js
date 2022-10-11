const html_to_pdf = require('html-pdf-node');
//const fs = require('fs');
const { sendEmail } = require('../utils/sendemail');
exports.html_to_pdf = async (req, res) => {
  // Example of options with args //
  // let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };
  const options = { format: 'A4' };

  try {
    if (req.body.htmlCode.length>5) {
      const htmlCode = req.body.htmlCode;
      let file = { content: htmlCode };

      const pdf_buffer = await html_to_pdf.generatePdf(file, options);
      // sendEmail(pdf_buffer);
      res.send({ pdf_buffer: pdf_buffer.toString() });
    }
  } catch (error) {
    res.status(404).send('provide valid html code');
    console.log(error.message);
  }

  // or //
  // //let file = { url: 'https://example.com' };
  //fs.writeFileSync('pdf_buffer.txt', pdfBuffer);
};
