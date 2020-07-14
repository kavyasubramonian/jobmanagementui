import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src="https://designshack.net/wp-content/uploads/placeholder-image-368x246.png"
          alt="graph"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            First come, first served. Our offers are in limited quantities, so be quick.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
