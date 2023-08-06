import React from 'react'
import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="row" style={{display: 'flex', alignItems: 'center', height: '8rem'}}>
      <div className='col-md-6 company' style={{display: 'flex', alignItems: 'center', }} onClick={()=> navigate('/')}>
        <img src={logo} alt="logo" className="logo" style={{height: "80px",}}/>
        <h1 >Globalmantics</h1>
      </div>
      <div className='col-md-6 subtitle'>
        Providing houses all over the world
      </div>
    </header>
  )
}
export default Header
