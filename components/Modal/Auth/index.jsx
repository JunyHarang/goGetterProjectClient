import React, { useState, useCallback } from 'react';
import { Modal, ModalBtn, ModalWrapper, MainText, SubText, Container, TextInput } from '@components/Modal/Auth/styles';
import axios from 'axios';

const Auth = ({ authModalOpen, setAuthModalOpen, email }) => {
  const [sendMail, setSendMail] = useState(false);

  const onChangeModal = useCallback(() => {
    setAuthModalOpen(false);
    setSendMail(false);
  }, []);

  const onChangeSendMail = useCallback(
    (e) => {
      setSendMail(!sendMail);

      axios.get(`http://localhost:8080/email-confirm?email=${email}`)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.dir(err);
        })
    },
    [email],
  );

  const onAuthConfirm = useCallback((e) => {
    e.preventDefault();
    setAuthModalOpen(false);
    setSendMail(false);
  }, []);

  return (
    <>
      <Modal signUpModal={authModalOpen} onClick={onChangeModal} />
      <Container signUpModal={authModalOpen}>
        {!sendMail && (
          <ModalWrapper>
            <MainText>입력하신 이메일로 인증을 진행해 주세요.</MainText>
            <SubText>*수신함에서 인증메일을 찾을 수 없을 경우 스팸함을 조회하세요.</SubText>
            <br />
            <ModalBtn onClick={onChangeSendMail}>인증 메일 발송</ModalBtn>
          </ModalWrapper>
        )}
        {sendMail && (
          <form>
            <ModalWrapper>
              <MainText>이메일을 확인해주세요.</MainText>
              <SubText>*수신함에서 인증메일을 찾을 수 없을 경우 스팸함을 조회하세요.</SubText>
              <TextInput placeholder="인증번호를 입력해주세요." type="text"></TextInput>
              <ModalBtn onClick={onAuthConfirm}>인증 번호 확인</ModalBtn>
            </ModalWrapper>
          </form>
        )}
      </Container>
    </>
  );
};

export default Auth;
