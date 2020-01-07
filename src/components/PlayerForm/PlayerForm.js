import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';
import playerShape from '../../helpers/propz/playerShape';

import './PlayerForm.scss';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
    playerToEdit: playerShape.playerShape,
    editMode: PropTypes.bool,
    updatePlayer: PropTypes.func,
  }

  state = {
    name: '',
    position: '',
    imageUrl: '',
  }

  componentDidMount() {
    const { playerToEdit, editMode } = this.props;
    if (editMode) {
      this.setState({ name: playerToEdit.name, imageUrl: playerToEdit.imageUrl, position: playerToEdit.position });
    }
  }

  addPlayerEvent = (e) => {
    const { addPlayer } = this.props;
    e.preventDefault();
    const newPlayer = {
      name: this.state.name,
      position: this.state.position,
      imageUrl: this.state.imageUrl,
      uid: authData.getUid(),
    };
    addPlayer(newPlayer);
    this.setState({ name: '', position: '', imageUrl: '' });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  updatePlayerEvent = (e) => {
    e.preventDefault();
    const { updatePlayer, playerToEdit } = this.props;
    const updatedPlayer = {
      name: this.state.name,
      imageUrl: this.state.imageUrl,
      position: this.state.position,
      uid: playerToEdit.uid,
    };
    updatePlayer(playerToEdit.id, updatedPlayer);
  }

  render() {
    const { editMode } = this.props;

    return (
      <div>
      <form className='PlayerForm col-6 offset-3'>
        <div className="form-group">
          <label htmlFor="playerName">Player's Name:</label>
          <input
          type="text" className="form-control" id="playerName" placeholder="Enter name"
          value= {this.state.name}
          onChange={this.nameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="playerImageUrl">Player Image Url:</label>
          <input
          type="text" className="form-control" id="playerImageUrl"
          value={this.state.imageUrl}
          onChange={this.imageChange} />
        </div>
        <div className="form-group">
          <label htmlFor="playerPosition">Player's Position:</label>
          <input
          type="text" className="form-control" id="playerPosition" placeholder="Enter position" value= {this.state.position}
          onChange={this.positionChange} />
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.addPlayerEvent}>Add Player</button>
        </div>
        {
            (editMode) ? (<button className="btn btn-danger" onClick={this.updatePlayerEvent}>Update Player</button>)
              : (<button className="btn btn-secondary" onClick={this.updatePlayerEvent}>Edit Player</button>)
          }
      </form>
    </div>
    );
  }
}

export default PlayerForm;
