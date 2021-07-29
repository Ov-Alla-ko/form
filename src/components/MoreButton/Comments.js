import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import UsersList from './UsersList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const Comments = () => {
  const [users, setUsers] = useState([]);


  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`
        );

        setUsers((users) => [...users, ...response.data.data]);


        setErrorMsg('');
      } catch (error) {
        setErrorMsg('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);

  };



  return (

    <Router>
      <Switch>
        <Route path="/"> <UsersList users={users} /></Route>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <div className="load-more">
        </div></Switch>
      <Link to="/comments"><Button variant="outline-dark" onClick={loadMore} >
        {isLoading ? 'Loading...' : 'Load More'}
      </Button> </Link>
    </Router>
  );
};

export default Comments;
