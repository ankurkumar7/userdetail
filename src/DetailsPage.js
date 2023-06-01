import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedUser = useSelector(state => state.selectedUser);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_SELECTED_USER', payload: data.data });
      });
  }, [dispatch, id]);

  if (!selectedUser) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div><h1>User Details</h1></div>

      <div className='user-block'>

        <div>
          <img src={selectedUser.avatar} alt="Avatar" />
        </div>
        <ul>
          <li>First Name: {selectedUser.first_name}</li>
          <li>Last Name: {selectedUser.last_name}</li>
          <li>Email: {selectedUser.email}</li>
        </ul>
      </div>
    </>
  );
};

export default DetailsPage;
