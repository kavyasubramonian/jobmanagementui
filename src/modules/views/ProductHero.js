import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import './ProductHero.css';

const backgroundImage = 'https://i.imgur.com/pXM5Gxz.jpg';

const styles = (themes) => ({
	background: {
		backgroundImage: `url(${backgroundImage})`,
		backgroundColor: '#7fc7d9', // Average color of the background image.
		backgroundPosition: 'center',
		background: themes.palette.common.black
	},
	button: {
		minWidth: 250,
		fontSize: 18,
		marginTop: themes.spacing(2),
		padding: themes.spacing(2,2),
		color: 'white'
	},
	button2: {
		minWidth: 250,
		fontSize: 18,
		marginTop: themes.spacing(2),
		marginBottom: themes.spacing(2),
		padding: themes.spacing(2,2),
		color: 'white'
	},
	h5: {
		marginBottom: themes.spacing(4),
		marginTop: themes.spacing(0),
		[themes.breakpoints.up('')]: {
			marginTop: themes.spacing()
		},
	},
	more: {
		margin: themes.spacing(2)
	}
});

function ProductHero(props) {
	const { classes } = props;

	
	return (
		<ProductHeroLayout backgroundClassName={classes.background}>
			{/* Increase the network loading priority of the background image. */}
			<img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
			<Typography
				style={{ color: '#ffffff', zIndex: '100' }}
				className={classes.h5}
				align="center"
				variant="h2"
				marked="center"
			>
				Portal
			</Typography>
			<Typography style={{ color: '#eeeeee', zIndex: '100' }} align="center" variant="h5" className={classes.h5}>
				Find the jobs you've always wanted in a single click!
			</Typography>

			<Button
				color="secondary"
				variant="contained"
				size="large"
				className={classes.button}
				component="a"
				href="/SignUp"
			>
				Register
			</Button>

			<Button
				color="secondary"
				variant="contained"
				size="large"
				className={classes.button2}
				component="a"
				href="/search"
			>
				Search for Jobs
			</Button>

			<Typography variant="body2" style={{ color: '#cccccc', zIndex: '100' }} className={classes.more}>
				Scroll down for more
			</Typography>
		</ProductHeroLayout>
	);
}

ProductHero.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHero);
