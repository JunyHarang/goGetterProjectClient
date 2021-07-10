import React from 'react';
import {
  Content,
  ContentLeft,
  ContentImg,
  ContentRight,
  ContentTitle,
  ContentText,
  ContentEdit,
} from '@components/ShareDetailContent/styles';
import { useSelector } from 'react-redux';

const ShareDetailContent = (props) => {
  const state = useSelector((state) => state.auth);
  let userId = -1;

  if (state.user !== null) {
    userId = state.user.user_id;
  }
  // console.log(props);

  return (
    <div>
      <Content>
        <ContentLeft>
          <ContentImg>
            <img src="/images/placeholder.png"></img>
          </ContentImg>
          <div className="title">{props.bookTitle}</div>
        </ContentLeft>
        <ContentRight>
          <ContentTitle>
            <div className="title">{props.title}</div>
            <div className="date">{props.create}</div>
          </ContentTitle>
          <ContentText>
            {props.content}
            <div id="tag">{props.tag ? props.tag : null}</div>
          </ContentText>
          {props.writerId === userId && (
            <ContentEdit>
              <button className="edit">수정하기</button>
              <button className="delete">삭제하기</button>
            </ContentEdit>
          )}
        </ContentRight>
      </Content>
    </div>
  );
};

export default ShareDetailContent;
