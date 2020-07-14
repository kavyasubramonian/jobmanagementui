import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

class SearchForm extends React.Component {
	state = {
		filtered: []
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
			
			console.log(Response);
			const filtered = [];

			const res = await Response.json();
			const Location = this.refs.location.value;
			const Category = this.refs.category.value;

			Object.keys(res).forEach(function(key) {
				if (res[key].location === Location && res[key].category === Category) {
					filtered[key] = res[key];
				}
			});
			this.setState({ filtered });
			console.log(this.state.filtered);
		} catch (err) {
			console.error('err', err);
		}
	}
	render() {
    const { classes } = this.props;
		return (
			<div>
				<form action="/search" onSubmit={this.handleSubmit.bind(this)}>
					<Select native ref="category">
						<option value="" defaultValue>
							Category
						</option>
						<option value="Ios Developer">Ios Developer</option>
						<option value="Java Developer">Java Developer</option>
						<option value="Marketing">Marketing Generalist</option>
						<option value="Web Developer">Web Developer</option>
						<option value="Python Developer">Python Developer</option>
						<option value="C# Developer">C# Developer</option>
					</Select>
					<Select native ref="location">
						<option value="" defaultValue>
							Location
						</option>
						<option value="Lucknow">Lucknow</option>
						<option value="Ranchi">Ranchi</option>
						<option value="Delhi">Delhi</option>
					</Select>
          <Button
            variant="contained" 
            color="secondary"
          >
            Find
          </Button>
				</form>
				{this.state.filtered.map((data) => {
					//  return <div>{data.location}</div>  // you can render here list items
					return (
						<div className="flex-container">
							<div key={data.id}>
								<div>Job Title: {data.category}</div>
								<div>Location: {data.location}</div>
								<div>Position: {data.position}</div>
								<div>Duration: {data.duration}</div>
								<div>Skills Required: {data.skills_req}</div>
								<div>Apply By: {data.apply_by}</div>
								<div>Starting Date: {data.starting_date}</div>
								<div>Stipend: {data.stipend}</div>
								<div>About Work: {data.about_work}</div>
								<div>Perks: {data.perks}</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default SearchForm;
