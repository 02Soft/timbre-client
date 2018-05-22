import * as React from 'react';

export interface LoginPageProps {
}

export interface LoginPageState {
}

export default class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
  constructor(props: LoginPageProps) {
    super(props);

    this.state = {
    };
  }

  public render() {
    return (
      <div>
        <h1>로그인 페이지</h1>
      </div>
    );
  }
}
