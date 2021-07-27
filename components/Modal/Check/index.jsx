import React, { useCallback } from 'react';
import {
  Modal,
  ModalBtn,
  OKBtn,
  NoBtn,
  ModalWrapper,
  MainText,
  SubText,
  Container,
} from '@components/Modal/Check/styles';
import axios from 'axios';
import { Link, Redirect, useHistory } from 'react-router-dom';

const Check = ({ checkModalOpen, setCheckModalOpen, Id, userId }) => {
  // console.log({ checkModalOpen });
  // console.log(Id);
  const history = useHistory();

  const Delete = useCallback(
    (e) => {
      axios
        .delete(`/api/users/discussions/del/${Id}?userId=${userId}`, {
          withCredentials: true,
        })
        .then((res) => {
          history.push('/discussion');
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    [Id, userId], // 넣어줘야함
  );

  return (
    <>
      <Modal checkModal={checkModalOpen} />
      <Container checkModal={checkModalOpen}>
        <ModalWrapper
          onClick={() => {
            setCheckModalOpen(false);
          }}
        >
          <MainText>삭제하시겠습니까?</MainText>
          <SubText></SubText>
          <ModalBtn>
            <NoBtn
              onClick={() => {
                setCheckModalOpen(false);
              }}
            >
              취소하기
            </NoBtn>

            <OKBtn onClick={Delete}>삭제하기</OKBtn>
          </ModalBtn>
        </ModalWrapper>
      </Container>
    </>
  );
};

export default Check;
