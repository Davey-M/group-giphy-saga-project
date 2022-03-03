import {TextField, Button} from '@mui/material/Button';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const Search = () => {

    // initialize dispatch as variable
    const dispatch = useDispatch();

    // declare local state
    const [search, setSearch] = useState('');

    // sends search query to saga to populate related gifs on button click
    function handleSubmit() {
        console.log('in handleSubmit');

        dispatch({type: 'GET_GIFS', payload: {search: search}});
    }

    return (
        <>
         <h1>Search</h1>
         <form onSubmit={handleSubmit}>
            <TextField
                placeholder="search for a gif!"
                onChange={(event) => {setSearch(event.target.value)}}
            />

            <Button type="submit" type="contained">Search</Button>
         </form>
        </>
    )
}

export default Search;