import React, { useEffect, useCallback } from 'react';
import { Container } from '@components/NoteBox/styles';
import Member from '@components/NoteBox/Member';
import apiController from '@apis/apiController';
import { useSelector } from 'react-redux';
import { method } from 'lodash';

const NoteBox = () => {
  const userId = useSelector((state) => state.auth.user.user_id);
  const senderId = ['194'];

  // useEffect(() => {
  //   getConservationList();
  // }, []);

  // const getConservationList = useCallback(() => {
  //   apiController({
  //     url: `/users/chat/newChat?receiverId=${userId}&senderId=${senderId}`,
  //     method: 'get',
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // }, [userId, senderId]);

  return (
    <div>
      <Container>
        <h4>쪽지함</h4>
        <Member />
        <Member />
        <Member />
        <Member />
      </Container>
    </div>
  );
};

export default NoteBox;
