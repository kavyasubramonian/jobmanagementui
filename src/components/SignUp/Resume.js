import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Grid,
    Button,
} from '@material-ui/core';

    
class Resume extends React.Component {

    constructor(props) {
        super(props);
        this.postData = this.postData.bind(this);
        this.formData = new FormData();
        this.temp=''
    } //end constructor
    state = {
        pdf: "",
        owner: "",
        };
    
    componentDidMount() {}
    async getData() {
        //console.log(JSON.stringify(localStorage.getItem('token')));
        //console.log(JSON.parse(localStorage.getItem('token')));
        this.temp = localStorage.getItem('token') 
    
        //console.log(temp);
        try {
        //console.log(JSON.parse(localStorage.getItem('token')));
        const results = await fetch("/users/me", {
            crossDomain: true,
            method: "POST",      
            headers: {
            "Content-type": "application/json",
            },
            body: this.temp
        });

        //console.log("results", results);
        const data = await results.json();
        //console.log("data", data);
        //this.props.history.push("/EmployerDashboard");
        //console.log(data.id);
        let id_ = data.id;
        this.setState({
            owner: id_
        });
        //console.log(this.state);
        } catch (err) {
        console.log(err);
        }
    }

    async postData() {
        console.log(this.state)
        let body = {
            studentId: this.state.owner,
            pdf: this.state.pdf,
        }
        //console.log(body);
        console.log(JSON.parse(this.temp).token);

        //const formData = new FormData();
        //const fileField = document.querySelector('input[type="file"]');

        //formData.append('owner', this.state.owner);
        //formData.append('pdf', this.state.pdf);

        //this.formData.append("studentId", this.state.owner);
        
        for (var key of this.formData.entries()) {
            console.log(key[0] + ', ' + key[1]); }

        try {
        const results = await fetch("/resume", {
            crossDomain: true,
            method: "POST",
            headers: {
                "Authorization": "Bearer "+JSON.parse(this.temp).token,
            },
            // body: JSON.stringify(this.state),
            body: this.formData,
        });

        console.log("results", results);
        const data = await results.json();
        console.log("data",data);

        this.props.history.push("/ApplicantDashboard");

        this.setState({
            pdf: ""
        });
        
        } catch (err) {
        //alert(err);
        console.log(err);
        }
    }






    changeI = (e) => {
        this.formData.append("pdf", e.target.files[0]);
    }; //end change

    onSubmit = (e) => {
        e.preventDefault();
        this.postData();
        this.props.history.push("/ApplicantDashboard");
    };

    render() {
        // console.log(this.state.data);

        this.getData();
        //console.log(JSON.parse(localStorage.getItem('token')));
        //this.getData()

        return (
            <Card>
            <form
                autoComplete="off"
                noValidate
            >
                <CardHeader
                subheader="The information can be edited"
                title="Resume"
                />
                <Divider />
                <CardContent>
                <Grid
                    container
                    spacing={3}
                    xs={6}
                >
                    <Grid
                    item
                    xs={3}
                    >
                        
                        <input
                            type="file"
                            name="pdf"
                            onChange={(e)=>this.changeI(e)}
                            id ="fileupload"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                    </Grid>
                </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                    <Button
                        onClick={(e) => this.onSubmit(e)}
                        color="primary"
                        variant="contained"
                    >
                        Submit
                    </Button>
                </CardActions>
            </form>
            </Card>
        );
    }
}

export default Resume;