import React from 'react';
import Player from '../Player/Player';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';

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

  render() {
    return (
      <div>
        {this.state.players.map((player) => (<Player key={player.id} player={player}/>))}
      </div>
    );
  }
}

export default PlayerContainer;
