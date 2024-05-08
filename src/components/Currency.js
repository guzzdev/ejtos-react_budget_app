import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../index.css';

const Currency = (props) => {
    const { dispatch } = useContext(AppContext);
    // eslint-disable-next-line no-unused-vars
    const [currency, setCurrency] = useState('£');

    const handleCurrencyChange = (value) => {
        const updatedCurrency = value;
        setCurrency(updatedCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: updatedCurrency,
        });
    }

    return (
        <div className="">
        <select className="custom-select alert alert-success" id="currency" onChange={(event) => handleCurrencyChange(event.target.value)} style={{ marginLeft: '2rem' }}>
            <option defaultValue selected value="£" name="£">£ Pound</option>
            <option value="$" name="$">$ Dollar</option>
            <option value="€" name="€">€ Euro</option>
            <option value="₹" name="₹">₹ Ruppee</option>
        </select>
        </div>
    )
}

export default Currency