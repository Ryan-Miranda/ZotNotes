import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

// Components
import Tabs from "./Tabs.js";

const styles = theme => ({
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  button: {
    backgroundColor: "#ffd200"
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function StudyMaterial(props) {
  const { classes } = props;
  return (
    <div className={classes.buttonContainer}>
      <Tabs flashcards={props.flashcards}/>
      <Button size="large" variant="contained" className={classes.button}
              onClick={props.handleClick}
      >
        FIND STUDY MATERIAL
        <Icon className={classes.rightIcon}>chevron_right</Icon>
      </Button>
    </div>
  );
}

StudyMaterial.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudyMaterial);
