const express = require('express');
const {
  invoiceTemplate,
  getInvoiceTemplate,
  invoiceUpdateTemplate,
} = require('../Controllers/invoiceTemplate.js');
const router = express.Router();

router.put('/update-invoice-template', invoiceTemplate);
router.get('/getinvoice-template', getInvoiceTemplate);
router.put('/updateinvoice-template', invoiceUpdateTemplate);

module.exports = router;
