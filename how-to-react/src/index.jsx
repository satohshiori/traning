import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Jumbotron } from 'reactstrap';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserList from './component/userList';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Hello React!</h1>
          <p className="lead">Reactで作成した最初のページです。</p>
        </Jumbotron>
        <UserList />
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));