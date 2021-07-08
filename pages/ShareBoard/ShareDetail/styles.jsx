import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 100px;
  padding-bottom: 300px;
`;

export const Title = styled.h2`
  padding: 50px 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(147, 149, 151, 0.8);
  margin-bottom: 30px;
`;

export const Content = styled.div`
  padding: 0px 30px;
  min-height: 100%;

  & h4 {
    font-weight: bold;
    margin-bottom: 30px;
  }
`;
