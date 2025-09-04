import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">GlobalTech AI News</h1>
      <div>
        <button className="mr-2">Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
