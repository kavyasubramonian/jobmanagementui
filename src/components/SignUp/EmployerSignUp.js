import React from 'react';
import {
	Card,
	CardContent,
	CardActions,
	Divider,
	Grid,
	Button,
	TextField,
	Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SecondarySearchAppBar from '../../navbar2';

const styles = (theme) => ({
	root: {
		minWidth: 275
	},
	bg: {
		backgroundColor: '#eeeeee',
		padding: theme.spacing(1),
		paddingBottom: theme.spacing(8)
	},
	title: {
		fontSize: 14
	},
	foi: {
		marginTop: 0,
		marginRight: theme.spacing(36.25),
		marginLeft: -16
	},

	btn: {
		padding: theme.spacing(1.5),
		minWidth: 400,
		fontFamily: 'Montserrat',
		fontSize: 18,
		fontWeight: 600
	},
	margin: {
		marginTop: 100,
		marginLeft: 100,
		marginRight: 100,
		marginBottom: 100
	},
	typo: {
		fontFamily: 'Montserrat',
		padding: theme.spacing(2)
	},
	typo2: {
		fontFamily: 'Montserrat',
		color: '#bdbdbd',
		padding: theme.spacing(0, 0, 3)
	}
});

class EmployerSignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			owner: '',
			person_name: '',
			company_name: '',
			about: '',
			contact_no: 0,
			address: '',
			domain: ''
		};
		this.postData = this.postData.bind(this);
	} //end constructor

	componentDidMount() {}
	async getData() {
		//console.log(JSON.stringify(localStorage.getItem('token')));
		//console.log(JSON.parse(localStorage.getItem('token')));
		let temp = localStorage.getItem('token');

		console.log(temp);
		try {
			console.log(JSON.parse(localStorage.getItem('token')));
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
			console.log('data', data);
			//this.props.history.push("/EmployerDashboard");
			console.log(data.id);
			let id_ = data.id;
			this.setState({
				owner: id_
			});
			console.log(this.state);
		} catch (err) {
			console.log(err);
		}
	}

	async postData() {
		try {
			const results = await fetch('/emp', {
				crossDomain: true,
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				// body: JSON.stringify(this.state),
				body: JSON.stringify(this.state)
			});

			//console.log("results", results);

			this.props.history.push('/Logo');

			this.setState({
				person_name: '',
				company_name: '',
				about: '',
				contact_no: 0,
				address: '',
				domain: ''
			});
		} catch (err) {
			alert(err);
			console.log(err);
		}
	}

	/*  */

	change = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}; //end change

	onSubmit = (e) => {
		e.preventDefault();
		this.postData();
	};

	render() {
		this.getData();
		const { classes } = this.props;

		return (
			<div>
				<SecondarySearchAppBar />
				<div className={classes.bg}>
					<Card className={classes.margin}>
						<form autoComplete="off" noValidate>
							<Grid container spacing={0} direction="column" alignItems="center">
								<Grid item xs={3} />
								<Typography className={classes.typo} component="h1" variant="h2">
									Complete your profile
								</Typography>
								<Typography className={classes.typo2} component="h1" variant="h5">
									Please enter all the mandatory details.{' '}
								</Typography>
							</Grid>
							<Divider />
							<CardContent>
								<Grid container spacing={3}>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											label="Name"
											margin="normal"
											name="person_name"
											onChange={(e) => this.change(e)}
											required
											value={this.state.person_name}
											variant="outlined"
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											label="Company"
											margin="normal"
											name="company_name"
											onChange={(e) => this.change(e)}
											required
											value={this.state.company_name}
											variant="outlined"
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											label="About"
											margin="normal"
											name="about"
											onChange={(e) => this.change(e)}
											required
											value={this.state.about}
											variant="outlined"
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											label="Contact Number"
											margin="normal"
											name="contact_no"
											onChange={(e) => this.change(e)}
											type="number"
											value={this.state.contact_no}
											variant="outlined"
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											label="Address"
											margin="normal"
											name="address"
											onChange={(e) => this.change(e)}
											required
											value={this.state.address}
											variant="outlined"
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											label="Domain"
											margin="normal"
											name="domain"
											onChange={(e) => this.change(e)}
											required
											value={this.state.domain}
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
											Sign up
										</Button>
									</Grid>
								</Grid>
							</CardActions>
						</form>
					</Card>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(EmployerSignUp);
