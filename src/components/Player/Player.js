import './Player.scss';
import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    players: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Player col-3">
      <div className="card">
      <img src={player.imageUrl} className="card-img-top" alt="{player.name}"/>
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
          <div className="d-flex justify-content-between">
          <button className="btn btn-outline-dark" >X</button>
          <button className="btn btn-outline-dark" >Edit</button>
          </div>
      </div>
    </div>
  </div>

    );
  }
}

export default Player;
