import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Modal from '@material-ui/core/Modal';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: 'white',
    boxShadow: 2,
    padding: 24,
    top: 24,
    left: 'calc(50% - 150px)'
  },
};

class JovanottiAppBar extends Component {

  state = {
    eh: false,
    info: false,
  };

  handleOpenEh = () => {
    this.setState({ eh: true });
  };

  handleCloseEh = () => {
    this.setState({ eh: false });
  };

  handleOpenInfo = () => {
    this.setState({ info: true });
  };

  handleCloseInfo = () => {
    this.setState({ info: false });
  };

  render() {

    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.handleOpenInfo} style={styles.menuButton} color="inherit" aria-label="Menu">
              <img src='images/bolt.png' width={48} alt='tiportoviacon.me' />
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.flex}>
              tiportoviacon.me
          </Typography>
            <Button color="inherit" onClick={this.handleOpenEh}>EH?!</Button>
            <Modal
              aria-labelledby="eh-modal-title"
              aria-describedby="eh-modal-description"
              open={this.state.eh}
              onClose={this.handleCloseEh}
            >
              <div style={styles.paper}>
                <Typography variant="title" id="modal-title">
                  tiportoviacon.me
            </Typography>
                <Typography variant="subheading" id="eh-modal-description">
                  Nuove tecnologie per Lorenzo Jovanotti, un progetto di Matteo Manzinello
            </Typography>
              </div>
            </Modal>
            <Modal
              aria-labelledby="info-modal-title"
              aria-describedby="info-modal-description"
              open={this.state.info}
              onClose={this.handleCloseInfo}>
              <div style={styles.paper}>
                <Typography variant="title" id="modal-title">
                  Ti porto via con me...
            </Typography>
                <Typography variant="subheading" id="info-modal-description">
                  ...ribaleremo il mondo!
            </Typography>
              </div>
            </Modal>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

export default JovanottiAppBar;