import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, Content } from '@pages/Note/styles';
import NoteBox from '@components/NoteBox';
import Detail from '@components/NoteBox/Detail';

const Note = () => {
  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <Content>
          <NoteBox />
          <Detail />
        </Content>
      </Container>
      <Footer />
    </div>
  );
};

export default Note;
