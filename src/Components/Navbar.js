import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';


const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  theme: {
    backgroundColor: "#0064a4",
  },
  button: {
  },
};

class ButtonAppBar extends React.Component {
  state = {
    helpOpen: false,
  }

  handleHelpOpen = () => {
    this.setState({ helpOpen: true });
  };

  handleHelpClose = () => {
    this.setState({ helpOpen: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.theme}>
          <Toolbar>
            <img src="../logo.png" alt="logo" style={{borderRadius: 30}}/>
            <Typography variant="h4" color="inherit" className={classes.grow}>
              <b>ZotNotes</b>
            </Typography>
            <Button mini variant="fab" color="secondary" aria-label="Add" className={classes.button}
                    onClick={this.handleHelpOpen}
            >
              <HelpIcon />
            </Button>
          </Toolbar>
        </AppBar>

        <Dialog
          open={this.state.helpOpen}
          onClose={this.handleHelpClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"How To Use"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <b>Bold</b> words to search for related youtube videos. <u>Underline</u> words as terms and <i>italicize</i> words as definitions of flashcards.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleHelpClose} color="primary" autoFocus>
              Thanks!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
