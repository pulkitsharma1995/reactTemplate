import React, { Component } from "react";
import { Col, Card, CardBody, CardFooter } from "reactstrap";

import ContentWrapper from "../Layout/ContentWrapper";
import HorizontalScroll from "../Extras/HorizontalScroll";
import { contactList } from "../Utility/Constants";

export const ContactCard = (props) => (
  <Col>
    <Card className="card-default" style={{ width: 200 }}>
      <CardBody className="text-center">
        <img
          className="mb-2 img-fluid rounded-circle thumb64"
          src={props.data.imgsrc}
          alt="Contact"
        />
        <h4>{props.data.name}</h4>
        <p>{props.data.desc}</p>
      </CardBody>
      <CardFooter className="d-flex">
        <div className="ml-auto">
          <button type="button" className="btn btn-xs btn-secondary">
            {contactList.VIEW}
          </button>
        </div>
      </CardFooter>
    </Card>
  </Col>
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
    const { selected } = this.state;
    const { employeeList } = this.props;
    return (
      <ContentWrapper>
        <Col style={{ padding: 0 }} lg="12" sm="12">
          <label style={{ fontSize: 20 }}>{contactList.PEOPLE}</label>
        </Col>
        <HorizontalScroll
          CustomComponent={ContactCard}
          alignCenter={false}
          dragging={true}
          hideArrows={true}
          list={employeeList}
          scrollBy={0}
          selected={selected}
          wheel={false}
        />
      </ContentWrapper>
    );
  }
}

export default Contacts;
