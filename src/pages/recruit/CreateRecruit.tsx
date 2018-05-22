import * as React from 'react';

export interface CreateRecruitPageProps {
}

export interface CreateRecruitPageState {
}

export default class CreateRecruitPage extends React.Component<CreateRecruitPageProps, CreateRecruitPageState> {
  constructor(props: CreateRecruitPageProps) {
    super(props);

    this.state = {
    };
  }

  public render() {
    return (
      <div>
        <h1>구인 생성 페이지</h1>
      </div>
    );
  }
}
