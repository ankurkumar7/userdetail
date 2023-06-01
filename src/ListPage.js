import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ListPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const currentPage = useSelector(state => state.currentPage);
  const totalPage = useSelector(state => state.totalPage);

  useEffect(() => {
    const url = `https://reqres.in/api/users?page=${currentPage}&per_page=5`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_USERS', payload: data.data });
        dispatch({ type: 'SET_TOTAL_PAGE', payload: data.total_pages });
      });
  }, [currentPage]);


  const setPageData = (action) => {
    console.log(action, currentPage)
    if(action == 'previous'){
        if(currentPage > 1){
            dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage - 1 });
        }
    } else {
        if(currentPage < totalPage){
            dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage + 1 });
        }
    }
  }

  return (
    <div className='container'>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/details/${user.id}`}>{user.first_name} {user.last_name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPageData('previous') }>Previous</button>
        <button onClick={() => setPageData('next') }>Next</button>
      </div>
    </div>
  );
};

export default ListPage;
