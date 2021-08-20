import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { has } from 'ramda';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

import useStyles from './useStyles';

const FindPopup = ({ onClose, onLoadUser }) => {
  const [id, setId] = useState('');
  const [isSaving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});
  const styles = useStyles();

  const handleLoad = () => {
    setSaving(true);

    onLoadUser(id).catch((error) => {
      setSaving(false);
      setErrors(error || {});

      if (error instanceof Error) {
        alert(`Creation Failed! Error: ${error.message}`);
      }
    });
  };

  const handleChangeTextField = ({ target: { value } }) => setId(value);

  return (
    <Modal className={styles.modal} open onClose={onClose}>
      <Card className={styles.root}>
        <CardHeader
          action={
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          }
          title="Find User"
        />
        <CardContent>
          <div className={styles.form}>
            <TextField
              error={has('id', errors)}
              helperText={errors.name}
              name="id"
              value={id}
              onChange={handleChangeTextField}
              label="ID"
              required
              margin="dense"
            />
          </div>
        </CardContent>
        <CardActions className={styles.actions}>
          <Button disabled={isSaving} variant="contained" onClick={handleLoad} size="small" color="primary">
            Find
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

FindPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onLoadUser: PropTypes.func.isRequired,
};

export default FindPopup;
