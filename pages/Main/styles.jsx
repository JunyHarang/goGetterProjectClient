import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 100px;
  padding-bottom: 100px;
`;

export const Content = styled.div`
  padding: 0px 30px;
  min-height: 100%;
  text-align: center;

  & h4 {
    font-weight: bold;
    margin-bottom: 30px;
  }

  & img {
    margin-top: 50px;
    width: 85%;
  }
`;

export const AllDiv = styled.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  margin-bottom: 100px;
`;

export const MyPageDiv = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`;

export const ContentDiv = styled.div`
  width: 950px;
  padding-top: 40px;
`;
