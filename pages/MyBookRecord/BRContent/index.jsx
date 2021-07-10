import React, { useEffect, useState } from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, Title, Content } from '@pages/MyBookRecord/BRContent/styles';
import RecordDetailContent from '@components/RecordDetailContent';
import { useParams } from 'react-router';
import axios from 'axios';

const BRContent = () => {
  const { boardId } = useParams();

  const [recordDetailData, setRecordDetailData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/bkusers/book-reports/detail/${boardId}`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data.data);
        setRecordDetailData(res.data.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  console.log(recordDetailData);

  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <Title>나의 게시물</Title>
        <Content>
          <RecordDetailContent recordDetailData={recordDetailData} />
        </Content>
      </Container>
      <Footer />
    </div>
  );
};

export default BRContent;
