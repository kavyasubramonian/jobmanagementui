import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";



const styles = (theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/1600x900/?building-monochrome)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(20, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 3),
    padding: theme.spacing(1.5,1.5),
  },
  select: {
    margin: theme.spacing(2,0),
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: "",
      password: "",
      token: "",
      type: "Applicant",
    };
    this.postData = this.postData.bind(this);
  } //end constructor
  
  componentDidMount() {}

  async postData() {
    try {
      const results = await fetch("/signup", {
        crossDomain: true,
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.state),
      });

      console.log("results", results);
      const data = await results.json();
      console.log("data", data);
      
      localStorage.setItem("token", JSON.stringify(data));

      if (this.state.type === "Applicant") {
        this.props.history.push("/Applicant");
      } else {
        this.props.history.push("/Employer");
      }

      this.setState({
        email: "",
        password: "",
        type: "Applicant",
      });
      
    } catch (err) {
      alert(err);
      console.log(err);
    }
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
    // console.log(this.state.data);
    const { classes } = this.props;
    
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h2">
              Sign Up
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.change(e)}
                autoComplete="email"
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
              <div className={classes.select}>
              <InputLabel id="Type">Account Type:</InputLabel>
              </div>
              <Select
                labelId="type"
                id="type"
                name="type"
                value={this.state.type}
                onChange={(e) => this.change(e)}
                variant="outlined"
              >
                <MenuItem value="Applicant">Applicant</MenuItem>
                <MenuItem value="Employer">Employer</MenuItem>
              </Select>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={(e) => this.onSubmit(e)}
                className={classes.submit}
              >
                Sign Up
              </Button>
              {/* <Grid container> */}
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Log In"}
                </Link>
              </Grid>
              {/* </Grid> */}
              <Box mt={5}>
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);