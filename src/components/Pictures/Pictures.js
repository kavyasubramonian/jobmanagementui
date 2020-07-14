import React from 'react';
import {Card,Container} from 'react-bootstrap';

const Pictures = () =>{
    return(<>
        <Container>
        <div className="row mt-5">
                  <div className="col-lg-4 mb-4 grid-margin">
                        <Card.Img variant="top" src="https://www.investopedia.com/thmb/0cNtfnDt9RQptZFzMqW8vaEXiHk=/1500x1000/filters:fill(auto,1)/GettyImages-1064106558-938927c3f7f444c3aeafaec6cf66dbc4.jpg" />
                  </div>
                  <div className="col-lg-4 mb-4 grid-margin">
                        <Card.Img variant="top" src="https://www.blackhawkintelligence.com/wp-content/uploads/2016/08/shu-cyber-intellgence-771480586.jpg" />
                  </div>
                  <div className="col-lg-4 mb-4 grid-margin">
                        <Card.Img variant="top" src="https://concisesoftware.com/wp-content/uploads/2019/05/Concise-Software-Scrum-meeting.jpg" />
                  </div>
                  </div>
        </Container>
        <Container>
        <div className="row mt-5">
                  <div className="col-lg-4 mb-4 grid-margin">
                        <Card.Img variant="top" src="https://www.intentionet.com/wp-content/uploads/2018/08/AdobeStock_123010279_1800-1500x1000.jpg" />
                  </div>
                  <div className="col-lg-4 mb-4 grid-margin">
                        <Card.Img variant="top" src="https://icdn4.digitaltrends.com/image/digitaltrends/ai_explained_05-1500x1000.jpg" />
                  </div>
                  <div className="col-lg-4 mb-4 grid-margin">
                        <Card.Img variant="top" src="https://blog.dailylogochallenge.com/wp-content/uploads/2019/02/desinger-on-apple-desktop-1600x1067.jpeg" />
                  </div>
                  </div>
        </Container>
        <Container>
        <div className="row mt-5">
                  <div className="col-lg-4 mb-4 grid-margin">
                        <Card.Img variant="top" src="https://www.rapinteriors.co.uk/wp-content/uploads/2019/05/office-interior-design-company-marketing-assistant-chris-sparham-Large-1-1500x1000.jpg" />
                  </div>
                  <div className="col-lg-4 mb-4 grid-margin">
                        <Card.Img variant="top" src="https://www.investopedia.com/thmb/mXsox5lr5HLYfE3lAcPZGI3Fneg=/1500x1000/filters:fill(auto,1)/GettyImages-638668250-1eaaa55079b14e0c8d6cd0628b0628f4.jpg" />
                  </div>
                  <div className="col-lg-4 mb-4 grid-margin">
                        <Card.Img variant="top" src="https://www.olcf.ornl.gov/wp-content/uploads/2016/12/Data-course-image_resized-1500x1000.jpg"/>
                  </div>
                  </div>
        </Container></>);
}

export default Pictures;
