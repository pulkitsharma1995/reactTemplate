import PropTypes from "prop-types";
import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

const selected = "";

// All items component
// Important! add unique key
export const Menu = (list, selected, CustomComponent) => {
  return list.map((el, index) => {
    return <CustomComponent data={el} key={index} selected={selected} />;
  });
};

export default class HorizontalScroll extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(props.list, selected, props.CustomComponent);
  }

  static defaultProps = {
    CustomComponent: React.Component,
    alignCenter: false,
    data: [],
    dragging: false,
    hideArrows: false,
    scrollBy: 0, //Shows whole list
    wheel: false,
  };

  static propTypes = {
    CustomComponent: PropTypes.elementType,
    alignCenter: PropTypes.bool,
    data: PropTypes.array,
    dragging: PropTypes.bool,
    hideArrows: PropTypes.bool,
    scrollBy: PropTypes.number,
    wheel: PropTypes.bool,
  };

  state = {
    selected,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    const { alignCenter, dragging, hideArrows, wheel } = this.props;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div>
        <ScrollMenu
          alignCenter={alignCenter}
          data={menu}
          dragging={dragging}
          hideArrows={hideArrows}
          onSelect={this.onSelect}
          selected={selected}
          wheel={wheel}
        />
      </div>
    );
  }
}
