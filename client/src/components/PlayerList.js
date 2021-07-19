import React from 'react';

const PlayerList = props => {
    const {removeFromDom, deletePlayerProp, players} = props;

    const deletePlayer = (playerId, playerName) => {
        let confirmation = window.confirm(`Are you sure you want to delete ${playerName}?`);
        if (confirmation) {
            deletePlayerProp(playerId, removeFromDom);
        }
    }

    return (
        <div>
            <table style={{width: '100%'}}>
                <tr>
                    <th>Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
                {players.map((player,idx) => {
                    return (
                        <tr key={idx}>
                            <td>{player.name}</td>
                            <td>{player.preferredPos}</td>
                            <td><button onClick={(e)=>{deletePlayer(player._id, player.name)}}>Delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default PlayerList;