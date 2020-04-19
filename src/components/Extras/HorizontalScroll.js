import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { identity } from "lodash";
// list of items
const list = [
  { name: "item1" },
  { name: "item2" },
  { name: "item3" },
  { name: "item4" },
  { name: "item5" },
  { name: "item6" },
  { name: "item7" },
  { name: "item8" },
  { name: "item9" },
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map((el, index) => {
    const { name } = el;

    return <MenuItem text={name} key={index} selected={selected} />;
  });

const selected = "item1";

export default class HorizontalScroll extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  static defaultProps = {
    alignCenter: false,
    data: [],
    dragging: false,
    hideArrows: false,
    scrollBy: 0, //Shows whole list
    wheel: false,
  };

  state = {
    selected,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    const { dragging, alignCenter, hideArrows, wheel } = this.props;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div>
        <ScrollMenu
          data={menu}
          dragging={dragging}
          selected={selected}
          onSelect={this.onSelect}
          wheel={wheel}
          alignCenter={alignCenter}
          hideArrows={hideArrows}
        />
      </div>
    );
  }
}
