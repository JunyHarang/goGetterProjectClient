import React from 'react';
import { Container, Top, Bottom } from '@components/NoteBox/Detail/Message/styles';

const Message = () => {
  return (
    <div>
      <Container>
        <Top>
          <h5 style={{ color: 'green' }}>받은 쪽지</h5>
          <span>날짜</span>
        </Top>
        <Bottom>최근 쪽지</Bottom>
      </Container>
    </div>
  );
};

export default Message;
