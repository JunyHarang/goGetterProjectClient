import React, { useRef, useState, useCallback, useEffect } from 'react';
import NoteBox from '@components/NoteBox';
import { Container } from '@pages/Note/Content/styles';
import apiController from '@apis/apiController';
import SockJsClient from 'react-stomp';
import { useDispatch, useSelector } from 'react-redux';
import { insertPartner, insertMessage, receive } from '@reducers/conversation';

const Content = ({ userId }) => {
  const socketRef = useRef(null);
  let topics = ['/topic/' + userId];

  const [messages, setMessages] = useState([]);
  // const [memberList, setMemberList] = useState([]);

  const dispatch = useDispatch();

  const sendToMessage = (senderId, receiverId, roomId, msg) => {
    const params = {
      sender_id: senderId,
      receiver_id: receiverId,
      message_room_id: roomId,
      content: msg,
    };
    socketRef.current.sendMessage('/app/chat/send', JSON.stringify(params));
    dispatch(insertMessage(params));
  };

  const receiveMessage = (msg) => {
    console.log(msg);
    dispatch(receive(msg));
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
      <NoteBox userId={userId} sendToMessage={sendToMessage} />
      {/* <NoteBox userId={userId} /> */}
      {/* <Detail sendToMessage={sendToMessage} userId={userId} /> */}
    </Container>
  );
};

export default Content;
