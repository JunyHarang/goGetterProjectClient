import React, { useState, useCallback } from 'react';
import { Container, Form, WriteHeader, Input, TextArea, Button } from '@components/EventWriteForm/styles';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';

const EventWriteForm = () => {
  const users = useSelector((state) => state.auth.user);

  const DateInput = ({ value, onClick }) => (
    <button className="date-input" onClick={onClick}>
      {value}
    </button>
  );
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');
  const [coupon_id, setCoupon_Id] = useInput('');
  const [img_url, setImg_Url] = useInput('');
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const onSubmit = (e) => {
    console.log(users.user_id);
    axios
      .post(`/api/admin/events`, {
        content,
        title,
        img_url,
        start_date: dateRange[0],
        end_date: dateRange[1],
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
        <WriteHeader>이벤트 게시글 작성</WriteHeader>
        <Form>
          <div id="title">
            제목
            <Input id="title" name="title" placeholder="제목을 입력해주세요." onChange={onChangeTitle} value={title} />
          </div>
          <div className="date">기간</div>
          <div className="datePicker">
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update)}
              locale={ko}
              dateFormat="yyyy-MM-dd"
              placeholderText="이벤트 날짜 선택"
              isClearable={true}
              customInput={<DateInput />}
            />
          </div>
          <div id="content">
            내용
            <TextArea
              id="content"
              name="content"
              placeholder="내용을 입력해주세요."
              onChange={onChangeContent}
              value={content}
            />
          </div>
          <div className="file">
            <label for="file">첨부파일</label>
            <input type="file" id="file" />
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
