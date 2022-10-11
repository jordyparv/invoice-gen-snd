import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../Spinner';
import { toast } from 'react-hot-toast';
const easyinvoice = window.easyinvoice;
export default function Invoice({ invoice_data, setLoading }) {
  useEffect(() => {
    async function get() {
      setLoading(true);
      try {
        const { data: result } = await axios.post(
          'api/generate-invoice/previewinvoice',
          { data: invoice_data }
        );
        //   const result = await easyinvoice.createInvoice(data);
        const elementId = 'pdf';
        await easyinvoice.render(elementId, result.data);
        setLoading(false);
        toast.success('Successfully created invoice');
      } catch (err) {
        //toast.error(err);
        setLoading(false);
        console.log(err.response.data.data);
      }
    }
    get();
  }, [invoice_data]);
  return (
    <div className='overflow-hidden'>
      {/* {isLoading && <Spinner />}{' '} */}
      <div id='pdf' className='flex w-full justify-center'></div>
    </div>
  );
}
