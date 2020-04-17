import React, { Component } from "react";
import { Row, Col, Progress, Tooltip } from "reactstrap";

import ContentWrapper from "../Layout/ContentWrapper";
import Sparkline from "../Common/Sparklines";
import { teamViewer } from "../Utility/Constants";

/**
 * Wrap an element and assign automatically an ID,
 * creates handler for show/hide tooltips without
 * the hassle of creating new states and class methods.
 * Support only one child and simple text.
 */
class BSTooltip extends Component {
  // static propTypes { content: PropTypes.string }
  state = {
    _id: "id4tooltip_" + new Date().getUTCMilliseconds(),
    tooltipOpen: false,
  };
  toggle = () => this.setState({ tooltipOpen: !this.state.tooltipOpen });
  render() {
    return [
      <Tooltip
        {...this.props}
        isOpen={this.state.tooltipOpen}
        toggle={this.toggle}
        target={this.state._id}
        key="1"
      >
        {this.props.content}
      </Tooltip>,
      React.cloneElement(React.Children.only(this.props.children), {
        id: this.state._id,
        key: "2",
      }),
    ];
  }
}

//TODO: API needs to be integrated.
const teamData = [
  {
    employeeImgSrc: [
      "img/user/02.jpg",
      "img/user/04.jpg",
      "img/user/03.jpg",
      "img/user/05.jpg",
      "img/user/06.jpg",
      "img/user/07.jpg",
    ],
    noOfTasks: 9,
    teamLeadImgSrc: "img/user/03.jpg",
    teamName: "Frontend",
    techStack: ["ReactJs", "NodeJs", "SQL"],
  },
  {
    employeeImgSrc: ["img/user/02.jpg", "img/user/07.jpg"],
    noOfTasks: 16,
    teamLeadImgSrc: "img/user/03.jpg",
    teamName: "Backend",
    techStack: ["AWS", "NodeJs", "SQL"],
  },
];

class TeamViewer extends Component {
  static defaultProps = {
    employeeImgSrc: ["img/user/03.jpg"],
    noOfTasks: 0,
    teamLeadImgSrc: "img/user/03.jpg",
    teamName: "VS",
    techStack: ["ReactJs,NodeJs"],
  };

  render() {
    return (
      <ContentWrapper>
        <Col style={{ padding: 0 }} lg="12" sm="12">
          <label style={{ fontSize: 20 }}>{teamViewer.YOUR_TEAM}</label>
        </Col>
        <Row>
          {teamData.map((team) => {
            return (
              <Col xl="4" lg="6">
                {/* Team Card */}
                <div className="card card-default">
                  <div className="card-header">
                    <div className="card-title">{team.teamName}</div>
                  </div>
                  <div className="card-body bt">
                    <BSTooltip content="Team leader">
                      <img
                        className="rounded-circle thumb48"
                        src={team.teamLeadImgSrc}
                        alt="project member"
                      />
                    </BSTooltip>
                    {team.employeeImgSrc.map((images) => {
                      return (
                        <a className="inline mr-1" href="">
                          <img
                            className="rounded-circle thumb24"
                            src={images}
                            alt="project member"
                          />
                        </a>
                      );
                    })}
                  </div>
                  <div className="card-body bb text-center">
                    <BSTooltip content="Progress of asigned tasks">
                      <Progress
                        className="progress-xs m-0"
                        value="50"
                        color="info"
                      />
                    </BSTooltip>
                  </div>
                  <div className="card-body bb">
                    <div className="row text-center">
                      <div className="col-4">
                        <p className="text-bold">{teamViewer.TEAM_BUDGET}</p>
                        <Sparkline
                          values="60,40"
                          options={{
                            type: "pie",
                            height: "24",
                            sliceColors: ["#edf1f2", "#ff902b"],
                          }}
                          className="sparkline inline mr-2"
                        />
                      </div>
                      <div className="col-4">
                        <p className="text-bold">{teamViewer.TASKS}</p>
                        <div className="h3 m-0">{team.noOfTasks}</div>
                      </div>
                      <div className="col-4">
                        <p className="text-bold">{teamViewer.AVAILABITY}</p>
                        <Sparkline
                          values="70,30"
                          options={{
                            type: "pie",
                            height: "24",
                            sliceColors: ["#edf1f2", "#ff902b"],
                          }}
                          className="sparkline inline mr-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-inline m-0">
                      {team.techStack.map((data) => {
                        return (
                          <li className="list-inline-item">
                            <div className="badge bg-gray">{data}</div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="card-footer text-center">
                    <button
                      type="button"
                      className="btn btn-secondary btn-oval"
                    >
                      {teamViewer.MANAGE_TEAM}
                    </button>
                  </div>
                </div>
                {/* end Team Card */}
              </Col>
            );
          })}
        </Row>
      </ContentWrapper>
    );
  }
}

export default TeamViewer;
