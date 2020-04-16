import React, { Component } from "react";

import Contacts from "../Extras/Contacts";
import TeamViewer from "../Extras/TeamViewer";

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
