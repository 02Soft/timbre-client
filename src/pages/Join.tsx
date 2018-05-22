import * as React from 'react';

export interface JoinPageProps {

}

export interface JoinPageState {
  
}

export default class JoinPage extends React.Component<JoinPageProps, JoinPageState> {
  constructor(props: JoinPageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <h1>Join Page</h1>
      </div>
    );
  }
}
