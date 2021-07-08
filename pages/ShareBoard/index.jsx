import React, { useEffect, useState, useCallback } from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, Title, Content, PopularCards, SharedCards, Button } from '@pages/ShareBoard/styles';
import Cards from '@components/Cards';
import CardsPopular from '@components/CardsPopular';
import { Row } from 'antd';
import axios from 'axios';

const ShareBoard = (props) => {
  const [sharedBoards, setSharedBoards] = useState([]);
  const [popularSharedBoards, setPopularSharedBoards] = useState([]);

  useEffect(() => {
    axios
      .get('/api/weekly-best', {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res);
        setPopularSharedBoards(res.data.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('/api/sharings', {
        withCredentials: true,
      })
      .then((res) => {
        setSharedBoards(res.data.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  const onClickEdit = useCallback(() => {
    props.history.push('/shareboard/write');
  }, []);

  if (!sharedBoards.length || !popularSharedBoards.length) {
    return <div>loading...</div>;
  }

  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <Title>공유 게시판</Title>
        <Content>
          <h4>인기 게시물</h4>
          {/* 인기 게시물 grid */}
          <PopularCards>
            <Row gutter={[16, 32]}>
              {popularSharedBoards &&
                popularSharedBoards.map((board, index) => (
                  <React.Fragment key={index}>
                    <CardsPopular
                      title={board.title}
                      createdBoard={board.created_at}
                      boardId={board.id}
                      likeCnt={board.like_cnt}
                      bookTitle={board.book_title}
                    />
                  </React.Fragment>
                ))}
            </Row>
          </PopularCards>
          <h4>공유된 게시물</h4>
          <SharedCards>
            <Row gutter={[16, 32]}>
              {sharedBoards &&
                sharedBoards.map((board, index) => (
                  <React.Fragment key={index}>
                    <Cards
                      title={board.title}
                      createdBoard={board.created_at}
                      boardId={board.id}
                      likeCnt={board.like_cnt}
                      bookTitle={board.book_title}
                    />
                  </React.Fragment>
                ))}
            </Row>
          </SharedCards>
        </Content>
        <div>
          <Button onClick={onClickEdit}>작성하기</Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ShareBoard;
