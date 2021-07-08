import React, { useState } from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import DiscussionEditForm from '@components/DiscussionEditForm';
import { Container, DCContainer } from '@pages/Discussion/DCEdit/styles';

const DCEdit = (props) => {
  console.log(props.location.state);
  // const [title, setTitle] = useState(props.location.state.title);
  // const [content, setContent] = useState(props.location.state.content);
  // const title = props.location.state.title;
  // const content = props.location.state.content;
  const Id = props.match.params.id;

  // console.log(title, content);
  return (
    <div style={{ height: '100%' }}>
      <DCContainer>
        <Header />
        <Container>
          <DiscussionEditForm Id={Id}></DiscussionEditForm>
          {/* title={title} content={content} Id={Id} */}
        </Container>
      </DCContainer>
      <Footer />
    </div>
  );
};

export default DCEdit;
