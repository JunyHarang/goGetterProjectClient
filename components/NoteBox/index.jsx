import React from 'react';
import { Container } from '@components/NoteBox/styles';
import Member from '@components/NoteBox/Member';

const NoteBox = () => {
  return (
    <div>
      <Container>
        <h4>쪽지함</h4>
        <Member />
        <Member />
        <Member />
        <Member />
      </Container>
    </div>
  );
};

export default NoteBox;
