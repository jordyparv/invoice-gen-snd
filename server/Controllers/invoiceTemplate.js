const express = require('express');
const invoiceModel = require('../Models/invoiceTemplate');
const invoiceTemplate = require('../Models/invoice');

exports.invoiceTemplate = async (req, res) => {
  const { data, id } = req.body;
  console.log(id);
  try {
    if (!invoiceModel.find()) {
      const invoice_template = await invoiceModel.create(data);
    } else {
      const invoice_template = await invoiceModel.updateOne({ id }, data);
    }
    res.status(200).json({ data: 'Logo is updated' });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ data: 'failed' });
  }
};
exports.getInvoiceTemplate = async (req, res) => {
  try {
    const invoice = await invoiceModel.findOne();
    const template = await invoiceModel.findOne();
    res.status(200).json({ template });
  } catch (error) {
    res.status(404).json({ data: 'something went wrong' });
    console.log(error.message);
  }
};
exports.invoiceUpdateTemplate = async (req, res) => {
  const { data, id, user } = req.body;

  try {
    if (data || id || user)
      if (!(await invoiceTemplate.findOne())) {
        const invoice_template = await invoiceTemplate.create(data);
        console.log(invoice_template);
      } else {
        const invoice_template = await invoiceTemplate.updateOne({ id }, data);
        console.log('__', invoice_template);
      }
    else return res.status(404).json({ data: 'input field not found' });
    res.status(200).json({ data: 'updated please refresh the page' });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ data: error.message });
  }
};
