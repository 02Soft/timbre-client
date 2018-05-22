import * as React from 'react';

export interface RecruitListPageProps {
}

export interface RecruitListPageState {
}

export default class RecruitListPage extends React.Component<RecruitListPageProps, RecruitListPageState> {
  constructor(props: RecruitListPageProps) {
    super(props);

    this.state = {
    };
  }

  public render() {
    return (
      <div>
        <h1>구인 리스트 페이지</h1>
      </div>
    );
  }
}
