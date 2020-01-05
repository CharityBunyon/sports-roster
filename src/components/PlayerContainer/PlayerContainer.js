import React from 'react';
import Player from '../Player/Player';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';
import PlayerForm from '../PlayerForm/PlayerForm';

class PlayerContainer extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => {
        this.setState({ players });
      })
      .catch((errFromPlayersContainer) => console.error({ errFromPlayersContainer }));
  }

  deleteSinglePlayer = (playerId) => {
    playerData.deletePlayerById(playerId)
      .then(() => {
        this.getPlayers();
      })
      .catch((errorFromDeleteSinglePlayer) => console.error({ errorFromDeleteSinglePlayer }));
  }

  addPlayer = (newPlayer) => {
    const uid = authData.getUid();
    playerData.addNewPlayer(newPlayer)
      .then(() => {
        this.getPlayers(uid);
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
    <div>
      <PlayerForm addPlayer={this.addPlayer} />
        <div className="d-flex flex-wrap justify-content-between">
          {this.state.players.map((player) => (<Player key={player.id} player={player} deleteSinglePlayer={this.deleteSinglePlayer} />))}
        </div>
    </div>
    );
  }
}

export default PlayerContainer;
