import React, { useState } from 'react';
import { Button, List, ListItemText, ListItem } from '@material-ui/core';

import AddPopup from 'components/AddPopup';
import FindPopup from 'components/FindPopup';

import useUser from 'hooks/store/useUser';

import UserForm from 'forms/UserForm';
import UsersRepository from 'repositories/UsersRepository';

const MODES = {
  ADD: 'add',
  FIND: 'find',
  NONE: 'none',
};

const Main = () => {
  const [mode, setMode] = useState(MODES.NONE);
  const { user, loadUser } = useUser();

  const handleOpenAddPopup = () => {
    setMode(MODES.ADD);
  };

  const handleOpenFindPopup = () => {
    setMode(MODES.FIND);
  };

  const handleClose = () => {
    setMode(MODES.NONE);
  };

  const handleUserCreate = (params) => {
    const attributes = UserForm.attributesToSubmit(params);
    return UsersRepository.create(attributes).then(({ data: { user } }) => {
      setMode(MODES.NONE);
      loadUser(user);
    });
  };

  const handleUserLoad = (id) =>
    UsersRepository.show(id).then(({ data: { user } }) => {
      setMode(MODES.NONE);
      loadUser(user);
    });

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpenAddPopup}>
        Add new user
      </Button>
      <Button variant="contained" color="primary" onClick={handleOpenFindPopup}>
        Load user
      </Button>
      {mode === MODES.ADD && <AddPopup onClose={handleClose} onCreateUser={handleUserCreate} />}
      {mode === MODES.FIND && <FindPopup onClose={handleClose} onLoadUser={handleUserLoad} />}
      <List>
        <ListItem>
          <ListItemText primary={`id: ${user.id}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`name: ${user.name}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`e-mail: ${user.email}`} />
        </ListItem>
      </List>
    </>
  );
};

export default Main;
