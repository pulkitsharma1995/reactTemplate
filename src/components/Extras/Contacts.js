import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Col, Card, CardBody, CardFooter } from "reactstrap";

import ContentWrapper from "../Layout/ContentWrapper";
import { contactList } from "../Utility/Constants";

const ContactCard = (props) => (
  <Col>
    <Card className="card-default" style={{ width: 200 }}>
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
        <div className="ml-auto">
          <button type="button" className="btn btn-xs btn-secondary">
            {contactList.VIEW}
          </button>
        </div>
      </CardFooter>
    </Card>
  </Col>
);

export const Menu = (employeeList, selected) =>
  employeeList.map((el, index) => {
    const { name } = el;
    const { imgsrc } = el;
    const { desc } = el;
    return (
      <ContactCard
        desc={desc}
        imgsrc={imgsrc}
        key={index}
        name={name}
        selected={selected}
      />
    );
  });

class Contacts extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    console.log("props", props.employeeList);
    this.menuItems = Menu(this.props.employeeList, this.state.selected);
  }

  state = {
    dropdownOpen: false,
    selected: "",
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    const menu = this.menuItems;
    return (
      <ContentWrapper>
        <Col style={{ padding: 0 }} lg="12" sm="12">
          <label style={{ fontSize: 20 }}>{contactList.PEOPLE}</label>
        </Col>
        <ScrollMenu
          alignCenter={false}
          data={menu}
          dragging={true}
          hideArrows={true}
          onSelect={this.onSelect}
          scrollBy={0}
          selected={selected}
          wheel={false}
        />
      </ContentWrapper>
    );
  }
}

export default Contacts;
