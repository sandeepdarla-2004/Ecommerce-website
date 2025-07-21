import React from 'react';

const Contact: React.FC = () => (
  <div className="max-w-2xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
    <p className="text-lg text-gray-700 mb-6">
      We’re here to help you with your shopping experience. Whether you have a question, feedback, or need support—feel free to reach out to us anytime.
    </p>

    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">📞 Customer Support</h2>
      <ul className="text-gray-700 mb-2">
        <li>Email: support@sdshop.com</li>
        <li>Phone: +91-XXXXXXXXXX</li>
        <li>Hours: Monday – Saturday, 9:00 AM to 6:00 PM (IST)</li>
        <li>Live Chat: Available on our website during business hours</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">📝 Get in Touch</h2>
      <p className="mb-4 text-gray-600">Fill out the form below, and our team will get back to you within 24 hours.</p>
      {/* Contact Form Placeholder */}
      <form className="space-y-4">
        <input className="w-full border rounded px-3 py-2" type="text" placeholder="Name" />
        <input className="w-full border rounded px-3 py-2" type="email" placeholder="Email" />
        <input className="w-full border rounded px-3 py-2" type="text" placeholder="Subject" />
        <textarea className="w-full border rounded px-3 py-2" placeholder="Message" rows={4}></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">Submit</button>
      </form>
    </div>

    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">📍 Visit Our Office</h2>
      <address className="not-italic text-gray-700">
        SDShop<br />
        123, E-Commerce Street,<br />
        Bangalore, Karnataka, 560001<br />
        India
      </address>
    </div>

    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">🌐 Follow Us on Social Media</h2>
      <ul className="text-gray-700">
        <li>📸 Instagram: <a href="#" className="text-blue-600 hover:underline">@sdshop</a></li>
        <li>👍 Facebook: <a href="#" className="text-blue-600 hover:underline">SDShop</a></li>
        <li>🐦 Twitter: <a href="#" className="text-blue-600 hover:underline">@sdshop</a></li>
      </ul>
    </div>

    <div>
      <h2 className="text-xl font-semibold mb-2">🙋 Frequently Asked Questions</h2>
      <p className="text-gray-600">Check our FAQs for quick answers about shipping, returns, and more.</p>
    </div>
  </div>
);

export default Contact; 