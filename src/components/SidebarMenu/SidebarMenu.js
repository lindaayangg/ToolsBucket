import React, {Component} from 'react';
import {Input, Menu} from "semantic-ui-react";
import {StyledCategoryTitle, StyledSidebarMenu, StyledStringIcon, StyledToolName} from "./styles";
import {strings} from "../../res/strings";

class SidebarMenu extends Component {
  render() {
    return (
      <StyledSidebarMenu vertical>
        <Menu.Item>
          <Input icon='search' iconPosition='left' placeholder='Search...' transparent inverted/>
        </Menu.Item>
        <Menu.Item>
          <StyledStringIcon name='text height'/>
          <StyledCategoryTitle>{strings.menu.strings.header}</StyledCategoryTitle>
          <Menu.Menu>
            <StyledToolName name={strings.menu.strings.spaceRemover}/>
            <StyledToolName name={strings.menu.strings.extraSpaceRemover}/>
            <StyledToolName name={strings.menu.strings.dashRemover}/>
            <StyledToolName name={strings.menu.strings.underscoreRemover}/>
            <StyledToolName name={strings.menu.strings.duplicateLineRemover}/>
            <StyledToolName name={strings.menu.strings.emptyLineRemover}/>
            <StyledToolName name={strings.menu.strings.lineBreakRemover}/>
            <StyledToolName name={strings.menu.strings.camelCaseGenerator}/>
            <StyledToolName name={strings.menu.strings.snakeCaseGenerator}/>
            <StyledToolName name={strings.menu.strings.kababCaseGenerator}/>
            <StyledToolName name={strings.menu.strings.snakeCase2CamelCase}/>
            <StyledToolName name={strings.menu.strings.camelCase2SnakeCase}/>
            <StyledToolName name={strings.menu.strings.stringReverser}/>
            <StyledToolName name={strings.menu.strings.wordReverser}/>
            <StyledToolName name={strings.menu.strings.wordSorter}/>
            <StyledToolName name={strings.menu.strings.textLineReverser}/>
            <StyledToolName name={strings.menu.strings.textLineSorter}/>
            <StyledToolName name={strings.menu.strings.image2Base64Converter}/>
            <StyledToolName name={strings.menu.strings.base642ImageConverter}/>
          </Menu.Menu>
        </Menu.Item>
      </StyledSidebarMenu>
    )
  }
}

export default SidebarMenu;