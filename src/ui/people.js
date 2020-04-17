import React, { Component } from "react";

import Contacts from "../components/Extras/Contacts";
import TeamViewer from "../components/Extras/TeamViewer";

export default class People extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Contacts />
        <TeamViewer />
      </>
    );
  }
}
