import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import YouTube from 'react-youtube';

const styles = {
  card: {
    maxWidth: '100%',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  media: {
    height: 140
  }
};

class MediaCard extends React.Component {
  state = {
    currentVidIndex: 0,
  }

  handleNextVid = () => {
    this.setState({ currentVidIndex: (this.state.currentVidIndex+1)%5}) ;
  }

  render() {
    const opts = {
      height: '350',
      width: '600',
    };

    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {this.props.query}
          </Typography>
        </CardContent>
        <YouTube
          videoId={this.props.videoIds[this.state.currentVidIndex]}
          opts={opts}
        />
        <CardActions>
          <Button size="small" color="primary" onClick={this.handleNextVid}>
            Next Video
          </Button>
        </CardActions>
      </Card>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
