import React, { useCallback } from 'react';
import { Container, Title, Content, BookTitle, DateTime, Detail, Tag } from '@components/Cards/styles';
import { Link, Redirect } from 'react-router-dom';
import { Col } from 'antd';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';

const Cards = (props) => {
  // const onClick = useCallback(() => {
  //   props.history.push('/');
  //   window.location.reload();
  // }, []);

  // console.log(props);
  const shareBoard = props.share;
  return (
    <Col span={6}>
      {shareBoard ? (
        <Container>
          <Link
            to={`/shareboard/detail/${props.boardId}`}
            style={{ textDecoration: 'none', color: '#000', hover: 'none' }}
          >
            <div class="card" style={{ borderRadius: '5px' }}>
              {/* <div class="card-header">My Card</div> */}
              <img
                style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', maxHeight: '250px' }}
                src="images/placeholder.png"
                alt=""
              />
              <div class="card-body" style={{ textAlign: 'right' }}>
                <Title>{props.title.slice(0, 10) + '...'}</Title>
                <Content>
                  <BookTitle>{props.bookTitle ? props.bookTitle : '책 제목 없음'}</BookTitle>
                  <DateTime>{props.createdBoard}</DateTime>
                  <Tag>{props.bookTag ? props.bookTag : ''}</Tag>
                </Content>
                {/* <Link to="/shareboard/detail">
              <Detail>자세히</Detail>
            </Link> */}
              </div>
            </div>
          </Link>
        </Container>
      ) : (
        <Container>
          <Link
            to={`/mybookrecord/detail/${props.boardId}`}
            style={{ textDecoration: 'none', color: '#000', hover: 'none' }}
          >
            <div class="card" style={{ borderRadius: '5px' }}>
              {/* <div class="card-header">My Card</div> */}
              <img
                style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', maxHeight: '250px' }}
                src="images/placeholder.png"
                alt=""
              />
              <div class="card-body" style={{ textAlign: 'right' }}>
                <Title>{props.title.slice(0, 10) + '...'}</Title>
                <Content>
                  <BookTitle>{props.bookTitle ? props.bookTitle : '책 제목 없음'}</BookTitle>
                  <DateTime>{props.createdBoard}</DateTime>
                  <Tag>{props.bookTag ? props.bookTag : ''}</Tag>
                </Content>
                {/* <Link to="/shareboard/detail">
              <Detail>자세히</Detail>
            </Link> */}
              </div>
            </div>
          </Link>
        </Container>
      )}
    </Col>
  );
};

export default Cards;