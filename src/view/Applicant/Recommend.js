import React from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

import { Button, CardContent, Typography, Grid, Divider } from '@material-ui/core';

const useStyles = (theme) => ({
	root: {
		flexGrow: 1
	},
	bg: {
		margin: theme.spacing(1),
		paddingLeft: theme.spacing(60)
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
		marginBottom: theme.spacing(0)
	},
	margin: {
		margin: theme.spacing(2)
	}
});

class Jobs extends React.Component {
	constructor(props) {
		super(props);
		this.temp = localStorage.getItem('token');
	}
	state = { rows: [] };

	async getData() {
		//console.log(temp);
		try {
			const results = await fetch(this.props.path, {
				crossDomain: true,
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: this.temp
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

	async postData(id) {
		//console.log(temp);
		let path = '/apply/' + id;
		try {
			const results = await fetch(path, {
				crossDomain: true,
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: this.temp
			});
		} catch (err) {
			console.log(err);
		}
	}

	handleSubmit(id) {
		console.log(id);
		this.postData(id);
	}

	renderJobs() {
		const { classes } = this.props;

		this.getData();
		//console.log(this.state.rows);
		return (
			<React.Fragment>
				<div className={classes.bg2}>
					<Grid container spacing={0} direction="column" alignItems="center">
						<Grid item xs />
						<Typography className={classes.typo} component="h1" variant="h2">
							Recommended Jobs
						</Typography>
					</Grid>
				</div>
				<Divider />
				<Grid container spacing={0} direction="column" alignItems="center">
					<Grid item xs={12} />
					<Card className={classes.margin}>
					{this.state.rows.map((row) => (
						<Card>
							<div className="flex-container">
								<CardContent>
									<Grid container spacing={0}>
										<Grid item>
											<Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
												{row.compan_name}
											</Typography>
											<Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
												{row.title}
											</Typography>
											<Typography variant="body2" component="p">
												{row.position} | {row.location}
											</Typography>
											<Typography variant="body2" component="p">
												Apply By: {row.apply_by} | Starting Date: {row.starting_date}
												<br />
												Duration: {row.duration} months | Stipend: {row.stipend}
												<br />
											</Typography>
											<div className={classes.button}>
												<div style={{ marginTop: 10 }}>
												</div>
												<Button
													onClick={(e) => this.handleSubmit(row.id)}
													size="small"
													color="primary"
													variant="contained"
													style={{
														marginTop: 20,
														borderRadius: 0,
														fontFamily: 'Montserrat',
														paddingTop: 5,
														paddingBottom: 5,
														paddingRight: 20,
														paddingLeft: 20
													}}
												>
													Apply
												</Button>
											</div>
										</Grid>
										<div
											style={{
												marginLeft: 100,
												alignItems: 'center',
												justifyContent: 'center'
											}}
										>
											<img
												src={'data:image/jpg;base64,' + row.image.data}
												alt="logo"
												width="100"
												height="100"
											/>
										</div>
									</Grid>
								</CardContent>
							</div>
						</Card>
					))}
					</Card>
				</Grid>

				<Divider />
				<div className={classes.bg}>
					<Paper elevation={0} className={classes.margin}>
						<Grid container spacing={0} justify="center" direction="column" alignItems="center">
							<Grid item xs />
							<Button className={classes.typo2} variant="outlined" component={RouterLink} to="/search">
								Apply for more Jobs
							</Button>
						</Grid>
					</Paper>
				</div>
			</React.Fragment>
		);
	}

	render() {
		return this.renderJobs();
	}
}

export default withStyles(useStyles)(Jobs);
