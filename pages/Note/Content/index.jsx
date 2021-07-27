import React, { useRef, useState } from 'react';
import NoteBox from '@components/NoteBox';
import Detail from '@components/NoteBox/Detail';
import { Container } from '@pages/Note/Content/styles';
import SockJsClient from 'react-stomp';

const Content = ({ userId }) => {
  const socketRef = useRef(null);
  let topics = ['/topic/' + userId];

  const [messages, setMessages] = useState([]);

  const sendToMessage = (senderId, roomId, msg) => {
    const params = {
      sender_id: senderId,
      message_room_id: roomId,
      content: msg,
    };
    console.log(socketRef);
    socketRef.current.sendMessage('/app/chat/send', JSON.stringify(params));
  };

  const receiveMessage = (msg) => {
    console.log(msg);
    setMessages(messages.concat(msg));
  };

  return (
    <Container>
      <SockJsClient
        url="/chat"
        topics={topics}
        onConnect={() => console.log('onConnect')}
        onDisconnect={() => console.log('onDisconnect')}
        onMessage={(msg) => receiveMessage(msg)}
        ref={socketRef}
      />
      <NoteBox />
      <Detail sendToMessage={sendToMessage} userId={userId} />
    </Container>
  );
};

export default Content;
