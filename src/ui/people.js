import React, { Component } from "react";

import Contacts from "../components/Extras/Contacts";
import TeamViewer from "../components/Extras/TeamViewer";

//TODO: API needs to be integrated.
const employeeList = [
  {
    imgsrc: "img/user/02.jpg",
    name: "Audrey Hunt",
    desc:
      "Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!",
  },
  {
    imgsrc: "img/user/03.jpg",
    name: "Ethan",
    desc:
      "Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!",
  },
  {
    imgsrc: "img/user/04.jpg",
    name: "Nathan",
    desc:
      "Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!",
  },
  {
    imgsrc: "img/user/04.jpg",
    name: "Nathan",
    desc:
      "Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!",
  },
  {
    imgsrc: "img/user/04.jpg",
    name: "Nathan",
    desc:
      "Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!",
  },
  {
    imgsrc: "img/user/04.jpg",
    name: "Nathan",
    desc:
      "Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!",
  },
  {
    imgsrc: "img/user/04.jpg",
    name: "Nathan",
    desc:
      "Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!",
  },
];

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
export default class People extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Contacts employeeList={employeeList} />
        <TeamViewer teamData={teamData} />
      </>
    );
  }
}
