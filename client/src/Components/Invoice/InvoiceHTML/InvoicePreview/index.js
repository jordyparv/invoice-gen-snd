import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../../Spinner';
import { Document, Page } from 'react-pdf';
import toast from 'react-hot-toast';
export default function InvoicePreview({ htmlCode, fetch }) {
  const [pdfBuffer, setPdfBuffer] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    try {
      async function get() {
        const { data: result } = await axios.post(
          'api/generate-invoice/makehtml',
          { htmlCode: htmlCode.toString() }
        );

        setPdfBuffer(result.pdf_buffer);
        setLoading(false);
        toast.success('data fetched');
      }
      if (htmlCode.length > 5) {
        get();
      } else {
        setLoading(false);
        toast.error('Provide valid htmlCode');
      }
    } catch (error) {
      console.log(error.messsage);
      setLoading(false);
      toast.error('something went wrong');
    }
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {isLoading && <Spinner />}
      <Document file={pdfBuffer} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
