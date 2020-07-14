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
import Select from 'react-select';

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
		padding: theme.spacing(0,0,20,0),
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

class ApplicantSignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			owner: '',
			field_of_interest_1:[],
			field_of_interest_2:[],
			student_field_interest1:'',
			student_field_interest2:'',
			firstname: '',
			lastname: '',
			contactno: 0,
			address: '',
			gender: ''
		};

		this.postData = this.postData.bind(this);
		this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
	} //end constructor

	componentDidMount() {
		this.fetchData1()
		this.fetchData2()
	}

	async getData() {
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
			//this.props.history.push("/EmployerDashboard");
			//console.log("id", data.id);
			let id_ = data.id;
			this.setState({
				owner: id_
			});
			//console.log(this.state);
		} catch (err) {
			console.log(err);
		}
	}

	handleChange1 = (event) => {
		try{
		this.setState({student_field_interest1: event.label});
		} catch (err) {
		console.error('err', err);}}
	
	handleChange2 = (event) => {
		try{
		this.setState({student_field_interest2: event.label});
		} catch (err) {
		console.error('err', err);}}

	fetchData1 = async () => {
		await fetch('/category/all')
			.then(res => res.json())
			.then(res =>
			this.setState({
				field_of_interest_1: res,
			}),
			)
			.catch(error => console.log(error))
	}

	fetchData2 = async () => {
		await fetch('/category/all')
			.then(res => res.json())
			.then(res =>
			this.setState({
				field_of_interest_2: res,
			}),
			)
			.catch(error => console.log(error))
	}

	async postData() {
		console.log(this.state.owner);
		try {
			const results = await fetch('/student', {
				crossDomain: true,
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(this.state),
				//body: temp2
			});

			//console.log("results", results);
			const data = await results.json();
			console.log('data', data);
			
			this.props.history.push("/Resume");


			this.setState({
				owner: '',
				field_of_interest_1: [],
				field_of_interest_2: [],
				student_field_interest1:'',
				student_field_interest2:'',
				firstname: '',
				lastname: '',
				contactno: 0,
				address: '',
				gender: ''
			});
		} catch (err) {
			console.log(err);
		}
	}

	change = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		//console.log(this.state);
		this.postData();
		this.props.history.push("/Resume");
	};

	render() {
		this.getData();
		const { classes } = this.props;

		let option1 = []
		if (this.state.field_of_interest_1) {
			this.state.field_of_interest_1.forEach(eachField => {
			let Interest1 = {}
			Interest1.value = eachField.id
			Interest1.label = eachField.category
			option1.push(Interest1)
			})
		}
		let option2 = []
		if (this.state.field_of_interest_2) {
			this.state.field_of_interest_2.forEach(eachField => {
			let Interest2 = {}
			Interest2.value = eachField.id
			Interest2.label = eachField.category
			option2.push(Interest2)
			})
		}

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
											label="First Name"
											margin="normal"
											name="firstname"
											onChange={(e) => this.change(e)}
											required
											value={this.state.firstname}
											variant="outlined"
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											label="Last Name"
											margin="normal"
											name="lastname"
											onChange={(e) => this.change(e)}
											required
											value={this.state.lastname}
											variant="outlined"
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											label="Gender"
											margin="normal"
											name="gender"
											onChange={(e) => this.change(e)}
											required
											value={this.state.gender}
											variant="outlined"
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											label="Contact Number"
											margin="normal"
											name="contactno"
											onChange={(e) => this.change(e)}
											type="number"
											value={this.state.contactno}
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
										{/* <TableRow> */}
											{/* <TableCell> */}
												{/* <TextField
													fullWidth
													label="Field Of Interest 1"
													margin="normal"
													name="field_of_interest_1"
													onChange={(e) => this.change(e)}
													required
													className={classes.foi}
													value={this.state.field_of_interest_1}
													variant="outlined"
												/> */}
											<Select options={option1} placeholder='Field of Interest 1' onChange={this.handleChange1}/>
											{/* </TableCell>
											<TableCell> */}
												{/* <TextField
													fullWidth
													label="Field Of Interest 2"
													margin="normal"
													name="field_of_interest_2"
													onChange={(e) => this.change(e)}
													required
													className={classes.foi}
													value={this.state.field_of_interest_2}
													variant="outlined"
												/> */}
											<div style={{padding:'8px'}}/>
											<Select options={option2} placeholder='Field of Interest 2' onChange={this.handleChange2}/>
											{/* </TableCell> */}
										{/* </TableRow> */}
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
									<Grid item xs={3}>
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

export default withStyles(styles)(ApplicantSignUp);