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

const RecordDelete = (props) => {
  console.log(props);

  const onClickDelete = useCallback(
    (e) => {
      e.preventDefault();

      axios
        .delete(`/api/bkusers/book-reports/${props.boardId}?userId=${props.userId}`, {
          withCredentials: true,
        })
        .then((res) => {
          alert('삭제되었습니다.');
          props.setSuccessDelete(true);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    [props],
  );

  return (
    <>
      <Modal checkModal={props.deleteModalOpen} />
      <Container checkModal={props.deleteModalOpen}>
        <ModalWrapper>
          <MainText>삭제하시겠습니까?</MainText>
          <SubText></SubText>
          <ModalBtn>
            <NoBtn
              onClick={() => {
                props.setDeleteModalOpen(false);
              }}
            >
              취소하기
            </NoBtn>

            <OKBtn onClick={onClickDelete}>삭제하기</OKBtn>
          </ModalBtn>
        </ModalWrapper>
      </Container>
    </>
  );
};

export default RecordDelete;
