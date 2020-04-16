import React, { Component } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import Datatable from "../Tables/Datatable";

class BugTracker extends Component {
  render() {
    return (
      // TODO: All images path needs to be changed, SRC will come from API.
      // API Integration needs to be done for all hardcoded data.
      <ContentWrapper>
        <div className="content-heading">Projects</div>
        <Row>
          <Col lg="4">
            <div className="mb-4">
              <Card className="card-default mb-3">
                <CardBody>
                  <CardText>
                    <Row>
                      <Col lg="4">
                        <img
                          src="img/wonolo.jpg"
                          style={{ width: "100%" }}
                        ></img>
                      </Col>
                      <Col lg="8">
                        <h4>
                          <b>AMN Wonolo</b>
                        </h4>
                        <CardTitle>Software Project</CardTitle>
                      </Col>
                    </Row>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col lg="4">
            <div className="mb-4">
              <Card className="card-default mb-3">
                <CardBody>
                  <CardText>
                    <Row>
                      <Col lg="4">
                        <img
                          src="img/synergyLogo.jpeg"
                          style={{ width: "100%" }}
                        ></img>
                      </Col>
                      <Col lg="8">
                        <h4>
                          <b>Synergy Consulting</b>
                        </h4>
                        <CardTitle>Software Project</CardTitle>
                      </Col>
                    </Row>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col lg="12">
            <div className="card b">
              <div className="card-body">
                <Datatable options={{ responsive: true }}>
                  <table className="table w-100">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Key</th>
                        <th>Type</th>
                        <th>Lead</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="img/wonolo.jpg"
                            style={{ width: "40px", marginRight: "2%" }}
                          ></img>{" "}
                          AMN Wonolo
                        </td>
                        <td>AWON</td>
                        <td>Classic Software</td>
                        <td>
                          <img
                            src="img/nikhilsir.png"
                            style={{
                              width: "30px",
                              marginRight: "2%",
                              height: "30px",
                              borderRadius: "50%",
                            }}
                          ></img>{" "}
                          Nikhil Agarwal
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="img/synergyLogo.jpeg"
                            style={{ width: "40px", marginRight: "2%" }}
                          ></img>{" "}
                          Synergy Consulting
                        </td>
                        <td>SCON</td>
                        <td>ESS Software</td>
                        <td>
                          <img
                            src="img/nikhilsir.png"
                            style={{
                              width: "30px",
                              marginRight: "2%",
                              height: "30px",
                              borderRadius: "50%",
                            }}
                          ></img>{" "}
                          Nikhil Agarwal
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Datatable>
              </div>
            </div>
          </Col>
        </Row>
      </ContentWrapper>
    );
  }
}

export default BugTracker;
