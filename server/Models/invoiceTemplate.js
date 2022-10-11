const mongoose = require('mongoose');

const invoiceTemplate = mongoose.Schema({
  name: String,
  base64: String,
  uploaded_date: Date,
  created_date: {
    type: Date,
    default: Date(),
  },
});
module.exports = mongoose.model('invoiceTemplate', invoiceTemplate);
