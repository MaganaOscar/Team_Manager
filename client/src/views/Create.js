import React, {useState} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import PlayerForm from '../components/PlayerForm';

const Create = () => {
    const [errors, setErrors] = useState([]);

    const createNewPlayer = (player) => {
        axios.post('http://localhost:8000/api/player', player)
            .then((res) => navigate('/players/list'))
            .catch(err => {
                console.log(err.response)
                const errorResponse = err.response.data.error.errors;
                console.log(errorResponse)
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <PlayerForm errors={errors} initName="" initPreferredPos="" onSubmitProp={createNewPlayer}/>
            <p></p>
        </div>
    )
}

export default Create;