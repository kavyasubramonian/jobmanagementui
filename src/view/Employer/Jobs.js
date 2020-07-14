import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Title from '../Titles';
import EmpCard from '../../components/Cards/EmpCard';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Card, Paper, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
	root: {
		flexGrow: 1
	},
	bg: {
		margin: theme.spacing(1),
		paddingRight: theme.spacing(20)
	},
	bg2: {
		marginBottom: theme.spacing(2)
	},
	title: {
		fontSize: 14
	},

	btn: {
		padding: theme.spacing(1.5),
		minWidth: 400,
		fontFamily: 'Montserrat',
		fontSize: 18,
		fontWeight: 600
	},

	typo: {
		fontFamily: 'Montserrat',
		padding: theme.spacing(2)
	},
	typo2: {
		fontFamily: 'Montserrat',
		color: '#282828',
		padding: theme.spacing(2),
		marginBottom: theme.spacing(1)
    },
    margin: {
        marginTop: theme.spacing(2)
    },
});

class Jobs extends React.Component {
	constructor(props) {
		super(props);
		this.temp = localStorage.getItem('token');
	}
	state = { rows: [] };

	async getData() {
		let temp = localStorage.getItem('token');

		//console.log(temp);
		try {
			const results = await fetch('/jobs/me', {
				crossDomain: true,
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: temp
			});

			//console.log("results", results);
			const rows = await results.json();
			//console.log("data", rows);
			this.setState({ rows });
			//console.log(this.state.rows);
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		const { classes } = this.props;
		this.getData();
		//console.log(this.state.rows);
		return (
			<React.Fragment>
				<div className={classes.bg2}>
                    <Grid container spacing={2} direction="column" alignItems="center">
						<Grid item xs />
						    <Typography className={classes.typo} component="h1" variant="h2">
							    Created Jobs
						    </Typography>
                    </Grid>
                </div>
                <Divider />
				<Grid container spacing={0} direction="column" justify="center" alignItems="center">
					<Grid item xs={12} />
						{this.state.rows.map((row) => (
							<Grid className={classes.bg} container alignItems="center" spacing={2} direction="column">
							<Card>
							<EmpCard
								id={row.id}
								comp={row.title}
								dur={row.duration}
								loc={row.location}
								sti={row.stipend}
								cat={row.category}
								pos={row.position}
								std={row.starting_date}
								app={row.apply_by}
								abt={row.about_work}
								per={row.perks}
								sk={row.skills_req}
							/>
							</Card>
							</Grid>
						))}
</Grid>
                <div className={classes.bg}>
					<Paper elevation={0} className={classes.margin}>
						<Grid container spacing={0} direction="column" alignItems="center">
							<Grid item xs={3} />
							<Button className={classes.typo2} variant="outlined" component={RouterLink} to="/CreateJobs">
								Create more jobs
							</Button>
						</Grid>
					</Paper>
				</div>
			</React.Fragment>
		);
	}
}

export default withStyles(useStyles)(Jobs);
