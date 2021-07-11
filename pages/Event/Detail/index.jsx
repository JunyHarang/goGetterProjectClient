import React, { useState, useEffect } from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import {
  Contents,
  EventContainer,
  Container,
  EventHeader,
  EventTab,
  TabArea,
  EventList,
  ListButton,
} from '@pages/Event/Detail/styles';
import Paging from '@components/Paging';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EventDetail = (props) => {
  const eventId = props.match.params.id;
  const [post, setPost] = useState();
  const [totalElements, setTotalElements] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  useEffect(() => {
    axios
      .get(`/api/events/${eventId}`, {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data.data;
        setContent(data.content);
        setStartDate(data.start_date);
        setEndDate(data.end_date);
        setTitle(data.title);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(post);
  return (
    <div style={{ height: '100%' }}>
      <EventContainer>
        <Header />
        <Container>
          <EventHeader>이벤트</EventHeader>
          <Contents>
            <h3>{title}</h3>
            {content}
            <br></br>
            {startDate}~{endDate}
          </Contents>
          <ListButton>
            <Link to="/event/now">
              <button>목록</button>
            </Link>
          </ListButton>
        </Container>
      </EventContainer>
      <Paging></Paging>
      <Footer />
    </div>
  );
};

export default EventDetail;

// const EventLists = ({ item }) => {
//   const { content, coupon_id, end_date, id, img_url, start_date } = item;
//   return (
//     <EventList>
//       <div>
//         <img src="/images/placeholder.png"></img>
//         <span className="evt_title">{content}</span>
//         <em className="evt_date">
//           {start_date}~{end_date}
//         </em>
//       </div>
//     </EventList>
//   );
// };
