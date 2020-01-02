import React from 'react';
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import Navbar from '../components/Navbar/Navbar';
import PlayerContainer from '../components/PlayerContainer/PlayerContainer';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  renderView = () => {
    const { authed } = this.state;
    if (!authed) {
      return (<Auth />);
    }
    return (<PlayerContainer />);
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <Navbar authed={authed} />
        {
        this.renderView()
      }
      </div>
      // If they are authenticated load the board
      // else show log in button
    );
  }
}


export default App;
