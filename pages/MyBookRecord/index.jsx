import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import {
  Container,
  MyContainer,
  MySearch,
  BookRecord,
  MyHeader,
  Wrapper,
  Ul,
  Li,
  Button,
} from '@pages/MyBookRecord/styles';
import { Link } from 'react-router-dom';

const MyBookRecord = () => {
  const url =
    'https://an2-img.amz.wtchn.net/image/v2/4145ef23e4454d900b0860f915490911.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1TOWhjbTh5WTNWa2IyZHpjekExWlhKeWMyTndjeUlzSW5GMVlXeHBkSGtpT2pnd0xDSjNhV1IwYUNJNk5Ea3dmUS5QNTBzb0dkTW1mV05kWmhwXzVKSnU4RVdNeVdNTG1ZdldFVjREaVVkRVd3';

  return (
    <div id="discussion" style={{ height: '100%' }}>
      <MyContainer>
        <Header />
        <Container>
          <MyHeader>나의 독서 기록</MyHeader>
          <BookRecord>
            <MySearch>
              <i class="fas fa-search"></i>
              <input placeholder="글제목으로 검색."></input>
            </MySearch>
            <Wrapper>
              <Ul>
                <Li>
                  <Link to="/mybookrecord/content">
                    <div className="imgDiv">
                      <img src={url}></img>
                    </div>
                  </Link>
                  <div className="title">예술하는 습관을 읽고</div>
                  <div className="bookTitle">예술하는 습관</div>
                  <div className="date">21-06-24</div>
                  <div className="tag">#예술 #코코샤넬</div>
                </Li>
                <Li>
                  <div className="imgDiv">
                    <img src={url}></img>
                  </div>
                  <div className="title">예술하는 습관을 읽고</div>
                  <div className="bookTitle">예술하는 습관</div>
                  <div className="date">21-06-24</div>
                  <div className="tag">#예술 #코코샤넬</div>
                </Li>
                <Li>
                  <div className="imgDiv">
                    <img src={url}></img>
                  </div>
                  <div className="title">예술하는 습관을 읽고</div>
                  <div className="bookTitle">예술하는 습관</div>
                  <div className="date">21-06-24</div>
                  <div className="tag">#예술 #코코샤넬</div>
                </Li>
                <Li>
                  <div className="imgDiv">
                    <img src={url}></img>
                  </div>
                  <div className="title">예술하는 습관을 읽고</div>
                  <div className="bookTitle">예술하는 습관</div>
                  <div className="date">21-06-24</div>
                  <div className="tag">#예술 #코코샤넬</div>
                </Li>
                <Li>
                  <div className="imgDiv">
                    <img src={url}></img>
                  </div>
                  <div className="title">예술하는 습관을 읽고</div>
                  <div className="bookTitle">예술하는 습관</div>
                  <div className="date">21-06-24</div>
                  <div className="tag">#예술 #코코샤넬</div>
                </Li>
              </Ul>
            </Wrapper>
            <Wrapper>
              <Ul>
                <Li>
                  <div className="imgDiv">
                    <img src={url}></img>
                  </div>
                  <div className="title">예술하는 습관을 읽고</div>
                  <div className="bookTitle">예술하는 습관</div>
                  <div className="date">21-06-24</div>
                  <div className="tag">#예술 #코코샤넬</div>
                </Li>
                <Li>
                  <div className="imgDiv">
                    <img src={url}></img>
                  </div>
                  <div className="title">예술하는 습관을 읽고</div>
                  <div className="bookTitle">예술하는 습관</div>
                  <div className="date">21-06-24</div>
                  <div className="tag">#예술 #코코샤넬</div>
                </Li>
                <Li>
                  <div className="imgDiv">
                    <img src={url}></img>
                  </div>
                  <div className="title">예술하는 습관을 읽고</div>
                  <div className="bookTitle">예술하는 습관</div>
                  <div className="date">21-06-24</div>
                  <div className="tag">#예술 #코코샤넬</div>
                </Li>
                <Li>
                  <div className="imgDiv">
                    <img src={url}></img>
                  </div>
                  <div className="title">예술하는 습관을 읽고</div>
                  <div className="bookTitle">예술하는 습관</div>
                  <div className="date">21-06-24</div>
                  <div className="tag">#예술 #코코샤넬</div>
                </Li>
                <Li>
                  <div className="imgDiv">
                    <img src={url}></img>
                  </div>
                  <div className="title">예술하는 습관을 읽고</div>
                  <div className="bookTitle">예술하는 습관</div>
                  <div className="date">21-06-24</div>
                  <div className="tag">#예술 #코코샤넬</div>
                </Li>
              </Ul>
            </Wrapper>
            <Link to="/mybookrecord/write">
              <Button type="submit">작성하기</Button>
            </Link>
          </BookRecord>
        </Container>
      </MyContainer>
      <Footer />
    </div>
  );
};

export default MyBookRecord;
