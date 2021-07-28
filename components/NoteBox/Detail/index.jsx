import React, { useCallback, useRef, useState } from 'react';
import { Container, Top } from '@components/NoteBox/Detail/styles';
import ChatBox from '@components/NoteBox/Detail/ChatBox';
import ChatList from '@components/NoteBox/Detail/ChatList';
import useInput from '@hooks/useInput';
import { useSelector } from 'react-redux';
// import SockJsClient from 'react-stomp';

const Detail = ({ sendToMessage, userId, partner, roomId, nickName }) => {
  const [chat, onChangeChat, setChat] = useInput('');

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log(chat);
      // 통신
      sendToMessage(userId, partner, roomId, chat);
      setChat('');
    },
    [userId, chat],
  );

  const receiveMessage = (msg) => {};

  return (
    <div>
      <Container>
        <Top>
          <h4>닉네임</h4>
        </Top>
        <ChatList />
        <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
      </Container>
    </div>
  );
};

export default Detail;
