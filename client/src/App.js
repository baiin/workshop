import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state.users = [];
    this.state.comments = [];
  }

  componentDidMount() {
    // load all users
    this.getAllUsers();
  }

  getAllUsers() {
    fetch(`http://localhost:4000/api/users`)
      .then(data => data.json())
      .then(users => {
        this.setState({
          users
        });
      });
  }

  getComments = userName => {
    fetch(`http://localhost:4000/api/comments/${userName}`)
      .then(data => data.json())
      .then(comments => {
        this.setState({
          comments
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <h1>NETFLIX</h1>

        <div
          style={{
            maxHeight: '500px',
            width: '500px',
            overflowY: 'scroll',
            border: '1px solid #cecece',
            borderRadius: '10px'
          }}
        >
          <ul>
            {this.state.users.map(user => (
              <li
                key={user._id}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  this.getComments(user.name);
                }}
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>

        <br></br>

        <h1>COMMENTS</h1>
        <div>
          <ul>
            {this.state.comments.map(comment => (
              <li key={comment._id}>{comment.text}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
