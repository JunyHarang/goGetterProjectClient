import React, { memo, useMemo } from 'react';
import { ChatWrapper } from '@components/NoteBox/Detail/Chat/styles';

const Chat = () => {
  return (
    <ChatWrapper>
      <div className="chat-img">
        <img className="img"></img>
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>nickName</b>
          <span>시간</span>
        </div>
        <p>채팅내용</p>
      </div>
    </ChatWrapper>
  );
};

export default memo(Chat);
