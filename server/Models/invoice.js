const mongoose = require('mongoose');
const invoiceSchema = mongoose.Schema({
  sender_company: String,
  item_list: [
    {
      name: String,
      qty: Number,
      price: Number,
      total: Number,
      tax: Number,
      id: Number,
    },
  ],
  send_address: String,
  sender_zip: Number,
  sender_city: String,
  sender_country: String,
  currency: String,
  tax_notation: String,
  note_message: String,
  create_time: {
    type: Date,
    default: Date(),
  },
  update_time: Date,
});
module.exports = mongoose.model('invoices', invoiceSchema);
