import React, { useState, useEffect } from 'react';

const ONE_HOUR = 60 * 60 * 1000;

const Login: React.FC = () => {
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirm, setSignupConfirm] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Auto-logout after 1 hour
  useEffect(() => {
    const creds = localStorage.getItem('sdshop_user');
    if (creds) {
      const { timestamp } = JSON.parse(creds);
      if (Date.now() - timestamp > ONE_HOUR) {
        localStorage.removeItem('sdshop_user');
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
      }
    }
  }, []);

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setError('Please enter both email and password.');
      return;
    }
    localStorage.setItem('sdshop_user', JSON.stringify({
      email: loginEmail,
      password: loginPassword,
      timestamp: Date.now(),
    }));
    setLoggedIn(true);
    setError('');
  };

  // Signup handler
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupName || !signupEmail || !signupPassword || !signupConfirm) {
      setError('Please fill all fields.');
      return;
    }
    if (signupPassword !== signupConfirm) {
      setError('Passwords do not match.');
      return;
    }
    localStorage.setItem('sdshop_user', JSON.stringify({
      name: signupName,
      email: signupEmail,
      password: signupPassword,
      timestamp: Date.now(),
    }));
    setLoggedIn(true);
    setError('');
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('sdshop_user');
    setLoggedIn(false);
    setLoginEmail('');
    setLoginPassword('');
  };

  if (loggedIn) {
    const creds = JSON.parse(localStorage.getItem('sdshop_user') || '{}');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="mb-6 flex justify-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SDShop</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">Welcome, {creds.name || creds.email}!</h2>
          <button onClick={handleLogout} className="bg-red-500 text-white px-6 py-2 rounded font-semibold hover:bg-red-600 transition">Log Out</button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: `url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="mb-6 flex justify-center">
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SDShop</span>
        </div>
        <div className="flex mb-8 border-b">
          <button
            className={`flex-1 py-2 font-semibold ${tab === 'login' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => { setTab('login'); setError(''); }}
          >
            Log In
          </button>
          <button
            className={`flex-1 py-2 font-semibold ${tab === 'signup' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => { setTab('signup'); setError(''); }}
          >
            Sign Up
          </button>
        </div>
        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
        {tab === 'login' ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              className="w-full border rounded px-3 py-2"
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={e => setLoginEmail(e.target.value)}
            />
            <input
              className="w-full border rounded px-3 py-2"
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={e => setLoginPassword(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition w-full">Log In</button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              className="w-full border rounded px-3 py-2"
              type="text"
              placeholder="Name"
              value={signupName}
              onChange={e => setSignupName(e.target.value)}
            />
            <input
              className="w-full border rounded px-3 py-2"
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={e => setSignupEmail(e.target.value)}
            />
            <input
              className="w-full border rounded px-3 py-2"
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={e => setSignupPassword(e.target.value)}
            />
            <input
              className="w-full border rounded px-3 py-2"
              type="password"
              placeholder="Confirm Password"
              value={signupConfirm}
              onChange={e => setSignupConfirm(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition w-full">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login; 