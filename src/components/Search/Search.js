import React from 'react';
import TertiarySearchAppBar from '../../navbar3';
import { withStyles } from '@material-ui/core/styles';
import './Search.css';
import '../Cards/Cards';
import Footer from '../Footer/Footer';
import {
	CardContent,
	Paper,
	CardActions,
	Button,
	Typography,
	Grid,
	Dialog,
	DialogContent,
	DialogActions
} from '@material-ui/core';
import Select from 'react-select';

const useStyles = (theme) => ({
	root: {
		flexGrow: 1
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14,
		fontFamily: "Montserrat"
	},
	pos: {
		marginBottom: 12,
		fontFamily: "Montserrat"
	},
	grid: {
		marginTop: theme.spacing(20),
		marginLeft: theme.spacing(10),
		fontFamily: 'Montserrat'
	},
	btn: {
		margin: 10,
		position: 'static'
	},
	button: {
		padding: theme.spacing(1, 5, 1, 5),
		margin: theme.spacing(1, 0, -1, -1),
		borderRadius: 0
	},
	paper: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(60),
			height: theme.spacing(100)
		}
	},
	paper2: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(60)
		}
	},
	font: {
		fontFamily: "Montserrat"
	}
});

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filtered: [],
			values1: [],
			values2: [],
			selectedCategory: '',
			selectedLocation: '',
			open: false
		};
		this.handleChange1 = this.handleChange1.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.applyJob = this.applyJob.bind(this);
		this.id = '';
		this.temp = localStorage.getItem('token');
	}

	componentDidMount() {
		this.fetchData1();
		this.fetchData2();
	}

	handleClose(e) {
		this.setState({ open: false });
	}

	async getData() {
		try {
			//console.log(JSON.parse(localStorage.getItem('token')));
			const results = await fetch('/users/me', {
				crossDomain: true,
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: this.temp
			});

			//console.log("results", results);
			const data = await results.json();
			//console.log("data", data);
			//this.props.history.push("/EmployerDashboard");
			//console.log("id", data.id);
			this.id = data.id;
			//console.log(this.state);
		} catch (err) {
			console.log(err);
		}
	}

	async postData(id) {
		console.log(this.temp);
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
			//console.log(results.json())
		} catch (err) {
			console.log(err);
		}
	}

	handleJobSubmit(id) {
		if (this.temp === null) {
			this.props.history.push('/login');
		} else {
			this.postData(id);
		}

		this.setState({ open: true });
		//console.log("applied");
	}

	handleChange1 = (event) => {
		try {
			this.setState({ selectedCategory: event.label }, () => console.log(this.state.selectedCategory));
		} catch (err) {
			console.error('err', err);
		}
	};

	handleChange2 = (event) => {
		try {
			this.setState({ selectedLocation: event.label }, () => console.log(this.state.selectedLocation));
		} catch (err) {
			console.error('err', err);
		}
	};

	fetchData1 = async () => {
		await fetch('/category/all')
			.then((res) => res.json())
			.then((res) =>
				this.setState({
					values1: res
				})
			)
			.catch((error) => console.log(error));
	};

	fetchData2 = async () => {
		await fetch('/loc/all')
			.then((res) => res.json())
			.then((res) =>
				this.setState({
					values2: res
				})
			)
			.catch((error) => console.log(error));
	};

	applyJob = () => {
		this.props.history.push('/signup');
	};

	async handleSubmit(event) {
		event.preventDefault();
		try {
			const url = '/jobs/all/';
			const Response = await fetch(url, {
				method: `GET`,
				mode: 'cors',
				headers: {
					Accept: 'application/json'
				}
			});

			const filtered = [];

			const res = await Response.json();

			// console.log(res)

			const Category = this.state.selectedCategory;
			const Location = this.state.selectedLocation;

			//   console.log(Location)
			//   console.log(Category)

			Object.keys(res).forEach(function(key) {
				if (res[key].location === Location && res[key].category === Category) {
					filtered[key] = res[key];
				}
			});

			this.setState({ filtered, loading: false });
			// console.log(this.state.filtered)
		} catch (err) {
			console.error('err', err);
		}
	}

	render() {
		const { classes } = this.props;
		this.getData();

		let option1 = [];
		if (this.state.values1) {
			this.state.values1.forEach((eachCategory) => {
				let Category = {};
				Category.value = eachCategory.id;
				Category.label = eachCategory.category;
				option1.push(Category);
			});
		}
		let option2 = [];
		if (this.state.values2) {
			this.state.values2.forEach((eachLocation) => {
				let Location = {};
				Location.value = eachLocation.id;
				Location.label = eachLocation.location;
				option2.push(Location);
			});
		}

		return (
			<React.Fragment>
				<TertiarySearchAppBar />
				<div className={classes.root}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={4}>
							<Paper className={classes.paper}>
								<form action="/search" onSubmit={this.handleSubmit.bind(this)}>
									<Grid
										className={classes.grid}
										container
										spacing={2}
										direction="row"
										alignItems="center"
										style={{ minHeight: '10vh' }}
									>
										<Grid item xs={0}>
											<Select
												options={option1}
												defaultValue=""
												placeholder="Category"
												onChange={this.handleChange1}
											/>
											<div style={{ marginTop: '20px' }} />
											<Select
												options={option2}
												defaultValue=""
												placeholder="Location"
												onChange={this.handleChange2}
											/>
											<div style={{ marginTop: '10px' }} />
											<button class="btn" style={{ cursor: 'pointer' }}>
												Find
											</button>
											{/* <Button variant="secondary" size="lg" style={{marginLeft: '125px',marginBottom:'10px'}}>Find</Button> */}
										</Grid>
									</Grid>
								</form>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={8}>
							<Paper className={classes.paper2}>
								{this.state.filtered.map((data) => {
									return (
										<div key={data.id} className="flex-container">
											<CardContent>
												{/* <div key={data.id}> */}
												<Grid container>
													<Grid itemitem xs={6} sm={9}>
														<Typography
															className={classes.title}
															color="textSecondary"
															gutterBottom
														>
															{data.location}
														</Typography>
														<Typography variant="h5" className={classes.font} component="h2">
															{data.category} {data.position}
														</Typography>
														<Typography className={classes.pos} color="textSecondary">
															{data.skills_req}
														</Typography>
														<Typography variant="body2" className={classes.pos} component="p">
															Apply By: {data.apply_by} | Starting Date:{' '}
															{data.starting_date}
															<br />
															Duration: {data.duration} months | Stipend: {data.stipend}
															<br />
															About: {data.about_work} | Perks: {data.perks}
														</Typography>
													</Grid>
													<Grid itemitem xs={6} sm={3}>
														<img
															src={'data:image/jpg;base64,' + data.image.data}
															alt="logo"
															width="100"
															height="100"
														/>
													</Grid>
												</Grid>
												<CardActions>
													<Button
														onClick={(e) => this.handleJobSubmit(data.id)}
														color="primary"
														className={classes.button}
														variant="contained"
													>
														Apply
													</Button>
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
																Applied
															</Typography>
														</DialogContent>
														<DialogActions>
															<Button
																onClick={(e) => this.handleClose(e)}
																color="primary"
															>
																Close
															</Button>
														</DialogActions>
													</Dialog>
													{/* <Link to="/apply" className="btn btn-primary">Apply Now</Link> 
							<Button size="small"> Learn More </Button>*/}
												</CardActions>

												{/* </div> */}
											</CardContent>
										</div>
									);
								})}
							</Paper>
						</Grid>
					</Grid>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default withStyles(useStyles)(SearchForm);
