import React from "react";
import { produce } from 'immer';

class TestFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "hello",
        namer: {
          hello:'its hello',
          hii : 'its hii'
        }
      },
      users: []
    };
  }

  onInputChange = event => {
    console.log(this.state)
    this.setState(
      produce(this.state.user, draftState => {
        draftState.user = {
          name: event.target.value
        };
      })
    );
  };

  onSubmitUser = () => {
    this.setState(
      produce(draftState => {
        draftState.users.push(this.state.user);
        draftState.user = {
          name: ""
        };
      })
    );
  };

  render() {
    const { users, user } = this.state;
    return (
      <div>
        <h1>Immer with React</h1>
        {users.map(user => (
          <h4 key={user.id}>{user.name}</h4>
        ))}
        <input type="text" value={user.name} onChange={this.onInputChange} />
        <button onClick={this.onSubmitUser}>Submit</button>
      </div>
    );
  }
}

export default TestFile;