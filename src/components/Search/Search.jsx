import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./Search.css";

const Search = () => {
  // initialize dispatch as variable
  const dispatch = useDispatch();

  // declare local state
  const [search, setSearch] = useState("");

  // sends search query to saga to populate related gifs on button click
  function handleSubmit(event) {
    event.preventDefault();
    console.log("in handleSubmit");

    dispatch({ type: "GET_GIFS", payload: search });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='search-form'>
        <TextField
          placeholder='search for a gif!'
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          size='small'
        />

        <Button type='submit' variant='contained'>
          Search
        </Button>
      </form>
    </>
  );
};

export default Search;
