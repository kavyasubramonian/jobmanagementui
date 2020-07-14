import React from 'react';
import {
	Button,
	Typography,
	Dialog,
	DialogActions,
	DialogContent,
	Slide,
	Table,
	TableBody,
	TableRow,
	TableCell
} from '@material-ui/core';
import Title from '../../view/Titles';
import Iframe from 'react-iframe';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
class Applicant extends React.Component {
	constructor(props) {
		super(props);
		this.id = localStorage.getItem('id');
		//console.log(this.id);
		this.state = {
			open: false,
			rows: []
		};
		this.loc = '';
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			console.log('You clicked outside of me!');
		}
	}

	async getData() {
		try {
			let path = '/jobs/appliedby/' + this.props.id;
			const results = await fetch(path, {
				crossDomain: true,
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: localStorage.getItem('token')
			});

			console.log('results', results);
			const Rows = await results.json();
			console.log('data', Rows.body);

			this.setState({ rows: Rows.body });

			console.log(this.state.rows);
		} catch (err) {
			console.log(err);
		}
	}

	async getResume(id) {
		try {
			let path = '/resume/' + id;
			const results = await fetch(path, {
				crossDomain: true,
				method: 'GET',
				headers: {
					'Content-type': 'application/json'
				}
			});

			const PDF = await results.json();
			this.loc = 'data:application/pdf;base64,' + PDF.data;
		} catch (err) {
			console.log(err);
		}
	}

	handleClickOpen(e) {
		this.setState({ open: true });
		//this.getData();
	}

	handleClose(e) {
		this.setState({ open: false });
	}

	render() {
		this.getData();
		return (
			<div className="flex-container">
				<div>
					<Title>Here's Applicants</Title>
					<Table size="small">
						<TableBody>
							{this.state.rows.length !== 0 ? (
								this.state.rows.map((row) => (
									<TableRow>
										<TableCell>
											<Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
												{row.name}
											</Typography>
										</TableCell>
										<TableCell />
										{console.log(this.getResume(row.studentId))}
										<TableCell />
										<TableCell>
											<Button
												onClick={(e) => this.handleClickOpen(e)}
												color="primary"
												variant="contained"
											>
												{' '}
												See Resume{' '}
											</Button>
											<Dialog
												fullScreen
												fullWidth="xl"
												open={this.state.open}
												TransitionComponent={Transition}
												keepMounted
												onClose={this.handleClose}
												aria-labelledby="alert-dialog-slide-title"
												aria-describedby="alert-dialog-slide-descript"
											>
												<DialogContent ref={this.setWrapperRef}>
													<Iframe
														url={this.loc}
														width="1300px"
														height="1500px"
														display="initial"
														position="relative"
													/>
												</DialogContent>
												<DialogActions>
													<Button onClick={(e) => this.handleClose(e)} color="primary">
														Close
													</Button>
												</DialogActions>
											</Dialog>
										</TableCell>
									</TableRow>
								))
							) : (
								<Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
									No Applicants yet
								</Typography>
							)}
						</TableBody>
					</Table>
				</div>
			</div>
		);
	}
}

export default Applicant;
