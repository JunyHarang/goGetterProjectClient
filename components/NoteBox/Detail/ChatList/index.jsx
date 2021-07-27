import React from 'react';
import { ChatZone } from '@components/NoteBox/Detail/ChatList/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Chat from '@components/NoteBox/Detail/Chat';

const ChatList = () => {
  return (
    <ChatZone>
      <Scrollbars autoHide>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
