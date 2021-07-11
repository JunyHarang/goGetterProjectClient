import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import EventWriteForm from '@components/EventWriteForm';
import { Container, DCContainer } from '@pages/Discussion/DCWrite/styles';

const EventWrite = () => {
  return (
    <div style={{ height: '100%' }}>
      <DCContainer>
        <Header />
        <Container>
          <EventWriteForm />
        </Container>
      </DCContainer>
      <Footer />
    </div>
  );
};

export default EventWrite;
