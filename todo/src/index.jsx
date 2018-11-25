import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from 'reactstrap';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoList from './component/userList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container className='mt-3'>
        <h1 className='text-muted text-center'>TODO</h1>
        <TodoList />
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));