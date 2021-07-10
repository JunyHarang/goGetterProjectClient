import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import Tab from '@components/Tab';
import {
  AllDiv,
  ContentDiv,
  ProfileDiv,
  Profile,
  CantModified,
  ProfileImage,
  Label,
  Input,
  SmallText,
  FormGroup,
  ProfileForm,
  MyPageDiv,
  ModifiedBtn,
} from '@pages/MyPage/Profile/styles';

const MyPageProfile = () => {
  return (
    <div id="mypage-profile" style={{ height: '100%' }}>
      <MyPageDiv>
        <Header />
        <AllDiv>
          <Tab />
          <ContentDiv>
            <ProfileDiv>
              <h2>프로필</h2>
              <Profile>
                <CantModified>
                  이메일
                  <span>example@gmail.com</span>
                  이름
                  <span>홍길동</span>
                  휴대폰
                  <span>01000000000</span>
                </CantModified>
                <ProfileImage>
                  <i className="fas fa-user-circle fa-8x"></i>
                </ProfileImage>
              </Profile>
              <ProfileForm>
                <FormGroup>
                  <Label>닉네임</Label>
                  <Input placeholder="닉네임을 입력해주세요." type="text"></Input>
                </FormGroup>
                <FormGroup>
                  <Label>비밀번호</Label>
                  <Input placeholder="비밀번호를 입력해주세요." type="password"></Input>
                  <SmallText>비밀번호는 8~16자, 영문, 숫자, 특수문자를 포함해야 합니다.</SmallText>
                </FormGroup>
                <FormGroup>
                  <Label>비밀번호 확인</Label>
                  <Input placeholder="비밀번호를 다시 입력해주세요." type="password"></Input>
                </FormGroup>
                <ModifiedBtn>수정하기</ModifiedBtn>
              </ProfileForm>
            </ProfileDiv>
          </ContentDiv>
        </AllDiv>
      </MyPageDiv>
      <Footer />
    </div>
  );
};

export default MyPageProfile;
