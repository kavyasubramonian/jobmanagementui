import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
	root: {
		display: 'flex',
		overflow: 'hidden',
		backgroundColor: theme.palette.secondary.light
	},
	container: {
		marginTop: theme.spacing(20),
		marginBottom: theme.spacing(20),
		display: 'flex',
		position: 'relative'
	},
	item: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(0, 5)
	},
	image: {
		height: 55
	},
	title: {
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(5)
	},
	maintitle: {
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(10)
	},
	curvyLines: {
		pointerEvents: 'none',
		position: 'absolute',
		top: -180
	},
	arrowDown: {
		position: 'absolute',
		top: theme.spacing(160),
		right: theme.spacing(95),
	  },
});

function ProductValues(props) {
	const { classes } = props;

	const scrollWin = () => {
		window.scrollTo({
		  top: 1350,
		  behavior: 'smooth'     
	  })
	}

	return (
		<section className={classes.root}>
			<Container className={classes.container}>
				<img
					src="/static/themes/onepirate/productCurvyLines.png"
					className={classes.curvyLines}
					alt="curvy lines"
				/>
				<Typography variant="h4" marked="center" className={classes.maintitle} component="h2">
					Features
				</Typography>
				<Grid container spacing={5}>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<img
								className={classes.image}
								src="/static/themes/onepirate/productValues1.svg"
								alt="suitcase"
							/>
							<Typography variant="h6" className={classes.title}>
								The best jobs
							</Typography>
							<Typography variant="h5">
								{
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
								}
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<img
								className={classes.image}
								src="/static/themes/onepirate/productValues2.svg"
								alt="graph"
							/>
							<Typography variant="h6" className={classes.title}>
								New experiences
							</Typography>
							<Typography variant="h5">
								{'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<img
								className={classes.image}
								src="/static/themes/onepirate/productValues3.svg"
								alt="clock"
							/>
							<Typography variant="h6" className={classes.title}>
								Exclusive Offers
							</Typography>
							<Typography variant="h5">
								{
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
								}
							</Typography>
						</div>
					</Grid>
				</Grid>
			</Container>
			<div>
			<img
			className={classes.arrowDown}
			src="/static/themes/onepirate/productHeroArrowDown.png"
			height="16"
			width="12"
			alt="arrow down"
			onClick={scrollWin}
		  />
			</div>
		</section>
	);
}

ProductValues.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
