import React from 'react';
import { Card, CardContent, Button, Typography, Dialog, DialogActions, DialogContent, Slide } from '@material-ui/core';
import Applicants from '../../view/Employer/Applicant';
import { withStyles } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = (theme) => ({
	root: {
		flexGrow: 1
	},
	btn: {
		padding: theme.spacing(1.5),
		fontFamily: 'Montserrat',
		fontSize: 12,
		fontWeight: 600,
		borderRadius: 0,
		margin: theme.spacing(2, 2, 2, 0)
	},
	typo: {
		fontFamily: 'Montserrat',
		padding: theme.spacing(0.5)
}
});

class EmpCard extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.id);
		localStorage.setItem('id', this.props.id);
		this.state = {
			open: false,
			rows: []
		};
		this.showApplicant = null;
	}

	async deleteData() {
		try {
			let path = '/jobs/' + this.props.id;
			console.log(path);
			const results = await fetch(path, {
				crossDomain: true,
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json'
				},
				body: localStorage.getItem('token')
			});

			this.props.history.push('/EmployerDashboard');
		} catch (err) {
			console.log(err);
		}
	}

	handleApplicant(e) {
		this.setState({ open: true });
		console.log(this.props.id);
		this.showApplicant = <Applicants id={this.props.id} />;
	}

	handleDelete(e) {
		this.deleteData();
	}

	handleClose(e) {
		this.setState({ open: false });
	}

	render() {
		const { classes } = this.props;

		return (
			<div className="flex-container">
					<div>
						<Typography variant="h4" className={classes.typo} component="h2" color="textPrimary" gutterBottom>
							{this.props.comp}
						</Typography>
						<Typography variant="body1" className={classes.typo} color="textPrimary" component="p">
							{this.props.pos} | {this.props.loc}
						</Typography>
						<Typography variant="body1" className={classes.typo} color="textPrimary" component="p">
							Apply By: {this.props.app} | Starting Date: {this.props.std}
							<br />
							Duration: {this.props.dur} months | Stipend: {this.props.sti}
							<br />
						</Typography>
						<Button onClick={(e) => this.handleApplicant(e)} className={classes.btn} color="primary" variant="contained">
							{' '}
							Go to Applicants{' '}
						</Button>
						<Dialog
							fullScreen
							open={this.state.open}
							TransitionComponent={Transition}
							keepMounted
							onClose={this.handleClose}
							aria-labelledby="alert-dialog-slide-title"
							aria-describedby="alert-dialog-slide-description"
						>
							<DialogContent ref={this.setWrapperRef}>
								<div className="form-container">{this.showApplicant}</div>
							</DialogContent>
							<DialogActions>
								<Button onClick={(e) => this.handleClose(e)} color="primary">
									Close
								</Button>
							</DialogActions>
						</Dialog>

						<Button onClick={(e) => this.handleDelete(e)} style={{fontFamily: "Montserrat"}} size="small" color="secondary">
							{' '}
							Delete Job{' '}
						</Button>
					</div>
			</div>
		);
	}
}

export default withStyles(useStyles)(EmpCard);