import React from 'react';
import '../../components/SignUp/SignUp.css';
import {
	CardContent,
	CardActions,
	Grid,
	Button,
	TextField,
	Typography,
	Paper,
	Divider,
	Dialog,
	DialogContent,
	DialogActions
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
	root: {
		flexGrow: 1
	},
	bg: {
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
		padding: theme.spacing(2),
		marginTop: theme.spacing(2)
	},
	typo2: {
		fontFamily: 'Montserrat',
		color: '#282828',
		padding: theme.spacing(2),
		marginBottom: theme.spacing(1)
	},
	margin: {
		marginTop: theme.spacing(2)
	}
});

class Create_Jobs extends React.Component {
	constructor(props) {
		super(props);

		this.postData = this.postData.bind(this);
	} //end constructor
	state = {
		data: [],
		owner: '',
		title: '',
		location: '',
		category: '',
		position: '',
		starting_date: '',
		duration: 0,
		stipend: 0,
		apply_by: '',
		about_work: '',
		skills_req: '',
		perks: '',
		open: false
	};

	componentDidMount() {}

	handleClose(e) {
		this.setState({ open: false });
	}

	async getData() {
		//console.log(JSON.stringify(localStorage.getItem('token')));
		//console.log(JSON.parse(localStorage.getItem('token')));
		let temp = localStorage.getItem('token');

		//console.log(temp);
		try {
			//console.log(JSON.parse(localStorage.getItem('token')));
			const results = await fetch('/users/me', {
				crossDomain: true,
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: temp
			});

			//console.log("results", results);
			const data = await results.json();
			//console.log("data", data);
			let owner = data.id;
			//      this.props.history.push("/EmployerDashboard");

			this.setState({
				owner
			});
			//console.log(this.state)
		} catch (err) {
			//console.log(err);
		}
	}

	async postData() {
		//console.log(this.state);
		try {
			const results = await fetch('/jobs', {
				crossDomain: true,
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				// body: JSON.stringify(this.state),
				body: JSON.stringify(this.state)
			});

			console.log('results', results);
			const data = await results.json();
			console.log('data', data);

			this.props.history.push('/EmployerDashboard');

			this.setState({
				owner: '',
				title: '',
				location: '',
				category: '',
				position: '',
				starting_date: '',
				duration: 0,
				stipend: 0,
				apply_by: '',
				about_work: '',
				skills_req: '',
				perks: ''
			});
		} catch (err) {
			console.log(err);
		}
	}

	change = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}; //end change

	onSubmit = (e) => {
		e.preventDefault();
		this.postData();
		this.setState({ open: true });

		//alert('Job Posted Successfully!');
	};

	render() {
		this.getData();
		const { classes } = this.props;

		return (
			<div>
				<div className={classes.bg}>
					<Paper elevation={0}>
						<Grid container spacing={0} direction="column" alignItems="center">
							<Grid item xs />
							<Typography className={classes.typo} component="h1" variant="h2">
								Create New Jobs
							</Typography>
						</Grid>
					</Paper>
				</div>
				<Divider />
				<form autoComplete="off" noValidate>
					<CardContent>
						<Grid container spacing={3}>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Title"
									margin="normal"
									name="title"
									onChange={(e) => this.change(e)}
									required
									value={this.state.title}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Location"
									margin="normal"
									name="location"
									onChange={(e) => this.change(e)}
									required
									value={this.state.location}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Category"
									margin="normal"
									name="category"
									onChange={(e) => this.change(e)}
									required
									value={this.state.category}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Position"
									margin="normal"
									name="position"
									onChange={(e) => this.change(e)}
									required
									value={this.state.position}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									InputLabelProps={{ shrink: true }}
									label="Starting Date"
									margin="normal"
									name="starting_date"
									type="date"
									onChange={(e) => this.change(e)}
									required
									value={this.state.starting_date}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									InputLabelProps={{ shrink: true }}
									fullWidth
									label="Apply by"
									margin="normal"
									name="apply_by"
									onChange={(e) => this.change(e)}
									required
									type="date"
									value={this.state.apply_by}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Duration (in months)"
									margin="normal"
									name="duration"
									type="number"
									onChange={(e) => this.change(e)}
									required
									value={this.state.duration}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Stipend"
									margin="normal"
									name="stipend"
									type="number"
									onChange={(e) => this.change(e)}
									required
									value={this.state.stipend}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="About Work"
									margin="normal"
									multiline
									name="about_work"
									onChange={(e) => this.change(e)}
									required
									value={this.state.about_work}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Skills Required"
									margin="normal"
									name="skills_req"
									onChange={(e) => this.change(e)}
									required
									value={this.state.skills_req}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Perks"
									margin="normal"
									name="perks"
									onChange={(e) => this.change(e)}
									required
									value={this.state.perks}
									variant="outlined"
								/>
							</Grid>
						</Grid>
					</CardContent>
					<CardActions>
						<Grid
							container
							spacing={0}
							direction="column"
							alignItems="center"
							style={{ minHeight: '10vh' }}
						>
							<Grid item xs>
								<Button
									onClick={(e) => this.onSubmit(e)}
									color="primary"
									variant="contained"
									className={classes.btn}
								>
									Create Job
								</Button>
							</Grid>
						</Grid>
						<Dialog
							maxWidth="xs"
							fullWidth={true}
							open={this.state.open}
							keepMounted
							onClose={this.handleClose}
							aria-labelledby="alert-dialog-slide-title"
							aria-describedby="alert-dialog-slide-descript"
						>
							<DialogContent ref={this.setWrapperRef}>
								<Typography component="h3" variant="h2">
									Job created
								</Typography>
							</DialogContent>
							<DialogActions>
								<Button onClick={(e) => this.handleClose(e)} color="primary">
									Close
								</Button>
							</DialogActions>
						</Dialog>
					</CardActions>
				</form>
			</div>
		);
	}
}

export default withStyles(useStyles)(Create_Jobs);
