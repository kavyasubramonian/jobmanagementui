import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import history from "../history";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = (theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class HigherOrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      username: "",
      password: "",
      token: "",
      type: "graduate",
    };
    this.postData = this.postData.bind(this);
  } //end constructor

  componentWillMount() {}

  componentDidMount() {}

  async postData() {
    const results = await fetch("http://theapi/api/auth", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    }); /*end fetch */
    console.log(results);
    if ((this, state.type == "graduate")) {
      this.props.history.push("/Student");
    } else {
      this.props.history.push("/Employee");
    }

    this.setState({
      username: "",
      password: "",
      type: "graduate",
    });
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }; //end change

  onSubmit = (e) => {
    e.preventDefault();
    this.postData();
  };

  render() {
    console.log(this.state.data);
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={(e) => this.change(e)}
                autoComplete="username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                placeholder="Password"
                value={this.state.password}
                onChange={(e) => this.change(e)}
                autoComplete="current-password"
              />
              {/* <FormControlLabel
              control={<Checkbox value="1" color="primary" checked={state.CheckBox} onChange={handleChange} name="checkBox"/>}
              label="Are you a student?"
            /> */}

              <InputLabel id="Type">Select</InputLabel>
              <Select
                labelId="Type"
                id="type"
                name="type"
                value={this.state.type}
                onChange={(e) => this.change(e)}
              >
                <MenuItem value="graduate">Graduate</MenuItem>
                <MenuItem value="employee">Employee</MenuItem>
              </Select>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={(e) => this.onSubmit(e)}
                className={classes.submit}
              >
                Sign In
              </Button>
              {/* <Grid container> */}
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              {/* </Grid> */}
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

HigherOrderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HigherOrderComponent);
