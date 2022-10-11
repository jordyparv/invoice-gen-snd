// const html_to_pdf = require('html-pdf-node');
// const fs = require('fs');

// exports.html_to_pdf = async (htmlCode) => {
//   let options = { format: 'A4' };
//   // Example of options with args //
//   // let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

//   let file = { content: htmlCode };
//   // or //
//   // //let file = { url: 'https://example.com' };
//   //fs.writeFileSync('pdf_buffer.txt', pdfBuffer);
//   const pdf_buffer = await html_to_pdf.generatePdf(file, options);
//   return pdf_buffer;
// };
// // const mustache = require('mustache');
// // const fs = require('fs');

// // exports.html_to_pdf = async () => {
// //   //const page = fs.readFileSync('page.mustache').toString();
// //   //const data = JSON.parse(fs.readFileSync('data.json').toString());
// //   const page = '<center><h1 style="color:red">jordan</h1></center>';
// //   const outputHTML = mustache.render(page);
// //   console.log(outputHTML);
// //   return outputHTML;
// // };
