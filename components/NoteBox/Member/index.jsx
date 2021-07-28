import React from 'react';
import { Container, Top, Bottom } from '@components/NoteBox/Member/styles';
import { useSelector } from 'react-redux';

const Member = ({ partner, host, onClickMember, roomId, nickName }) => {
  const data = useSelector((state) => state.conversation[partner][state.conversation[partner].length - 1]);

  const sendMemberData = () => {
    onClickMember(partner, roomId, nickName);
  };

  return (
    <div>
      <Container onClick={sendMemberData}>
        <Top>
          <h5>{data.nick_name}</h5>
          <span>{data.send_at}</span>
        </Top>
        <Bottom>{data.content}</Bottom>
      </Container>
    </div>
  );
};

export default Member;
