import React, { useState, useCallback } from 'react';
import { Containers, Container, ReplyDiv } from '@components/Reply/styles';
import { ReplyWriteForm } from '@components/ShareBoardReply/styles';
import ReplyComment from '@components/ReplyComment';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ShareBoardReply = (props) => {
  // const userId = useSelector((state) => state.auth.user.user_id);
  const state = useSelector((state) => state.auth);
  let userId = -1;
  const boardId = props.boardId;
  const [replyContent, onChangeReplyContent] = useInput('');

  if (state.user !== null) {
    userId = state.user.user_id;
  }

  // console.log(props, boardId, userId);

  const onSubmit = useCallback(
    (e) => {
      // e.preventDefault();
      axios
        .post(
          `/api/user/sharing-reply?boardId=${boardId}`,
          { comment: replyContent, user_id: userId },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    [replyContent, boardId],
  );

  return (
    <div>
      <Containers>
        <Container>
          <div>
            <span style={{ fontSize: '1.2rem' }}>전체 댓글 {props.replyCnt}</span>
          </div>
          <ReplyDiv>
            {/* {reply?.map((item, idx) => {
          return <ReplyItem key={idx} item={item} discussionId={discussionId} currentId={currentId} />;
        })} */}
            {props.reply &&
              props.reply.map((item, index) => (
                <React.Fragment key={index}>
                  <ReplyComment
                    comment={item.comment}
                    create={item.created_at}
                    replyId={item.reply_id}
                    writer={item.writer_info.nick_name}
                    profileUrl={item.writer_info.profile_url}
                  />
                </React.Fragment>
              ))}
          </ReplyDiv>
          <span style={{ fontSize: '1.2rem' }}>댓글</span>
          <ReplyWriteForm onSubmit={onSubmit}>
            <textarea id="text" type="text" value={replyContent} onChange={onChangeReplyContent}></textarea>
            <button type="submit">등록</button>
          </ReplyWriteForm>
        </Container>
      </Containers>
    </div>
  );
};

export default ShareBoardReply;
