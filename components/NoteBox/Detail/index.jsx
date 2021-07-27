import React from 'react';
import { Container, Top } from '@components/NoteBox/Detail/styles';
import Message from '@components/NoteBox/Detail/Message';

const Detail = () => {
  return (
    <div>
      <Container>
        <Top>
          <h4>닉네임</h4>
          <div>
            <i class="far fa-paper-plane fa-2x"></i>
            <i class="fas fa-redo-alt fa-2x"></i>
            <i class="far fa-trash-alt fa-2x"></i>
          </div>
        </Top>
        <Message />
      </Container>
    </div>
  );
};

export default Detail;
