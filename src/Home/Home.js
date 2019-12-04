import React, {Component} from 'react';
import {Input, Menu, Sidebar} from "semantic-ui-react";
import {StyledHome, StyledNavbar, StyledSidebarIcon, StyledTitle} from "./styles";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";

class Home extends Component {
  state = {
    sidebarOpen: false,
  };

  handleSidebarOnClick = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    })
  };

  render() {
    const {sidebarOpen} = this.state;
    return (
      <StyledHome>
        <Sidebar.Pushable>
          <SidebarMenu
            sidebarOpen={sidebarOpen}
          />
          <Sidebar.Pusher>
            <StyledNavbar secondary>
              <StyledSidebarIcon
                icon='sidebar'
                onClick={this.handleSidebarOnClick}
              />
              <StyledTitle
                name='ToolsBucket'
              />
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input icon='search' placeholder='Search...'/>
                </Menu.Item>
              </Menu.Menu>
            </StyledNavbar>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </StyledHome>
    )
  }
}

export default Home;
