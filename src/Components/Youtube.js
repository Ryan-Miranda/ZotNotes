import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
  render() {
    const opts = {
      height: '350',
      width: '600',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            Query
          </Typography>
        </CardContent>
        <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
          onReady={this._onReady}
        />
        <CardActions>
          <Button size="small" color="primary">
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
