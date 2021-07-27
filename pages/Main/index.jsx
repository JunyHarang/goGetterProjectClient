import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, Content } from '@pages/Main/styles';

const Main = () => {
  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <Content>
          <img src="/images/udodok.png" alt="" />
          <div></div>
        </Content>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
