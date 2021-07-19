import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import PlayerList from '../components/PlayerList';


const Main = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res=> {
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId));
    }

    const deletePlayer = (playerId) => {
        axios.delete('http://localhost:8000/api/player/' + playerId)
            .then(res => {
                removeFromDom(playerId)
            })
            .catch(err => console.log(err));
    }

    return (
        <>
        <div>
            <Link to="/players/list">Manage Players</Link>  |  <Link to="/status/game/1" >Manage Player Status</Link>
        </div>
        <div>
            <div>
                <Link to="/players/list">List</Link> | <Link to="/players/addplayer">Add Player</Link>
            </div>
            <div>
                {loaded &&
                    <PlayerList deletePlayerProp={deletePlayer} players={players} removeFromDom={removeFromDom}/>
                }
            </div>
        </div>
        </>
    );
}

export default Main;