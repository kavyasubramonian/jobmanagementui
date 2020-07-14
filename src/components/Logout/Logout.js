import React, {Component} from "react";
import history from 'history';
import { fade } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import withStyles from "@material-ui/core/styles/withStyles";


const styles = (theme) => ({
    button: {
		fontFamily: 'Montserrat',
		fontSize: 14,
		color: '#eeeeee',
		padding: theme.spacing(1,2),
		fontWeight: 600,
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		borderRadius:"0%"
	},
  });

class Logout extends Component{

    logout = () =>{
        localStorage.clear("token");
        this.props.history.push('/');
    };

    render(){

        const { classes } = this.props;

        return(
            
            <Button onClick={this.logout} className={classes.button} >Log out</Button>

        )
    }
}

export default withStyles(styles)(Logout);