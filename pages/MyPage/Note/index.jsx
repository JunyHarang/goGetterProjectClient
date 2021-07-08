import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import Tab from '@components/Tab';
import { Container, AllDiv, ContentDiv } from '@pages/MyPage/Note/styles';

const MyPageNote = () => {
  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <AllDiv>
          <Tab />
          <ContentDiv></ContentDiv>
        </AllDiv>
      </Container>
      <Footer />
    </div>
  );
};

export default MyPageNote;
