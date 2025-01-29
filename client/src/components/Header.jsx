import React from 'react';

function Header({ onLogoClick }) {
  return (
    <div className="flex items-center space-x-4 mb-6 cursor-pointer" onClick={onLogoClick}>
      <img src="/logo.png" alt="Logo" className="h-12 w-12" />
      <h1 className="text-3xl font-bold">PVC Store</h1>
    </div>
  );
}

export default Header;