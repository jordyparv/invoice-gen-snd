import React, { useState, memo } from 'react';
import { toast } from 'react-hot-toast';
function Items({ setItemList, itemList }) {
  const handleInputValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setItemList((prev) => {
      const tmp = { ...prev, [name]: value };
      // prettier-ignore
      return {
        ...tmp,
        total: parseFloat(tmp.price * tmp.qty) + parseFloat((tmp.price*tmp.qty) * (tmp.tax / 100)),
      };
    });
  };

  return (
    <div className='my-4 flex flex-col gap-1 rounded-lg px-2 bg-slate-100'>
      <div className='my-4 flex justify-between'>
        <label htmlFor='age' className='mb-2 font-semibold'>
          Item
        </label>
        <textarea
          id='item'
          value={itemList.name}
          name='name'
          className='w-1/2 rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40'
          onChange={handleInputValue}
        ></textarea>
      </div>
      <div className='mb-4 flex justify-between'>
        <label htmlFor='age' className='mb-2 font-semibold'>
          Qty
        </label>
        <input
          type='number'
          id='qty'
          name='qty'
          value={itemList.qty}
          className='w-1/2 rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40'
          onChange={handleInputValue}
        />
      </div>
      <div className='mb-4 flex justify-between'>
        <label htmlFor='age' className='mb-2 font-semibold'>
          Unit Price
        </label>
        <input
          type='number'
          name='price'
          value={itemList.price}
          className='w-1/2 rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40'
          onChange={handleInputValue}
        />
      </div>
      <div className='mb-4 flex justify-between'>
        <label htmlFor='age' className='mb-2 font-semibold'>
          tax
        </label>
        <input
          type='number'
          name='tax'
          value={itemList.tax}
          className='w-1/2 rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40'
          onChange={handleInputValue}
        />
      </div>
      <div className='mb-4 flex justify-between'>
        <label htmlFor='age' className='mb-2 font-semibold'>
          Total
        </label>
        <input
          type='number'
          name='total'
          id='total'
          value={itemList.total}
          onChange={() => ''}
          className='w-1/2 rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40'
        />
      </div>
    </div>
  );
}
export default memo(Items);
