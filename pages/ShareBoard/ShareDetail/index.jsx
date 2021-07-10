import React, { useState, useEffect } from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, Title, Content } from '@pages/ShareBoard/ShareDetail/styles';
import axios from 'axios';
import { useParams } from 'react-router';
import ShareDetailContent from '@components/ShareDetailContent';
import ShareBoardReply from '@components/ShareBoardReply';

const ShareDetail = (props) => {
  const { boardId } = useParams();
  const [post, setPost] = useState([]);
  const [reply, setReply] = useState([]);
  const [writerId, setWriterId] = useState('');
  const [writerNickName, setWriterNickName] = useState('');

  useEffect(() => {
    axios
      .get(`/api/bkuser/sharings?id=${boardId}`)
      .then((res) => {
        // console.log(res.data.data);
        setPost(res.data.data);
        setWriterId(res.data.data.writer_info.writer_id);
        setWriterNickName(res.data.data.writer_info.nick_name);
        // console.log('상세게시판 api', res.data.data);
      })
      .catch((err) => {
        console.dir(err);
      });

    axios
      .get(`/api/user/sharing-reply?boardId=${boardId}`)
      .then((res) => {
        setReply(res.data.data);
        // console.log('상세게시판 댓글 api', res.data.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <Title>{writerNickName}님의 게시물</Title>
        <Content>
          <ShareDetailContent
            title={post.title}
            bookTitle={post.book_title}
            content={post.content}
            create={post.created_at}
            like={post.like_cnt}
            writerId={writerId}
          />
          <ShareBoardReply
            boardId={boardId}
            userId={post.id}
            replyCnt={post.reply_cnt}
            reply={reply}
            setReply={setReply}
          />
        </Content>
      </Container>
      <Footer />
    </div>
  );
};

export default ShareDetail;
