import React, { useState } from 'react';
import { Fixed, Inner, LinkClicked } from '@layouts/Header/Navbar/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from '@actions/auth';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const pathname = window.location.pathname;

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <Fixed>
      <Inner>
        {!isLoggedIn ? (
          <ul>
            <li>
              <Link to="/mybookrecord">
                <LinkClicked isActive={pathname.includes('/mybookrecord')}>독서 기록</LinkClicked>
              </Link>
            </li>
            <li>
              <Link to="/shareboard">
                <LinkClicked isActive={pathname.includes('/shareboard')}>독서 공유</LinkClicked>
              </Link>
            </li>
            <li>
              <Link to="/discussion">
                <LinkClicked isActive={pathname.includes('/discussion')}>독서 토론</LinkClicked>
              </Link>
            </li>
            <li>
              <Link to="/event/now">
                <LinkClicked isActive={pathname.includes('/event')}>이벤트</LinkClicked>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <LinkClicked isActive={pathname.includes('/login')}>로그인</LinkClicked>
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/mybookrecord">
                <LinkClicked isActive={pathname.includes('/mybookrecord')}>독서 기록</LinkClicked>
              </Link>
            </li>
            <li>
              <Link to="/shareboard">
                <LinkClicked isActive={pathname.includes('/shareboard')}>독서 공유</LinkClicked>
              </Link>
            </li>
            <li>
              <Link to="/discussion">
                <LinkClicked isActive={pathname.includes('/discussion')}>독서 토론</LinkClicked>
              </Link>
            </li>
            <li>
              <Link to="/event/now">
                <LinkClicked isActive={pathname.includes('/event')}>이벤트</LinkClicked>
              </Link>
            </li>
            <li onClick={onLogout}>
              <Link to="/">로그아웃</Link>
            </li>
            <li>
              <Link to="/mypage/profile">
                <LinkClicked isActive={pathname.includes('/mypage')}>
                  <i class="fas fa-user-circle fa-lg"></i>
                </LinkClicked>
              </Link>
            </li>
          </ul>
        )}
      </Inner>
    </Fixed>
  );
};

export default Navbar;
