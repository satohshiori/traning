import React from 'react';
import { Table, Button, Form, FormGroup, Input, Label } from 'reactstrap';

const url = 'http://localhost:3000/users/';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.addRow = this.addRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  addRow(userName, email) {
    const json = { userName, email };
    fetch(url, {
      body: JSON.stringify(json), method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(this.fetchUsers);
  }

  deleteRow(id) {
    const targetUrl = url + id;
    fetch(targetUrl, { method: 'DELETE' }).then(this.fetchUsers);
  }

  fetchUsers() {
    fetch(url).then((res) => {
      return res.json();
    }).then((users) => {
      this.setState({ users: users });
    });
  }

  render() {
    return (
      <div>
        <UserAddForm addRow={this.addRow} />
        <Table className="mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((row, index) => {
              const { id, userName, email } = row;
              return <UserRow key={index} id={id} userName={userName} email={email} deleteRow={this.deleteRow} />;
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

class UserRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.userName}</td>
        <td>{this.props.email}</td>
        <td><Button onClick={() => { this.props.deleteRow(this.props.id); }}>X</Button></td>
      </tr>
    );
  }
}

class UserAddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: ''
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
    const { userName, email } = this.state;
    this.props.addRow(userName, email);
    this.setState({ userName: '', email: '' });
  }

  render() {
    return (
      <div>
        <legend>ユーザ追加</legend>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="userNameImput-name">Name</label>
          <input name="userName" type="text" onChange={this.handleInputChange} value={this.state.userName} />
          <label htmlFor="emailImput-name">E-mail</label>
          <input name="email" type="email" onChange={this.handleInputChange} value={this.state.email} />
          <Button type="submit">追加</Button>
        </Form>
      </div>
    );
  }
}