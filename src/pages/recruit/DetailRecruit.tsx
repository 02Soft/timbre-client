import * as React from 'react';

export interface RecruitDetailPageProps {
}

export interface RecruitDetailPageState {
}

export default class RecruitDetailPage extends React.Component<RecruitDetailPageProps, RecruitDetailPageState> {
  constructor(props: RecruitDetailPageProps) {
    super(props);

    this.state = {
    };
  }

  public render() {
    return (
      <div>
        <h1>구인 상세 페이지</h1>
      </div>
    );
  }
}
