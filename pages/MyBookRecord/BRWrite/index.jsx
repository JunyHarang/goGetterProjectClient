import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import RecordWriteForm from '@components/RecordWriteForm';
import { Container, BRContainer } from '@pages/MyBookRecord/BRWrite/styles';

const BRWrite = () => {
  return (
    <div style={{ height: '100%' }}>
      <BRContainer>
        <Header />
        <Container>
          <RecordWriteForm></RecordWriteForm>
        </Container>
      </BRContainer>
      <Footer />
    </div>
  );
};

export default BRWrite;
