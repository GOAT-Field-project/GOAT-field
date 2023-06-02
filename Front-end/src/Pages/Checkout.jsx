import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [email, setEmail] = useState('');

  const handleExpirationChange = (e) => {
    const value = e.target.value;
    if (value.length <= 7) {
      if (
        value.length === 2 &&
        expirationDate.length === 1 &&
        !value.includes('/')
      ) {
        setExpirationDate(value + '/');
      } else if (
        value.length === 2 &&
        expirationDate.length === 3 &&
        value.endsWith('/')
      ) {
        setExpirationDate(value.slice(0, 1));
      } else {
        setExpirationDate(value);
      }
    }
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    const formattedValue = value.replace(/[^\d]/g, '').slice(0, 16);
    const spacedValue = formattedValue.replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(spacedValue);
  };

  const handleSecurityCodeChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,3}$/.test(value)) {
      setSecurityCode(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payInfo = {
      card_number: cardNumber.replace(/\s/g, ''), // Remove whitespace from cardNumber
      expiration_date: expirationDate,
      security_code: securityCode,
      name_on_card: nameOnCard,
      email: email,
    };
    try {
      const response = await axios.post('http://localhost:5151/pay', payInfo);
      console.log('Payment successful', response.data);
      Swal.fire({
        icon: 'success',
        title: 'Payment successful',
        showConfirmButton: false,
        timer: 1500
      });
      setCardNumber('');
      setExpirationDate('');
      setSecurityCode('');
      setNameOnCard('');
      setEmail('');

      window.location = "/";

    } catch (error) {
      console.error('Payment failed', error);
    }
  };



  return (
    <div className="relative mx-auto w-full bg-white">
      <div className="grid min-h-screen grid-cols-10">
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
              Secure Checkout
              <span className="mt-2 block h-1 w-10 bg-[#54B435] sm:w-20" />
            </h1>
            <form
              onSubmit={handleSubmit}
              action="http://localhost:3000/pay"
              className="mt-10 flex flex-col space-y-4"
            >
              <div>
                <label htmlFor="email" className="text-xs font-semibold text-gray-500">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.capler@fang.com"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="card-number" className="text-xs font-semibold text-gray-500">
                  Card number
                </label>
                <input
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  maxLength="19"
                  required
                />
              </div>
              <div className="grid grid-cols-6 gap-2">
                <div className="col-span-3">
                  <label htmlFor="expiration-date" className="text-xs font-semibold text-gray-500">
                    Expiration date
                  </label>
                  <input
                    value={expirationDate}
                    onChange={handleExpirationChange}
                    type="text"
                    id="expiration-date"
                    name="expiration-date"
                    placeholder="MM/YY"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    maxLength="5"
                    required
                  />
                </div>
                <div className="col-span-3">
                  <label htmlFor="security-code" className="text-xs font-semibold text-gray-500">
                    Security code
                  </label>
                  <input
                    value={securityCode}
                    onChange={handleSecurityCodeChange}
                    type="text"
                    id="security-code"
                    name="security-code"
                    placeholder="123"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    maxLength="3"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="name-on-card" className="text-xs font-semibold text-gray-500">
                  Name on card
                </label>
                <input
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  type="text"
                  id="name-on-card"
                  name="name-on-card"
                  placeholder="John Capler"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-6 px-4 py-2 rounded bg-[#54B435] text-white font-medium hover:bg-[#419331] transition"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-full bg-[#54B435] py-12 px-4 sm:py-24 sm:px-12 lg:col-span-4">
          <div className="flex flex-col justify-between h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white">Order Summary</h2>
              <div className="mt-4 bg-white rounded-md p-4">
                {/* Order summary content */}
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-white">
                By clicking the "Pay Now" button, you agree to our{' '}
                <a href="#" className="underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
