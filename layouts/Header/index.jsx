import React from 'react';
import { Head, Head2, HeaderTop } from '@layouts/Header/styles';
import Navbar from '@layouts/Header/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Head2>
      <Head>
        <HeaderTop>
          <Link to="/">우도독</Link>
        </HeaderTop>
        <Navbar />
      </Head>
    </Head2>
  );
};

export default Header;
