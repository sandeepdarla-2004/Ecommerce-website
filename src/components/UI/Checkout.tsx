import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [billingSame, setBillingSame] = useState(true);
  const [agree, setAgree] = useState(false);
  const [delivery, setDelivery] = useState('standard');
  const [payment, setPayment] = useState('card');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [promo, setPromo] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoMsg, setPromoMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Read cart from localStorage
    const cart = localStorage.getItem('cart');
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = delivery === 'express' ? 149 : 0;
  const promoDiscount = discount > 0 ? Math.round(subtotal * discount) : 0;
  const total = subtotal - promoDiscount + shipping;

  const handleEditCart = () => {
    navigate('/cart');
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promo.trim().toUpperCase() === 'SAVE10') {
      setDiscount(0.10);
      setPromoMsg('Promo code applied! 10% discount.');
    } else {
      setDiscount(0);
      setPromoMsg('Invalid promo code.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center py-12 px-2">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-black/10">
        <h1 className="text-3xl font-bold mb-8 text-center">🛒 Checkout</h1>
        {/* 1. Shipping Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">📦 Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border border-black/20 rounded px-3 py-2" placeholder="Full Name" />
            <input className="border border-black/20 rounded px-3 py-2" placeholder="Phone Number" />
            <input className="border border-black/20 rounded px-3 py-2 md:col-span-2" placeholder="Email Address" />
            <input className="border border-black/20 rounded px-3 py-2 md:col-span-2" placeholder="Shipping Address" />
            <input className="border border-black/20 rounded px-3 py-2" placeholder="City" />
            <input className="border border-black/20 rounded px-3 py-2" placeholder="State / Province" />
            <input className="border border-black/20 rounded px-3 py-2" placeholder="Postal Code" />
            <input className="border border-black/20 rounded px-3 py-2" placeholder="Country" />
          </div>
          <label className="flex items-center mt-4 text-sm">
            <input type="checkbox" checked={billingSame} onChange={() => setBillingSame(!billingSame)} className="mr-2" />
            Billing address is same as shipping
          </label>
        </section>
        {/* 2. Billing Information */}
        {!billingSame && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">🧾 Billing Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border border-black/20 rounded px-3 py-2 md:col-span-2" placeholder="Full Name" />
              <input className="border border-black/20 rounded px-3 py-2 md:col-span-2" placeholder="Billing Address" />
              <input className="border border-black/20 rounded px-3 py-2" placeholder="City" />
              <input className="border border-black/20 rounded px-3 py-2" placeholder="State / Province" />
              <input className="border border-black/20 rounded px-3 py-2" placeholder="Postal Code" />
              <input className="border border-black/20 rounded px-3 py-2" placeholder="Country" />
            </div>
          </section>
        )}
        {/* 3. Delivery Method */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">🚚 Delivery Method</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="delivery" value="express" checked={delivery === 'express'} onChange={() => setDelivery('express')} />
              🚀 Express Delivery (1-3 Days) – ₹149
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="delivery" value="standard" checked={delivery === 'standard'} onChange={() => setDelivery('standard')} />
              📦 Standard Delivery (4-7 Days) – Free
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="delivery" value="pickup" checked={delivery === 'pickup'} onChange={() => setDelivery('pickup')} />
              🏪 Store Pickup – Free
            </label>
          </div>
        </section>
        {/* 4. Payment Method */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">�� Payment Method</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" value="card" checked={payment === 'card'} onChange={() => setPayment('card')} />
              💳 Credit/Debit Card
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" value="upi" checked={payment === 'upi'} onChange={() => setPayment('upi')} />
              🏦 UPI / Net Banking
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" value="wallet" checked={payment === 'wallet'} onChange={() => setPayment('wallet')} />
              📱 Wallets (Paytm, PhonePe, Google Pay)
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" value="cod" checked={payment === 'cod'} onChange={() => setPayment('cod')} />
              💵 Cash on Delivery (Available for select locations)
            </label>
          </div>
          <div className="flex items-center gap-2 mt-4 text-xs text-gray-700">
            <span className="text-lg">🔒</span> 100% Secure & Encrypted Checkout
          </div>
        </section>
        {/* 5. Order Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">🧺 Order Summary</h2>
          <div className="border border-black/10 rounded mb-4">
            <div className="flex justify-between px-4 py-2 border-b border-black/10">
              <span>Item</span>
              <span>Quantity</span>
              <span>Price</span>
            </div>
            {cartItems.map((item, idx) => (
              <div className="flex justify-between px-4 py-2" key={idx}>
                <span>{item.product.name}</span>
                <span>{item.quantity}</span>
                <span>₹{(item.product.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between px-4 py-1 text-sm">
            <span>Subtotal:</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between px-4 py-1 text-sm text-green-700 font-semibold">
              <span>Promo Discount:</span>
              <span>-₹{promoDiscount.toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between px-4 py-1 text-sm">
            <span>Shipping:</span>
            <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
          </div>
          <div className="flex justify-between px-4 py-2 font-bold border-t border-black/10">
            <span>Total:</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between px-4 py-2">
            <button className="underline text-sm" onClick={handleEditCart}>Edit Cart</button>
            <form className="flex items-center space-x-2" onSubmit={handleApplyPromo}>
              <input
                type="text"
                value={promo}
                onChange={e => setPromo(e.target.value)}
                placeholder="Promo Code"
                className="border border-black/20 rounded px-2 py-1 text-sm"
              />
              <button type="submit" className="bg-black text-white px-2 py-1 rounded text-xs font-semibold">Apply</button>
            </form>
          </div>
          {promoMsg && <div className={`px-4 pb-2 text-xs ${discount > 0 ? 'text-green-700' : 'text-red-600'}`}>{promoMsg}</div>}
        </section>
        {/* Confirm Order */}
        <section className="mb-4">
          <label className="flex items-center text-sm">
            <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} className="mr-2" />
            I agree to the Terms & Conditions and Refund Policy
          </label>
        </section>
        <button
          className="w-full bg-black text-white py-3 rounded font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50"
          disabled={!agree}
        >
          Place Order <span>🔒</span>
        </button>
        <p className="text-xs text-gray-500 mt-4 text-center">
          By placing your order, you’ll receive a confirmation email and order tracking details.
        </p>
      </div>
    </div>
  );
};

export default Checkout; 