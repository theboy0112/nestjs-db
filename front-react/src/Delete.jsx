import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Delete({ id }) {
  const navigate = useNavigate();

  function handleDelete() {
    axios.delete(`http://localhost:4003/users/${id}`)
      .then(res => {
        console.log('Deleted:', res.data);
        navigate('/'); 
      })
      .catch(err => console.log(err));
  }
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Delete