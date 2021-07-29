import React from 'react';
import User from './User';
import { ListGroup } from 'react-bootstrap';
const UsersList = ({ users }) => {
  return (
    <ListGroup>
      <ListGroup.Item>{users && users.map((user) => <User key={user.id} {...user} />)}</ListGroup.Item>
    </ListGroup>

  );
};

export default UsersList;