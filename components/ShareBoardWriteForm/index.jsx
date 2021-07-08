import React, { useState, useCallback } from 'react';
import { Container, Form, WriteHeader, Input, TextArea, Button, FormDiv } from '@components/ShareBoardWriteForm/styles';
import { useSelector } from 'react-redux';
import useInput from '@hooks/useInput';

const ShareBoardWriteForm = () => {
  const [title, onChangeTitle] = useInput('');
  const [bookTitle, onChangeBookTitle] = useInput('');
  const [content, onChangeContent] = useInput('');
  const [tag, onChangeTag] = useInput('');

  const userData = useSelector((state) => state.auth.user);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(title, bookTitle, content, tag);
    },
    [title, bookTitle, content, tag],
  );

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
