import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SearchIcon from '@material-ui/icons/Search';
import { Link as RouterLink } from 'react-router-dom';

export const mainListItems = (
	<div>
		<br />
		<br />
		<Button fullWidth component={RouterLink} to="/ApplicantDashboard">
			<ListItem>
				<ListItemIcon>
					<DashboardOutlinedIcon />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItem>
		</Button>
		<br />
		<Button fullWidth component={RouterLink} to="/UserProfile">
			<ListItem>
				<ListItemIcon>
					<PersonOutlineIcon />
				</ListItemIcon>
				<ListItemText primary="User Profile" />
			</ListItem>
		</Button>
		<br />
		<Button fullWidth component={RouterLink} to="/AppliedJobs">
			<ListItem>
				<ListItemIcon>
					<WorkOutlineIcon />
				</ListItemIcon>
				<ListItemText primary="Applied Jobs" />
			</ListItem>
		</Button>
		<br />
		<Button fullWidth component={RouterLink} to="/search">
			<ListItem>
				<ListItemIcon>
					<SearchIcon />
				</ListItemIcon>
				<ListItemText primary="Search" />
			</ListItem>
		</Button>
		<br />
		<Button fullWidth>
			<ListItem>
				<ListItemText primary="" />
			</ListItem>
		</Button>
	</div>
);

export const secondaryListItems = (
	<div>
		<br />
		<br />
		<Button fullWidth component={RouterLink} to="/EmployerDashboard">
			<ListItem>
				<ListItemIcon>
					<DashboardOutlinedIcon />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItem>
		</Button>
		<br />
		<Button fullWidth component={RouterLink} to="/EmpProfile">
			<ListItem>
				<ListItemIcon>
					<PersonOutlineIcon />
				</ListItemIcon>
				<ListItemText primary="User Profile" />
			</ListItem>
		</Button>
		<br />
		<Button fullWidth component={RouterLink} to="/CreateJobs">
			<ListItem>
				<ListItemIcon>
					<WorkOutlineIcon />
				</ListItemIcon>
				<ListItemText primary="Create Jobs" />
			</ListItem>
		</Button>
		<br />
		<Button fullWidth component={RouterLink} to="/search">
			<ListItem>
				<ListItemIcon>
					<SearchIcon />
				</ListItemIcon>
				<ListItemText primary="Search" />
			</ListItem>
		</Button>
		<br />
		<Button fullWidth>
			<ListItem>
				<ListItemText primary="" />
			</ListItem>
		</Button>
	</div>
);
