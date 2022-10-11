import React, { useState, useContext } from 'react';
import Items from './Items';
import { currencies } from 'currencies.json';
import { toast } from 'react-hot-toast';
import { UserContext } from '../../../Store/context';
import Popup from '../../Popup';
import InvoicePreview from '../InvoicePreview';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Mail from './Mail';
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

Date.prototype.toDateInputValue = function (props) {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};
function randomSixChar(str) {
  const min = 65,
    max = 122;

  const buffer = str.split('');
  let len = str.split('0').length;
  for (let i = 0; i < len; i++) {
    const rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    if (rnd > 90 && rnd < 97) {
      len++;
      continue;
    }
    const idx = buffer.indexOf('0');
    if (idx > 0) buffer[idx] = String.fromCharCode(rnd);
  }

  return buffer.join('');
}
function Invoice() {
  const initialitemList = {
    name: '',
    qty: 0,
    price: 0,
    total: 0,
    tax: 0,
  };
  const [itemCount, setItemCount] = useState(1);
  const [itemList, setItemList] = useState(initialitemList);
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);
  const [file, setFile] = useState('');
  let date = Date.parse(new Date());

  const user = useContext(UserContext);
  const [invoiceForm, setInvoiceForm] = useState({
    invoice_number: date,
    order_id: randomSixChar(date.toString()),
    dispatch_date: new Date().toDateInputValue(),
    note_message: '',
  });

  const handleFormInputs = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInvoiceForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSumbit = async (e) => {
    e.preventDefault();
    if (!file) return toast.error('Logo not selected');
    const base64Image = await getBase64(file);
    setInvoiceForm((prev) => ({
      ...prev,
      item_list: itemList,
      logo: base64Image,
    }));
    window.scroll(0, 0);
    setSend(true);
    // try {
    //   setIsLoading(true);
    //   const { data } = await axios.post('/api/generate-invoice/makeinvoice', {
    //     data: invoiceForm,
    //     user,
    //   });
    //   toast.success(data.data);
    //   setIsLoading(false);
    // } catch (err) {
    //   toast.error(err.response.data);
    //   console.log(err.response.data);
    // }
  };
  // const handleSave = async (e) => {
  //   e.preventDefault();
  //   setInvoiceForm((prev) => ({ ...prev, item_list: itemList }));
  //   try {
  //     const { data } = await axios.put(
  //       '/api/invoice-template/updateinvoice-template',
  //       {
  //         data: invoiceForm,
  //         user,
  //       }
  //     );
  //     toast.success(data.data);
  //   } catch (err) {
  //     console.log(err.response.data);
  //     toast.error(err.response.data.data);
  //   }
  // };
  const [show, setShow] = useState(false);
  const handlePreview = async (e) => {
    e.preventDefault();
    if (!file) return toast.error('Logo not selected');
    const base64Image = await getBase64(file);
    setInvoiceForm((prev) => ({
      ...prev,
      item_list: itemList,
      logo: base64Image,
    }));
    window.scroll(0, 0);
    setShow(true);
  };

  return (
    <main className='flex flex-col m-2 w-1/2'>
      {send && (
        <Popup show={send} setShow={setSend}>
          {loading && <ScaleLoader color='#36d7b7' loading={loading} />}
          <Mail
            invoiceForm={invoiceForm}
            send={send}
            setSend={setSend}
            user={user}
            setLoading={setLoading}
          />
        </Popup>
      )}
      {show && (
        <Popup show={show} setShow={setShow}>
          {loading && <ScaleLoader color='#36d7b7' loading={loading} />}
          <InvoicePreview invoice_data={invoiceForm} setLoading={setLoading} />
        </Popup>
      )}
      <form
        className=' rounded-xl bg-white p-4 shadow-2xl shadow-white/40 flex-col'
        onSubmit={handleFormSumbit}
        method='post'
      >
        <div className='border p-1 w-1/4'>
          <label
            htmlFor='upload'
            className='flex flex-col gap-2 cursor-pointer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10 fill-white stroke-indigo-500'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              />
            </svg>
            <span className='text-gray-600 font-medium'>
              Logo upload{' '}
              {file && (
                <span className='text-indigo-500 underline cursor-pointer'>
                  {file.name}
                </span>
              )}
            </span>
          </label>
          <input
            id='upload'
            type='file'
            className='hidden'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className='mb-4 grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='text' className='mb-2 font-semibold'>
              Company Name
            </label>
            <input
              type='text'
              id='text'
              name={'sender_company'}
              onChange={handleFormInputs}
              className='rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='text' className='mb-2 font-semibold'>
              Client Name
            </label>
            <input
              type='text'
              id='text'
              name={'sender_company'}
              onChange={handleFormInputs}
              className='rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40'
            />
          </div>
        </div>

        <h4 className='text-xl font-semibold text-gray-500'>Invoice details</h4>
        <div className='mb-4 grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='text' className='mb-2 font-semibold'>
              Date
            </label>
            <input
              type='date'
              id='text'
              name='dispatch_date'
              value={invoiceForm.dispatch_date}
              onChange={handleFormInputs}
              className='rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='text' className='mb-2 font-semibold'>
              Invoice Number
            </label>
            <input
              type='text'
              id='text'
              name='invoice_number'
              value={invoiceForm.invoice_number}
              onChange={handleFormInputs}
              className='rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40'
            />
          </div>
        </div>
        <div className='mb-4 grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='text' className='mb-2 font-semibold'>
              Order id
            </label>
            <input
              type='text'
              id='text'
              name='order_id'
              value={invoiceForm.order_id}
              onChange={handleFormInputs}
              className=' rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40'
            />
          </div>
        </div>

        <div className='mb-4 grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='text' className='mb-2 font-semibold'>
              Currency
            </label>
            <select
              id='text'
              name='currency'
              required
              onChange={handleFormInputs}
              className='rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40'
            >
              <option defaultValue='0' disabled>
                Select Currency
              </option>
              {currencies.map((item) => (
                <option key={item.code}>{item.code}</option>
              ))}
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='text' className='mb-2 font-semibold'>
              Tax
            </label>
            <select
              type='text'
              id='text'
              name='tax_notation'
              onChange={handleFormInputs}
              className=' rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40'
            >
              <option defaultValue={'vat'} disabled>
                Select tax
              </option>
              <option value={'vat'}>vat</option>
              <option value={'gst'}>gst</option>
            </select>
          </div>
        </div>
        <hr />

        <Items idx={1} key={1} itemList={itemList} setItemList={setItemList} />

        <div className='flex flex-col items-center'>
          <label htmlFor='privacy' className='mb-2 font-semibold'>
            Note Message
          </label>
          <textarea
            className='p-2 border rounded-md w-full'
            name='note_message'
            rows='10'
            onChange={handleFormInputs}
          ></textarea>

          <div className='flex mt-4 w-full justify-end'>
            <div className='flex gap-2 px-2 py-1'>
              <button
                className='px-4 py-2 bg-gray-600 text-white  rounded-md hover:bg-gray-700 transition-all'
                onClick={handlePreview}
              >
                Preview
              </button>
              {/* {    <button
                className='px-4 py-2 bg-blue-600 text-white  rounded-md hover:bg-blue-700 transition-all'
                onClick={() => alert('this functionality is under-development')}
              >
                Save
              </button>} */}
              <button
                className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all'
                type='submit'
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Invoice;
