import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TabDiv } from '@components/AdminTab/styles';

const Tab = () => {
  const history = useHistory();
  const onClick = (e) => {
    window.location.reload();
    history.push('/admin');
  };
  return (
    <TabDiv>
      <h2>관리자 페이지</h2>
      <ul>
        <li className="select" onClick={onClick}>
          회원 관리
        </li>
      </ul>
    </TabDiv>
  );
};

export default Tab;
