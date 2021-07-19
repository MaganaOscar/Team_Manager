import React, {useState} from 'react';
import {Link} from '@reach/router';

const PlayerForm = props => {
    const {initName, initPreferredPos, errors, onSubmitProp} = props;
    const [name, setName] = useState(initName);
    const [preferredPos, setPreferredPos] = useState(initPreferredPos);

    const onSubmitHandler = event => {
        event.preventDefault();
        onSubmitProp({name, preferredPos});
    }

    return (
        <div>
            <p><Link to="/players/list">Manage Players</Link> | <Link to="/status/game/1">Manage Player Status</Link></p>
            <div>
                <p><Link to="/players/list">List</Link> | <Link to="/players/addplayer">Add Player</Link></p>
                <div>
                    <h2>Add Player</h2>
                    <form onSubmit={onSubmitHandler}>
                        <div>
                            <label>Player Name: </label>
                            <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                            <label>Preferred Position: </label>
                            <input type="text" onChange={(e) => setPreferredPos(e.target.value)} value={preferredPos}/>
                            {errors.map((err, index) => <p style={{color: 'red'}} key={index}>*{err}</p>)}
                        </div>
                        {
                            name.length < 2 ?
                            <button disabled>Add Player</button>:
                            <button>Add Player</button>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PlayerForm;