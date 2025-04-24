import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <div>
      <NavLink to={"/"} ><li>Home</li> </NavLink >
      <NavLink to={"/my-booking"} ><li>booking</li> </NavLink >
      <NavLink to={"/blog"} ><li>blog</li> </NavLink >
      <NavLink to={"/pagenotfound"} ><li>contact</li> </NavLink >
    </div>
  );
};

export default Header;