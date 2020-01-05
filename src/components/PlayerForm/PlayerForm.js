import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

import './PlayerForm.scss';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
  }

  state = {
    playerName: '',
    playerPosition: '',
    playerImage: '',
  }

  addPlayerEvent = (e) => {
    const { addPlayer } = this.props;
    e.preventDefault();
    const newPlayer = {
      name: this.state.playerName,
      position: this.state.playerPosition,
      imageUrl: this.state.playerImage,
      uid: authData.getUid(),
    };
    addPlayer(newPlayer);
    this.setState({ playerName: '', playerPosition: '', playerImage: '' });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ playerImage: e.target.value });
  }

  render() {
    const { playerName, playerImage, playerPosition } = this.state;
    return (
      <div>
      <form className='PlayerForm col-6 offset-3'>
        <div className="form-group">
          <label htmlFor="playerName">Player's Name:</label>
          <input
          type="text" className="form-control" id="playerName" placeholder="Enter name"
          value= {playerName}
          onChange={this.nameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="playerImageUrl">Player Image Url:</label>
          <input
          type="text" className="form-control" id="playerImageUrl"
          value={playerImage}
          onChange={this.imageChange} />
        </div>
        <div className="form-group">
          <label htmlFor="playerPosition">Player's Position:</label>
          <input
          type="text" className="form-control" id="playerPosition" placeholder="Enter position" value= {playerPosition}
          onChange={this.positionChange} />
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.addPlayerEvent}>Add Player</button>
        </div>
      </form>
    </div>
    );
  }
}

export default PlayerForm;
