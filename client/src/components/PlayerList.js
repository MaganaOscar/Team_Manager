import React from 'react';
import { Link } from '@reach/router';

const PlayerList = props => {
    const {removeFromDom, deletePlayerProp, players} = props;

    const deletePlayer = playerId => {
        deletePlayerProp(playerId, removeFromDom);
    }

    return (
        <div>
            {players.map((player,idx) => {
                return (
                    <div key={idx}>
                        <p>{player.name} {player.preferredPos}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PlayerList;