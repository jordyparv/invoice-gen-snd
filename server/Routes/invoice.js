const express = require('express');
const { makeinvoice, previewinvoice } = require('../Controllers/easyinvoice');
const { html_to_pdf } = require('../Controllers/invoice_html.js');
const router = express.Router();

router.post('/makeinvoice', makeinvoice);
router.post('/previewinvoice', previewinvoice);
router.post('/makehtml', html_to_pdf);

module.exports = router;
