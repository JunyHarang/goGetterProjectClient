import React from 'react';
import {
  FooterWrapper,
  SocialLinks,
  FooterLinks,
  FooterLink,
  CopyRight,
  CopyRights,
  CompanyName,
  FooterHeadWrapper,
  FooterFixed,
} from '@layouts/Footer/styles';

// import { Copyright } from '@material-ui/icons';

const Footer = () => {
  const onClickFooterLink = () => {
    alert('준비중입니다.');
  };

  return (
    <FooterWrapper>
      <FooterFixed>
        <FooterHeadWrapper>
          <FooterLinks>
            <FooterLink>
              <a> 자주 묻는 질문 </a>
            </FooterLink>
            <FooterLink>
              <a> 문의하기 </a>
            </FooterLink>
            <FooterLink>
              <a> 공지사항 </a>
            </FooterLink>
            <FooterLink>
              <a> 이용 약관 </a>
            </FooterLink>
          </FooterLinks>
          <SocialLinks>
            <i class="fab fa-facebook-square fa-2x"></i>
            <i class="fab fa-instagram fa-2x"></i>
            <i class="fab fa-twitter fa-2x"></i>
            <i class="fab fa-youtube fa-2x"></i>
          </SocialLinks>
        </FooterHeadWrapper>
        <img style={{ width: '60px' }} src="/images/gogetter.jpg" alt="" />
        <CompanyName>비트캠프 3차 파이널 프로젝트</CompanyName>
        <CopyRights>
          <CopyRight style={{ fontSize: '16px' }}>홍세준, 박준환</CopyRight>
          {/* <CopyRight>우도독</CopyRight> */}
          {/* <CopyRight>사업자등록번호: 123-45-678910</CopyRight>
          <CopyRight>클라우드 호스팅: Amazon Web Services Inc.</CopyRight> */}
        </CopyRights>
      </FooterFixed>
    </FooterWrapper>
  );
};

export default Footer;
