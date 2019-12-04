import React, {Component} from 'react';
import {Menu, Sidebar} from "semantic-ui-react";

class SidebarMenu extends Component {
  render() {
    const {sidebarOpen} = this.props;
    return(
      <Sidebar
        as={Menu}
        animation='overlay'
        vertical
        visible={sidebarOpen}
        width='thin'
      >
        <Menu.Item as='a'>
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          Games
        </Menu.Item>
        <Menu.Item as='a'>
          Channels
        </Menu.Item>
      </Sidebar>
    )
  }
}

export default SidebarMenu;