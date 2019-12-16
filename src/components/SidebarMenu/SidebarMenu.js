import React, {Component} from 'react';
import {Input, Menu} from "semantic-ui-react";
import {StyledCategoryTitle, StyledName, StyledSidebarMenu, StyledStringIcon, StyledToolName, StyledToolsListWrapper} from "./styles";
import {strings} from "../../res/strings";
import {NavLink} from "react-router-dom";

class SidebarMenu extends Component {
  renderStringsMenu = () => {
    return (
      <StyledToolsListWrapper>
        <StyledToolName as={NavLink} to="/space-remover">{strings.menu.strings.spaceRemover}</StyledToolName>
        <StyledToolName as={NavLink} to="/extra-space-remover">{strings.menu.strings.extraSpaceRemover}</StyledToolName>
        <StyledToolName as={NavLink} to="/dash-remover">{strings.menu.strings.dashRemover}</StyledToolName>
        <StyledToolName as={NavLink} to="/underscore-remover">{strings.menu.strings.underscoreRemover}</StyledToolName>
        <StyledToolName as={NavLink} to="/duplicate-line-remover">{strings.menu.strings.duplicateLineRemover}</StyledToolName>
        <StyledToolName as={NavLink} to="/empty-line-remover">{strings.menu.strings.emptyLineRemover}</StyledToolName>
        <StyledToolName as={NavLink} to="/line-break-remover">{strings.menu.strings.lineBreakRemover}</StyledToolName>
        <StyledToolName as={NavLink} to="/camel-case-generator">{strings.menu.strings.camelCaseGenerator}</StyledToolName>
        <StyledToolName as={NavLink} to="/snake-case-generator">{strings.menu.strings.snakeCaseGenerator}</StyledToolName>
        <StyledToolName as={NavLink} to="/kabab-case-generator">{strings.menu.strings.kababCaseGenerator}</StyledToolName>
        <StyledToolName as={NavLink} to="/snake-case-to-camel-case-converter">{strings.menu.strings.snakeCase2CamelCase}</StyledToolName>
        <StyledToolName as={NavLink} to="/camel-case-to-snake-case-converter">{strings.menu.strings.camelCase2SnakeCase}</StyledToolName>
        <StyledToolName as={NavLink} to="/string-reverser">{strings.menu.strings.stringReverser}</StyledToolName>
        <StyledToolName as={NavLink} to="/word-reverser">{strings.menu.strings.wordReverser}</StyledToolName>
        <StyledToolName as={NavLink} to="/word-sorter">{strings.menu.strings.wordSorter}</StyledToolName>
        <StyledToolName as={NavLink} to="/text-line-reverser">{strings.menu.strings.textLineReverser}</StyledToolName>
        <StyledToolName as={NavLink} to="/text-line-sorter">{strings.menu.strings.textLineSorter}</StyledToolName>
        <StyledToolName as={NavLink} to="/image-to-base64-converter">{strings.menu.strings.image2Base64Converter}</StyledToolName>
        <StyledToolName as={NavLink} to="/base64-to-image-converter">{strings.menu.strings.base642ImageConverter}</StyledToolName>
      </StyledToolsListWrapper>
    )
  };

  render() {
    return (
      <StyledSidebarMenu className='vertical left fixed'>
        <Menu.Item>
          <StyledName>
            {strings.menu.title}
          </StyledName>
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' iconPosition='left' placeholder='Search...' transparent inverted/>
        </Menu.Item>
        <Menu.Item>
          <StyledStringIcon name='text height'/>
          <StyledCategoryTitle>{strings.menu.strings.header}</StyledCategoryTitle>
          {this.renderStringsMenu()}
        </Menu.Item>
      </StyledSidebarMenu>
    )
  }
}

export default SidebarMenu;