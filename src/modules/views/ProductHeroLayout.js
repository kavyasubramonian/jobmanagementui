import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = (themes) => ({
  root: {
    color: themes.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [themes.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  container: {
    marginTop: themes.spacing(3),
    marginBottom: themes.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 1440,
    
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: themes.palette.common.black,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },
  arrowDown: {
    position: 'absolute',
    bottom: themes.spacing(4),
  },
});

function ProductHeroLayout(props) {
  const { backgroundClassName, children, classes } = props;

  const scrollWin = () => {
    window.scrollTo({
      top: 620,
      behavior: 'smooth'     
  })
}
  
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          style={{position:"absolute", top:"0px", zIndex: '0'}}
          src="https://i.imgur.com/pXM5Gxz.jpg"
          alt="wonder"
          width="1519"
          height="607"
        />
        {children}
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} />
        <img
          className={classes.arrowDown}
          src="/static/themes/onepirate/productHeroArrowDown.png"
          height="16"
          width="12"
          alt="arrow down"
          onClick={scrollWin}
        />
      </Container>
    </section>
  );
}

ProductHeroLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHeroLayout);
