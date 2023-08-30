import React from 'react';

function Header() {
  return (
    <header className='navbar'>
      <a href='/'>DEV@Deakin</a>
      <input type='text' placeholder='Search..' />
      <nav className='right'>
        <a href='#post'>Post</a>
        <a href='#contact'>Login</a>
      </nav>
    </header>
  );
}

export default Header;
