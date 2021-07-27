import styled from '@emotion/styled';

export const Container = styled.div`
  height: 70px;
  padding: 12px 8px;
  margin: 0 8px;
  border-bottom: 1px solid #ced4da;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  & h5 {
    width: 50%;
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    color: #222;
  }

  & span {
    font-size: 12px;
    text-align: right;
    width: 50%;
    color: #939597;
  }
`;

export const Bottom = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 14px;
`;
