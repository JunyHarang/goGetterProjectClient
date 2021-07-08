import React from 'react';
import { Container, Form, WriteHeader, Input, TextArea, Button } from '@components/RecordWriteForm/styles';

const WriteForm = () => {
  return (
    <div>
      <Container>
        <WriteHeader>게시글 작성</WriteHeader>
        <Form>
          <div id="title">
            제목
            <Input id="title" name="title" placeholder="제목을 입력해주세요." />
          </div>
          <div id="title">
            책 제목
            <Input id="title" name="title" placeholder="제목을 입력해주세요." />
          </div>
          <div id="content">
            본문
            <TextArea id="content" name="content" placeholder="내용을 입력해주세요." />
          </div>
          <div id="tag">
            태그
            <Input id="tag" name="tag" placeholder="#태그" />
          </div>
          <Button type="submit">작성하기</Button>
        </Form>
      </Container>
    </div>
  );
};

export default WriteForm;
