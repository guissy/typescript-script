import * as React from 'react';
import * as ReactDOM from 'react-dom';

class MainPage extends React.PureComponent<MainPageProps, any> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = { message: props.name + ', React Works!' };
  }
  public render() {
    return (
      <div>{this.state.message}</div>
    );
  }
}

interface MainPageProps {
  name: string;
}

ReactDOM.render((
  <div>
    <MainPage name="God"/>
  </div>
), document.querySelector('#root'));