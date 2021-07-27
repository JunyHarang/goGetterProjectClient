import React from 'react';
import { Container, Top, Bottom } from '@components/NoteBox/Member/styles';

const Member = () => {
  return (
    <div>
      <Container>
        <Top>
          <h5>닉네임</h5>
          <span>날짜</span>
        </Top>
        <Bottom>최근 쪽지</Bottom>
      </Container>
    </div>
  );
};

export default Member;
