import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardFooter } from "reactstrap";

import ContentWrapper from "../Layout/ContentWrapper";

const ContactCard = (props) => (
  <Card className="card-default">
    <CardBody className="text-center">
      <img
        className="mb-2 img-fluid rounded-circle thumb64"
        src={props.imgsrc}
        alt="Contact"
      />
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
    </CardBody>
    <CardFooter className="d-flex">
      <div>
        <button type="button" className="btn btn-xs btn-primary">
          Send message
        </button>
      </div>
      <div className="ml-auto">
        <button type="button" className="btn btn-xs btn-secondary">
          View
        </button>
      </div>
    </CardFooter>
  </Card>
);

class Contacts extends Component {
  state = {
    dropdownOpen: false,
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  render() {
    return (
      <ContentWrapper>
        <Col style={{ padding: 0 }} lg="12" sm="12">
          <label style={{ fontSize: 20 }}>People</label>
        </Col>
        <Row>
          <Col lg="4" sm="6">
            <ContactCard
              imgsrc="img/user/02.jpg"
              name="Audrey Hunt"
              desc="Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!"
            />
          </Col>
          <Col lg="4" sm="6">
            <ContactCard
              imgsrc="img/user/03.jpg"
              name="Leonard Price"
              desc="Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!"
            />
          </Col>
          <Col lg="4" sm="6">
            <ContactCard
              imgsrc="img/user/04.jpg"
              name="Jamie Stephens"
              desc="Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!"
            />
          </Col>
        </Row>
      </ContentWrapper>
    );
  }
}

export default Contacts;
