import * as React from 'react';
import { Route } from 'react-router';

import HomePage from './pages/Home';
import JoinPage from 'pages/Join';
import LoginPage from 'pages/Login';
import RecruitListPage from 'pages/recruit/ListRecruit';
import RecruitDetailPage from 'pages/recruit/DetailRecruit';
import CreateRecruitPage from 'pages/recruit/CreateRecruit';

export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/join' component={JoinPage} />
        <Route exact={true} path='/login' component={LoginPage} />
        <Route exact={true} path='/recruits' component={RecruitListPage} />
        <Route exact={true} path='/recruits/:uuid' component={RecruitDetailPage} />
        <Route exact={true} path='/recruits/create' component={CreateRecruitPage} />
      </React.Fragment>
    );
  }
}
