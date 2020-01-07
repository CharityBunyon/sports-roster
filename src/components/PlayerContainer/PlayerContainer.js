import React from 'react';
import Player from '../Player/Player';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';
import PlayerForm from '../PlayerForm/PlayerForm';
import './PlayerContainer.scss';

class PlayerContainer extends React.Component {
  state = {
    players: [],
    showPlayerForm: false,
    playerToEdit: {},
    editMode: false,
  }

  setShowPlayerForm = () => {
    this.setState({ showPlayerForm: true });
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
      .catch((errorFromAddPlayer) => console.error(errorFromAddPlayer));
  }

  updatePlayer = (playerId, updatedPlayer) => {
    playerData.updatePlayer(playerId, updatedPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ editMode: false, showPlayerForm: false });
      })
      .catch((errorFromUpdatePlayer) => console.error({ errorFromUpdatePlayer }));
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showPlayerForm: true });
  }

  setPlayerToEdit = (player) => {
    this.setState({ playerToEdit: player });
  }

  render() {
    return (

      <div>
        <button className="btn btn-outline-dark add-player-btn" onClick={this.setShowPlayerForm}>Add New Player</button>
        {
          this.state.showPlayerForm && <PlayerForm addPlayer={this.addPlayer} editMode={this.state.editMode} playerToEdit={this.state.playerToEdit} updatePlayer={this.updatePlayer}/>
        }
        <div className=" container d-flex flex-wrap justify-content-between">
         {this.state.players.map((player) => (<Player key={player.id} player={player} deleteSinglePlayer={this.deleteSinglePlayer} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit}/>))}
        </div>
      </div>
    );
  }
}

export default PlayerContainer;
