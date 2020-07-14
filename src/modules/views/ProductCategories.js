import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import { useHistory } from 'react-router-dom';

const styles = (themes) => ({
  root: {
    marginTop: themes.spacing(8),
    marginBottom: themes.spacing(4),
  },
  images: {
    marginTop: themes.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [themes.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: themes.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: themes.palette.common.black,
    opacity: 0.5,
    transition: themes.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${themes.spacing(2)}px ${themes.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: themes.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: themes.transitions.create('opacity'),
  },
});


function ProductCategories(props) {
  const { classes } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push("/search");
}

  const images = [
    {
      url:
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      title: 'Web Development',
      width: '40%',
    },
    {
      url:
        'https://specials-images.forbesimg.com/imageserve/5d81104122254b0008e0a8ce/960x0.jpg',
      title: 'VR/AR',
      width: '20%',
    },
    {
      url:
        'https://cdn-images-1.medium.com/max/1000/1*p6ahiOqtwW6mxgk-WCDvlg.jpeg',
      title: 'Machine Learning',
      width: '40%',
    },
    {
      url:
        'https://images.idgesg.net/images/idge/imported/imageapi/2019/07/26/15/security_abstract_istock-100803344-large.jpg',
      title: 'Cybersecurity',
      width: '38%',
    },
    {
      url:
        'https://images.tech.co/wp-content/uploads/2019/12/19112253/future-gaming-708x400.jpg',
      title: 'Game Development',
      width: '38%',
    },
    {
      url:
        'https://www.verdict.co.uk/wp-content/uploads/2019/01/shutterstock_1137339098-1.jpg',
      title: 'Android',
      width: '24%',
    },
    {
      url:
        'https://buddy.works/guides/thumbnails/docker-cover.png',
      title: 'DevOps',
      width: '40%',
    },
    {
      url:
        'https://s27389.pcdn.co/wp-content/uploads/2020/03/three-new-ways-doing-business-enabled-blockchain.jpeg',
      title: 'Blockchain',
      width: '20%',
    },
    {
      url:
        'https://www.channelfutures.com/files/2019/12/10-Cloud-Computing-2019-MA-877x432.jpg',
      title: 'Cloud Computing',
      width: '40%',
    },
  ];


  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Explore popular listings
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            onClick={handleClick}
            >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
