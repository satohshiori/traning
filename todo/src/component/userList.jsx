import React from 'react';
import { Table, Form, Input } from 'reactstrap';

const url = 'http://localhost:3000/todoList/';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
    this.addRow = this.addRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.checkedCircle = this.checkedCircle.bind(this);
    this.fetchTodo = this.fetchTodo.bind(this);
  }

  componentDidMount() {
    this.fetchTodo();
  }

  fetchTodo() {
    fetch(url).then((res) => {
      return res.json();
    }).then((todoList) => {
      this.setState({ todoList: todoList });
    });
  }

  addRow(todoTitle, todoFlag) {
    const json = { todoTitle, todoFlag };
    fetch(url, {
      body: JSON.stringify(json), method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(this.fetchTodo);
  }

  deleteRow(id) {
    const targetId = url + id;
    fetch(targetId, { method: 'DELETE' }).then(this.fetchTodo);
  }

  checkedCircle(id, todoTitle, todoFlag) {
    const json = { id, todoTitle, todoFlag }
    const targetId = url + id;
    fetch(url).then((res) => {
      return res.json();
    }).then(() =>
      fetch(targetId, {
        body: JSON.stringify(json), method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(this.fetchTodo)
    );
  }

  render() {
    return (
      <div className='shadow'>
        <TodoAddForm addRow={this.addRow} />
        <Table>
          <tbody>
            {this.state.todoList.map((row, index) => {
              const { todoTitle, id, todoFlag } = row;
              return <TodoRow key={index} todoFlag={todoFlag} id={id} todoTitle={todoTitle} deleteRow={this.deleteRow} checkedCircle={this.checkedCircle} />;
            })}
          </tbody>
        </Table>
      </div>
    )
  }
};

class TodoRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <div className="container">
            <div className="row">
              <div className='col-2'>
                <button onClick={() => { this.props.checkedCircle(this.props.id, this.props.todoTitle, this.props.todoFlag ? false : true); }} className='btn btn-link'>
                  {this.props.todoFlag ? <img width='20px' src='./img/circle.svg'></img> : <img width='20px' src='./img/circle_check.svg'></img>}
                </button>
              </div>
              <div className='col-8'>
                {this.props.todoFlag ? <a>{this.props.todoTitle}</a> : <s className='text-muted'>{this.props.todoTitle}</s>}
              </div>
              <div className='col-2 text-right'>
                <button onClick={() => { this.props.deleteRow(this.props.id); }} className='btn btn-link'>
                  <img width='20px' src='./img/trash.svg'></img>
                </button>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

class TodoAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: '',
      todoFlag: true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { todoTitle, todoFlag } = this.state;
    this.props.addRow(todoTitle, todoFlag);
    this.setState({ todoTitle: '', todoFlag: true });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input required id="todoTitleInput" name="todoTitle" type="text" placeholder="ToDoを追加" onChange={this.handleInputChange} value={this.state.todoTitle} />
        </Form>
      </div>
    );
  }
}