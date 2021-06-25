import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import styled from 'styled-components';
import {
  Container,
  BRContainer,
  MyHeader,
  Content,
  ContentLeft,
  ContentImg,
  ContentRight,
  ContentTitle,
  ContentText,
  ContentEdit,
} from '@pages/MyBookRecord/BRContent/styles';

const BRContent = () => {
  const text = `이탈리아의 작가이자 연극인인 로사 몰리아소 소설. 국내에는 처음 소개되는 작가이지만, 2009년 <살인자는 무엇인가를 두고 간다>로 데뷔한 후 다수의 소설을 발표하였고 토리노 바레티 극장의 큐레이터로도 활발하게 활동하고 있는 작가이다. 연극계에서 오랫동안 일해 온 몰리아소의 경력 덕분인지, 한 편의 짧은 연극을 보는 듯한 느낌을 주는 소설이다. 200페이지가 채 되지 않는 분량으로 부담도 거의 없다.

  소설의 첫머리에 의문의 시체-그것도 매우 아름다운 시체-가 등장하면서 막이 오른다. 명품 매장의 판매 직원, 수업을 빼먹은 고등학생 커플, 고함을 지르는 노숙자, 동성애자 기 치료사까지 다섯 명의 주인공들이 차례로 무대에 나타난다.
  
  가볍고 유머러스한 터치로 그려 낸 등장인물들은 시체를 발견하고도 경찰에 신고하지 않는 뻔뻔한 사람들이고, 때로는 과장된 말투에 이해할 수 없는 행동을 하기도 한다. 하지만 어딘지 모르게 우리 주변의 누군가를 떠올리게 하는 인물들이다. 몰리아소는 이런 인물들을 통해 현대 사회와 현대인의 모습을 풍자적으로 담아냈다.`;
  return (
    <div style={{ height: '100%' }}>
      <BRContainer>
        <Header />
        <Container>
          <MyHeader>나의 게시물</MyHeader>
          <Content>
            <ContentLeft>
              <ContentImg>
                <img src="https://an2-img.amz.wtchn.net/image/v2/dbdea6350fbd76dcbda5f0109de783f5.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPalF3TUN3aWNHRjBhQ0k2SWk5Mk1TOTFaMmcyTTNwaGRHZG1iR2wyZDNGMGQyRndiaUlzSW5GMVlXeHBkSGtpT2pnd0xDSjNhV1IwYUNJNk1qZ3dmUS41ZEcxVkhDY29PX2RwZTJNSGRzYl85TlFXR3R3a2t5VlVoZ0lyTWNlejdB"></img>
              </ContentImg>
              <div className="title">아름답고 죽은 그녀</div>
              <div className="author">로사 몰라이소</div>
            </ContentLeft>
            <ContentRight>
              <ContentTitle>
                <div className="title">아름답고 죽은 그녀를 읽고</div>
                <div className="date">2021-06-25 14:34</div>
              </ContentTitle>
              <ContentText>
                {text}
                <div>#풍자 #이탈리아</div>
              </ContentText>
              <ContentEdit>
                <div>
                  <i class="fas fa-share-square"></i>공유하기
                </div>
                <button className="edit">수정하기</button>
                <button className="delete">삭제하기</button>
              </ContentEdit>
            </ContentRight>
          </Content>
        </Container>
      </BRContainer>
      <Footer />
    </div>
  );
};

export default BRContent;
