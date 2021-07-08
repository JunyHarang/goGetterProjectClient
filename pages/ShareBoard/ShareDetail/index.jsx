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

  useEffect(() => {
    axios.get(`/api/bkuser/sharings?id=${boardId}`).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <Title>디테일</Title>
        <Content>
          <ShareDetailContent />
          <ShareBoardReply />
        </Content>
      </Container>
      <Footer />
    </div>
  );
};

export default ShareDetail;
