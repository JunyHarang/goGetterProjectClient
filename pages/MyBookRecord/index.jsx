import React, { useEffect, useState, useCallback } from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, Title, Content, PopularCards, SharedCards, Button } from '@pages/ShareBoard/styles';
import Cards from '@components/Cards';
import { Row } from 'antd';
import axios from 'axios';
import Paging from '@components/Paging';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';

const MyBookRecord = (props) => {
  const state = useSelector((state) => state.auth);
  const userId = state.user.user_id;

  const [currentPage, setCurrentPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [sharedBoards, setSharedBoards] = useState([]);

  useEffect(() => {
    handlePageChange(currentPage);
  }, []);

  const handlePageChange = (page) => {
    axios
      .get(`/api/bkusers/book-reports/${userId}`, {
        withCredentials: true,
        params: {
          page: page - 1,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setSharedBoards(res.data.data.content);
        // console.log(page);

        const pagination = res.data.pagination;
        const { total_pages, total_elements, current_page, current_elements } = pagination;
        setTotalElements(total_elements);
        setCurrentPage(current_page);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  const onClickEdit = useCallback(() => {
    props.history.push('/mybookrecord/write');
  }, []);

  // if (!sharedBoards.length || !popularSharedBoards.length) {
  //   return <div>loading...</div>;
  // }

  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <Title>기록 게시판</Title>
        <Content>
          <h4>나의 게시물</h4>
          <SharedCards>
            <Row gutter={[16, 32]}>
              {sharedBoards &&
                sharedBoards.map((board, index) => (
                  <React.Fragment key={index}>
                    <Cards
                      title={board.title}
                      createdBoard={board.create_at}
                      boardId={board.book_report_id}
                      bookTitle={board.book_name}
                      bookTag={board.book_report_tag}
                    />
                  </React.Fragment>
                ))}
            </Row>
          </SharedCards>
        </Content>
        <div style={{ marginBottom: '50px' }}>
          <Button onClick={onClickEdit}>작성하기</Button>
        </div>
        <div style={{ marginLeft: '150px' }}>
          <Paging
            bookBoard={true}
            totalElements={totalElements}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default withRouter(MyBookRecord);
