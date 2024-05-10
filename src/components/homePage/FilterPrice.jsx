import React from 'react';
import { useForm } from 'react-hook-form';
import './styles/filterPrice.css';

const FilterPrice = ({setProdPrice}) => {

    const {handleSubmit, register, reset} = useForm();

    const submit = data => {
        setProdPrice({
            from: data.from || 0,
            to: data.to || Infinity,
        });
        reset({
            from: '',
            to: '',
        });
    }

  return (
    <form className='filterprice' onSubmit={handleSubmit(submit)}>
        <div className='filterprice__item'>
            <label htmlFor="from">From</label>
            <input {...register('from')} id='from' type="text" placeholder='price from...'/>
        </div>
        <div className='filterprice__item'>
            <label htmlFor="to">To</label>
            <input {...register('to')} id='to' type="text" placeholder='price up...' />
        </div>
        <button className='filterprice__btn'>Filter Price</button>
    </form>
  )
}

export default FilterPrice;