import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";

import Datatable from "../Tables/Datatable";
import ContentWrapper from "../Layout/ContentWrapper";
import { projectBoard } from "../Utility/Constants";
import "../../styles/app/extras/bugTracker.scss";

// Note: API not integrated yet, so added JSON
const projectData = [
  {
    projectName: "AMN Wonolo",
    projectCategory: "SoftWare Project",
    projectType: "Classic Software",
    projectKey: "AWON",
    projectLead: "Nikhil Agarwal",
    projectLogoUrl: "img/wonolo.jpg",
    projectLeadImageUrl: "img/nikhilsir.png"
  },
  {
    projectName: "Synergy Consulting",
    projectCategory: "SoftWare Project",
    projectType: "ESS Software",
    projectKey: "SCON",
    projectLead: "Nikhil Agarwal",
    projectLogoUrl: "img/synergyLogo.jpeg",
    projectLeadImageUrl: "img/nikhilsir.png"
  },
  {
    projectName: "Synergy Consulting",
    projectCategory: "SoftWare Project",
    projectType: "ESS Software",
    projectKey: "SCON",
    projectLead: "Nikhil Agarwal",
    projectLogoUrl: "img/synergyLogo.jpeg",
    projectLeadImageUrl: "img/nikhilsir.png"
  }
];

class BugTracker extends Component {
  static defaultProps = {
    projectName: "AMN Wonolo",
    projectCategory: "SoftWare Project",
    projectType: "Classic Software",
    projectKey: "AWON",
    projectLead: "Nikhil Agarwal",
    projectLogoUrl: "img/wonolo.jpg"
  };
  render() {
    return (
      // TODO: All images path needs to be changed, SRC will come from API.
      // API Integration needs to be done for all hardcoded data.
      <ContentWrapper>
        <div className="content-heading">{projectBoard.projectsHeading}</div>
        <Row>
          {projectData.map(data => {
            return (
              <Col lg="4">
                <div className="mb-4">
                  <Card className="card-default mb-3">
                    <CardBody>
                      <CardText>
                        <Row>
                          <Col lg="4" xs="4">
                            <img
                              src={data.projectLogoUrl}
                              className="card-project-logo"
                            ></img>
                          </Col>
                          <Col lg="8" xs="8">
                            <h4>
                              <b>{data.projectName}</b>
                            </h4>
                            <CardTitle>{data.projectCategory}</CardTitle>
                          </Col>
                        </Row>
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            );
          })}
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
                      {projectData.map(data => {
                        return (
                          <tr>
                            <td>
                              <img
                                src={data.projectLogoUrl}
                                className="table-project-logo"
                              ></img>{" "}
                              {data.projectName}
                            </td>
                            <td>{data.projectKey}</td>
                            <td>{data.projectType}</td>
                            <td>
                              <img
                                src={data.projectLeadImageUrl}
                                className="table-project-lead-image"
                              ></img>{" "}
                              {data.projectLead}
                            </td>
                          </tr>
                        );
                      })}
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
