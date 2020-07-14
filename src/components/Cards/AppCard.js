import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	root: {
		minWidth: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
});

class AppCard extends React.Component {
	//const classes = useStyles();
	constructor(props) {
		super(props);
		this.path = '';
	}
	state = {
		data: {}
	};

	async getjob(id) {
		let path = '/jobs/' + id;
		try {
			const results = await fetch(path, {
				crossDomain: true,
				method: 'GET',
				headers: {
					'Content-type': 'application/json'
				}
			});
			const data = await results.json();
			this.setState({
				data
			});
			console.log(this.state.data.image);
			this.path = 'data:image/jpg;base64,' + this.state.data.image.data;
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		this.getjob(this.props.id);
		console.log(this.path);

		return (
            <div className="flex-container">
            <Card>
				<CardContent>
					<Grid container spacing={10}>
						<Grid item>
							<Typography color="textPrimary" gutterBottom>
								Company: {this.state.data.compan_name}
								<br />
							</Typography>
							<Typography color="textPrimary" gutterBottom>
								Title: {this.props.title}
								<br />
								<Typography color="textPrimary" gutterBottom>
									Location: {this.state.data.location} | Position : {this.state.data.position}
									<br />
									Apply By: {this.state.data.apply_by} | Starting Date:{' '}
									{this.state.data.starting_date}
									<br />
									Duration: {this.state.data.duration} months | Stipend: {this.state.data.stipend}
									<br />
								</Typography>
							</Typography>
						</Grid>
						<Grid item>
							<img src={this.path} alt="logo" width="100" height="100" />
						</Grid>
					</Grid>
                </CardContent>
                </Card>
			</div>
		);
	}
}

export default AppCard;
