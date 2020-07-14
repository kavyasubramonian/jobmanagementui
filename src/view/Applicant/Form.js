import React from 'react';
import {
	Card,
	CardContent,
	CardActions,
	Divider,
	Grid,
	Button,
	TextField,
    Typography,
    Paper
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SecondarySearchAppBar from '../../navbar2';
import Select from 'react-select';

const useStyles = (theme) => ({
	root: {
		minWidth: 275
	},
	bg: {
		backgroundColor: 'white',
		padding: theme.spacing(1),
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

class Form extends React.Component {
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
        this.data={};
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
		try {
			const results = await fetch('/student/me', {
				crossDomain: true,
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				// body: JSON.stringify(this.state),
				body: temp
			});

			//console.log("results", results);
			this.data = await results.json();
			//console.log("data", this.data);
			let id_ = this.data.id;
			let owner_ = this.data.owner;
			this.setState({
				id: id_,
				owner: owner_
			});
		} catch (err) {
			//alert(err);
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
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(this.state),
				//body: temp2
			});

			//console.log("results", results);
			const data = await results.json();
			console.log('data', data);
			


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
				<div className={classes.bg}>
					<Paper elevation={0}>
						<Grid container spacing={0} direction="column" alignItems="center">
							<Grid item xs />
							<Typography className={classes.typo} component="h1" variant="h2">
								Update Profile Details
							</Typography>
						</Grid>
					</Paper>
				</div>
				<Divider />
						<form autoComplete="off" noValidate>
							<Divider />
							<CardContent>
								<Grid container spacing={3}>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											label="First Name"
											margin="normal"
                                            name="firstname"
                                            placeholder={this.data.firstname}
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
                                            placeholder={this.data.lastname}
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
                                            placeholder={this.data.gender}
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
                                            placeholder={this.data.contactno}
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
                                            placeholder={this.data.address}
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
											<Select options={option1} placeholder={this.data.student_field_interest1} onChange={this.handleChange1}/>
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
											<Select options={option2} placeholder={this.data.student_field_interest2} onChange={this.handleChange2}/>
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
									style={{ minHeight: '30vh' }}
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
							</CardActions>
                        </form>
                    </div>
                );
            }
        }
        
        export default withStyles(useStyles)(Form);