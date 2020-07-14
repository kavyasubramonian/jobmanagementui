import React from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {Grid, Typography, Divider, Paper, Button, Card} from '@material-ui/core/';
import Title from '../Titles';
import AppCard from '../../components/Cards/AppCard'
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = (theme) => ({
	root: {
		flexGrow: 1
	},
	bg: {
		margin: theme.spacing(1),
	},
	bg2: {
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
		fontWeight: 600
	},

	typo: {
		fontFamily: 'Montserrat',
		padding: theme.spacing(2)
	},
	typo2: {
		fontFamily: 'Montserrat',
		color: '#282828',
		padding: theme.spacing(2),
		marginBottom: theme.spacing(0)
    },
    margin: {
        marginTop: theme.spacing(2)
    },
});

class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.temp = localStorage.getItem('token');
        //this.data={};

    }
    state={ rows: [] };

    async getData() {
        let temp = localStorage.getItem('token') 
    
        //console.log(temp);
        try {
            const results = await fetch(this.props.path, {
                crossDomain: true,
                method: "POST",      
                headers: {
                "Content-type": "application/json",
                },
                body: temp
            });
        
            //console.log("results", results);
            const rows = await results.json();
            //console.log("data", rows);
            this.setState({ rows });    
            //console.log(this.state.rows);
        
        } catch (err) {
            console.log(err);
            }
        }
    
    renderJobs(){
		const { classes } = this.props;

        this.getData()
        //console.log(this.state.rows);
        return (
            <React.Fragment>
            <div className={classes.bg2}>
            <Grid container spacing={0} direction="column" alignItems="center">
                <Grid item xs />
                <Typography className={classes.typo} component="h1" variant="h2">
                    Applied Jobs
                </Typography>
            </Grid>
        </div>
                <Divider />
                <Grid container spacing={0} direction="column" alignItems="center">
                <Grid item xs />
                {   this.state.rows.map((row) => (
                        <Card>
                            <AppCard title={row.job_title} id={row.jobId} />
                        </Card>
                    ))}
                    </Grid>
				<div className={classes.bg}>
				<Paper elevation={0} className={classes.margin}>
					<Grid container spacing={0} justify="center" direction="column" alignItems="center">
						<Grid item xs />
						<Button className={classes.typo2} variant="outlined" component={RouterLink} to="/search">
							Apply for more Jobs
						</Button>
					</Grid>
				</Paper>
			</div>
            </React.Fragment>
        );
}

    render()
    {
        return(
            this.renderJobs()
        );
    }
}

export default withStyles(useStyles)(Jobs);
