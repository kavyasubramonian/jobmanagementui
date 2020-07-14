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
		fontWeight: 600,
		marginTop: theme.spacing(1),
		borderRadius: 0
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

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			id: '',
			owner: '',
			person_name: '',
			company_name: '',
			about: '',
			contact_no: '',
			address: '',
			domain: '',
			open: false
		};

		this.prev = {};
		this.data = {};
		this.postData = this.postData.bind(this);
	} //end constructor

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
			const results = await fetch('/emp/me', {
				crossDomain: true,
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: temp
			});

			//console.log("results", results);
			this.data = await results.json();
			//console.log("data", this.data);
			//this.props.history.push("/EmployerDashboard");

			this.setState({
				id: this.data.id,
				owner: this.data.owner
			});
			//.log(this.state)
		} catch (err) {
			//console.log(err);
		}
	}

	handleState(e) {
		this.setState({
			person_name: this.data.person_name,
			company_name: this.data.company_name,
			about: this.data.about,
			contact_no: this.data.contact_no,
			address: this.data.address,
			domain: this.data.domain
		});
	}

	SetState() {
		console.log(this.state);
		if (this.state.person_name === '') {
			this.setState({ person_name: this.data.person_name });
		}

		if (this.state.company_name === '') this.setState({ company_name: this.data.company_name });
		console.log(this.state);

		if (this.state.about === '') this.setState({ about: this.data.about });

		if (this.state.contact_no === 0) this.setState({ contact_no: this.data.contact_no });

		if (this.state.address === '') this.setState({ address: this.data.address });

		if (this.state.domain === '') this.setState({ domain: this.data.domain });
	}

	async postData() {
		this.SetState();
		console.log(this.state);
		try {
			const results = await fetch('/emp', {
				crossDomain: true,
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
				// body: JSON.stringify(this.state),
				body: JSON.stringify(this.state)
			});

			console.log('results', results);
			const data = await results.json();
			console.log('data', data);

			this.prev = data;
			//alert(this.prev);
			//this.props.history.push("/EmployerDashboard");

			this.setState({
				owner: '',
				person_name: '',
				company_name: '',
				about: '',
				contact_no: '',
				address: '',
				domain: ''
			});
		} catch (err) {
			alert(err);
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
	};

	render() {
		this.getData();
		const { classes } = this.props;

		return (
			<div>
				<div className={classes.bg}>
					<Paper elevation={0}>
						<Grid container spacing={0} direction="column" alignItems="center">
							<Grid item xs={3} />
							<Typography className={classes.typo} component="h1" variant="h2">
								Update Profile Details
							</Typography>
						</Grid>
					</Paper>
				</div>
				<Divider />
				<form autoComplete="on">
					<CardContent>
						<Grid container spacing={3}>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Name"
									margin="normal"
									name="person_name"
									placeholder={this.data.person_name}
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
									placeholder={this.data.company_name}
									onChange={(e) => this.change(e)}
									required
									value={this.state.company_name}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Contact Number"
									margin="normal"
									name="contact_no"
									type="number"
									placeholder={this.data.contact_no}
									onChange={(e) => this.change(e)}
									value={this.state.contact_no}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Domain"
									margin="normal"
									name="domain"
									placeholder={this.data.domain}
									onChange={(e) => this.change(e)}
									required
									value={this.state.domain}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="About"
									margin="normal"
									name="about"
									multiline
									placeholder={this.data.about}
									onChange={(e) => this.change(e)}
									required
									value={this.state.about}
									variant="outlined"
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label="Address"
									margin="normal"
									name="address"
									multiline
									placeholder={this.data.address}
									onChange={(e) => this.change(e)}
									required
									value={this.state.address}
									variant="outlined"
								/>
							</Grid>
						</Grid>
					</CardContent>
					<Divider />

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
									Update Profile
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
									Profile Updated
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

export default withStyles(useStyles)(Form);
