import React, { useEffect, useCallback, useState } from 'react';
import { Container, Content } from '@components/NoteBox/styles';
import Member from '@components/NoteBox/Member';
import Detail from '@components/NoteBox/Detail';
import apiController from '@apis/apiController';
import { useSelector, useDispatch } from 'react-redux';
import { insertPartner, insertMessage, receive } from '@reducers/conversation';

const NoteBox = ({ userId, sendToMessage }) => {
  const conversationList = useSelector((state) => state.conversation);

  const [memberList, setMemberList] = useState([]);
  const [partner, setPartner] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [nickName, setNickName] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    getConversations();
  }, []);

  const getConversations = useCallback(() => {
    apiController({
      url: `/users/chats/${userId}`,
      method: 'get',
    }).then((res) => {
      if (res.data.message === '조회성공') {
        console.log(res.data.data);
        setMemberList(res.data.data);
        for (const key in res.data.data) {
          dispatch(
            insertPartner({
              partner: res.data.data[key].the_other_user_id,
              list: [res.data.data[key]],
            }),
          );
        }
      }
    });
  }, [userId]);

  const onClickMember = useCallback((partner, roomId, nickName) => {
    console.log(partner, roomId, nickName);
    setPartner(partner);
    setRoomId(roomId);
    setNickName(nickName);
  }, []);

  return (
    <div>
      <Container>
        <Content>
          <h4>채팅목록</h4>
          {/* {memberList?.map((data, index) => (
            <React.Fragment key={index}>
              <Member data={data} />
            </React.Fragment>
          ))} */}
          {Object.keys(conversationList).map((key) => (
            <Member
              key={key}
              partner={key}
              host={userId}
              onClickMember={onClickMember}
              roomId={conversationList[key][0].message_room_id}
              nickName={conversationList[key][0].nick_name}
            />
          ))}
        </Content>
        <Detail sendToMessage={sendToMessage} userId={userId} partner={partner} roomId={roomId} nickName={nickName} />
      </Container>
    </div>
  );
};

export default NoteBox;
