import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, AllDiv, ContentDiv } from '@pages/Note/styles';

const Note = () => {
  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <AllDiv>
          <ContentDiv></ContentDiv>
        </AllDiv>
      </Container>
      <Footer />
    </div>
  );
};

export default Note;
