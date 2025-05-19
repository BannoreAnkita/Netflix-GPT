import React from 'react';
import { LOGO_URL } from '../constants/constant';

const Header = () => {
  return (
    <div>
      <div className='absolute w-55 bg-gradient-to-b'><img alt="logo" className="w-100" src={LOGO_URL}/></div>
    </div>
  )
}

export default Header