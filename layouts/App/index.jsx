import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from '../../hoc/auth';
import ScrollToTop from '../../utils/scrollToTop';

const Main = loadable(() => import('@pages/Main'));
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const SignUp2 = loadable(() => import('@pages/SignUp/SignUp2'));
const MyBookRecord = loadable(() => import('@pages/MyBookRecord'));
const BRWrite = loadable(() => import('@pages/MyBookRecord/BRWrite'));
const BRContent = loadable(() => import('@pages/MyBookRecord/BRContent'));
const Discussion = loadable(() => import('@pages/Discussion'));
const DCContent = loadable(() => import('@pages/Discussion/DCContent'));
const DCEdit = loadable(() => import('@pages/Discussion/DCEdit'));
const DCWrite = loadable(() => import('@pages/Discussion/DCWrite'));
const MyPageProfile = loadable(() => import('@pages/MyPage/Profile'));
const ShareBoard = loadable(() => import('@pages/ShareBoard'));
const ShareBoardWrite = loadable(() => import('@pages/ShareBoard/Write'));
const ShareDetail = loadable(() => import('@pages/ShareBoard/ShareDetail'));
const MyPageNote = loadable(() => import('@pages/MyPage/Note'));

const App = () => {
  return (
    <div>
      <ScrollToTop>
        <Switch>
          <Redirect exact path="/" to="/main" />
          <Route path="/main" component={Main} />
          <Route path="/login" component={Auth(LogIn, 'GUEST')} />
          <Route path="/signup" component={Auth(SignUp, 'GUEST')} />
          <Route path="/signup2" component={Auth(SignUp2, 'GUEST')} />
          <Route path="/mybookrecord/content" component={BRContent} />
          <Route path="/mybookrecord/write" component={Auth(BRWrite, 'USER')} />
          <Route path="/mybookrecord" component={Auth(MyBookRecord, 'USER')} />
          <Route path="/discussion/write" component={Auth(DCWrite, 'USER')} />
          <Route path="/discussion/content/:id" component={DCContent} />
          <Route path="/discussion/edit/:id" component={DCEdit} />
          <Route path="/discussion" component={Discussion} />
          <Route path="/shareboard/detail/:boardId" component={ShareDetail} />
          <Route path="/shareboard/write" component={ShareBoardWrite} />
          <Route path="/shareboard" component={ShareBoard} />
          <Route path="/mypage/note" component={MyPageNote} />
          <Route path="/mypage/profile" component={Auth(MyPageProfile, 'USER')} />
        </Switch>
      </ScrollToTop>
    </div>
  );
};

export default App;
