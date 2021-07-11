import React, { useState, useCallback } from 'react';
import { Container, Form, WriteHeader, Input, TextArea, Button } from '@components/EventWriteForm/styles';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventWriteForm = () => {
  const users = useSelector((state) => state.auth.user);
  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');
  const [coupon_id, setCoupon_Id] = useInput('');
  const [img_url, setImg_Url] = useInput('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onSubmit = (e) => {
    console.log(users.user_id);
    axios
      .post(`/api/admin/events`, {
        content,
        coupon_id,
        title,
        img_url,
        // start_date,
        // end_date,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  return (
    <div>
      <Container>
        <WriteHeader>게시글 작성</WriteHeader>
        <Form>
          <div id="title">
            이벤트 제목
            <Input id="title" name="title" placeholder="제목을 입력해주세요." onChange={onChangeTitle} value={title} />
          </div>
          <div id="date">이벤트 기간</div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            minDate={startDate}
            maxDate={new Date()}
            customInput={<CustomInput />}
          />
          <div id="content">
            이벤트 내용
            <TextArea
              id="content"
              name="content"
              placeholder="내용을 입력해주세요."
              onChange={onChangeContent}
              value={content}
            />
          </div>
          <Button type="submit" onClick={onSubmit}>
            작성하기
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EventWriteForm;
