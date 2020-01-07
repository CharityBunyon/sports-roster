import './Player.scss';
import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deleteAPlayer: PropTypes.func,
    setEditMode: PropTypes.func,
    setPlayerToEdit: PropTypes.func,
  }

  deleteAPlayer = (e) => {
    e.preventDefault();
    const { deleteSinglePlayer, player } = this.props;
    deleteSinglePlayer(player.id);
  }

  setEditMode = (e) => {
    e.preventDefault();
    const { setEditMode, setPlayerToEdit, player } = this.props;
    setEditMode(true);
    setPlayerToEdit(player);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Player col-4">
      <div className="card">
      <img src={player.imageUrl} className="card-img-top playerImg" alt="{player.name}"/>
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
          <div className="d-flex justify-content-between">
          <button className="btn btn-outline-dark" onClick={this.deleteAPlayer}>Delete</button>
          <button className="btn btn-outline-dark" onClick={this.setEditMode}>Edit</button>
          </div>
      </div>
    </div>
  </div>

    );
  }
}

export default Player;
