import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
};

class SimpleCard extends React.Component {
  state = {
    showTerm: true,
  }

  handleFlip = () => {
    this.setState({ showTerm: !this.state.showTerm });
  }

render() {
  const { classes } = this.props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {this.state.showTerm ? "Term" : "Definition"}
        </Typography>
        {
          <Typography variant="h5" component="h5">
            {this.state.showTerm ? this.props.term : this.props.definition}
          </Typography>
        }
      </CardContent>
      <CardActions>
        <Button onClick={this.handleFlip} size="small">Get {this.state.showTerm ? "Definition" : "Term"}</Button>
      </CardActions>
    </Card>
  );
}

}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
