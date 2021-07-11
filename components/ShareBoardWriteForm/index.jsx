import React, { useState, useCallback } from 'react';
import { Container, Form, WriteHeader, Input, TextArea, Button, FormDiv } from '@components/ShareBoardWriteForm/styles';
import { useSelector } from 'react-redux';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { Redirect } from 'react-router';

const ShareBoardWriteForm = (props) => {
  const [title, onChangeTitle] = useInput('');
  const [bookTitle, onChangeBookTitle] = useInput('');
  const [content, onChangeContent] = useInput('');
  const [tag, onChangeTag] = useInput('');

  const [createSuccess, setCreateSuccess] = useState(false);

  const userData = useSelector((state) => state.auth.user);
  const userId = userData.user_id;

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(title, bookTitle, content, tag, userId);

      if (!title.length || !title.trim().length) {
        alert('글 제목을 작성해주세요.');
      } else if (!bookTitle.length || !bookTitle.trim().length) {
        alert('책 제목을 작성해주세요.');
      } else if (!content.length || !content.trim().length) {
        alert('내용을 작성해주세요.');
      } else {
        axios
          .post(
            '/api/user/sharings',
            {
              book_title: bookTitle,
              content,
              sharing_board_tag: tag,
              title,
              user_id: userId,
            },
            {
              withCredentials: true,
            },
          )
          .then((res) => {
            console.log(res);
            alert('성공적으로 작성되었습니다.');
            setCreateSuccess(true);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    [title, bookTitle, content, tag, userId],
  );

  if (createSuccess) {
    return <Redirect to="/shareboard" />;
  }

  return (
    <div>
      <Container>
        <WriteHeader>게시글 작성</WriteHeader>
        <Form onSubmit={onSubmit}>
          <FormDiv>
            <div id="title">
              글 제목
              <Input
                id="title"
                name="title"
                placeholder="제목을 입력해주세요."
                value={title}
                onChange={onChangeTitle}
              />
            </div>
            <div id="book_title">
              책 제목
              <Input
                id="book_title"
                name="book_title"
                placeholder="제목을 입력해주세요."
                value={bookTitle}
                onChange={onChangeBookTitle}
              />
            </div>
            <div id="content">
              본문
              <TextArea
                id="content"
                name="content"
                placeholder="내용을 입력해주세요."
                value={content}
                onChange={onChangeContent}
              />
            </div>
            <div id="tag">
              태그
              <Input id="tag" name="tag" placeholder="#태그" value={tag} onChange={onChangeTag} />
            </div>
            <Button type="submit">작성하기</Button>
          </FormDiv>
        </Form>
      </Container>
    </div>
  );
};

export default ShareBoardWriteForm;
