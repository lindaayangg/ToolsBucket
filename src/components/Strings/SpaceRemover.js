import React, {Component} from 'react';
import {
  StyledCopyButton,
  StyledPrimaryButton,
  StyledRadioButton,
  StyledSecondaryButton,
  StyledToolBody,
  StyledToolBodyTitle,
  StyledToolContainer,
  StyledToolDescription,
  StyledToolName
} from "../../res/styles";
import {strings} from "../../res/strings";
import {Icon, TextArea} from "semantic-ui-react";
import {StyledForm, StyledRadioGroup} from "./SpaceRemoverStyles";
import {CopyToClipboard} from "react-copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";

class SpaceRemover extends Component {
  state = {
    input: '',
    result: '',
    copied: false,
  };

  handleTextChange = (event) => {
    this.setState({
      input: event.target.value,
    })
  };

  handleRadioChange = (event, {value}) => {
    this.setState({value})
  };

  handleClear = () => {
    this.setState({
      input: '',
      result: '',
    })
  };

  handleCopyToClipBoard = () => {
    this.setState({
      copied: true,
    })
  };

  handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      copied: false,
    })
  };

  handleRemoveSpacesIncludingLineBreak = () => {
    const {input} = this.state;
    const result = input.replace(/\s/g, '');
    this.setState({
      result: result,
    })
  };

  handleRemoveSpacesExcludingLineBreak = () => {
    const {input} = this.state;
    const result = input.replace(/[^\S\r\n]/g, '');
    this.setState({
      result: result,
    })
  };

  renderSelection = () => {
    const {value} = this.state;
    return (
      <StyledToolBody>
        <StyledForm>
          <StyledToolBodyTitle>
            {strings.tools.strings.select}
          </StyledToolBodyTitle>
          <StyledRadioGroup>
            <StyledRadioButton
              label={strings.tools.strings.spaceRemover.removeIncludeLineBreaks}
              name='radioGroup'
              value='include'
              checked={value === 'include'}
              onChange={this.handleRadioChange}
            />
            <StyledRadioButton
              label={strings.tools.strings.spaceRemover.removeExcludeLineBreaks}
              name='radioGroup'
              value='exclude'
              checked={value === 'exclude'}
              onChange={this.handleRadioChange}
            />
          </StyledRadioGroup>
        </StyledForm>
      </StyledToolBody>
    )
  };

  renderToolBody = () => {
    const {input, result, copied, value} = this.state;
    return (
      <StyledToolBody>
        <StyledForm>
          <StyledToolBodyTitle as='h3'>{strings.tools.inputText}</StyledToolBodyTitle>
          <TextArea
            placeholder='Enter String'
            rows={10}
            value={input}
            onChange={this.handleTextChange}
          />
          <StyledPrimaryButton
            onClick={value === "include"
              ? this.handleRemoveSpacesIncludingLineBreak
              : this.handleRemoveSpacesExcludingLineBreak}
          >
            {strings.tools.strings.removeAction}
          </StyledPrimaryButton>
          <StyledSecondaryButton
            onClick={this.handleClear}
          >
            {strings.tools.strings.clearButton}
          </StyledSecondaryButton>
          <StyledToolBodyTitle as='h3'>{strings.tools.outputText}</StyledToolBodyTitle>
          <TextArea
            placeholder='Result'
            rows={10}
            disabled
            value={result}
          />
          <CopyToClipboard
            text={result}
            onCopy={this.handleCopyToClipBoard}
          >
            <StyledCopyButton>
              {strings.tools.strings.copyButton}
            </StyledCopyButton>
          </CopyToClipboard>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={copied}
            autoHideDuration={2000}
            onClose={this.handleCloseSnackbar}
            message={
              <span id="client-snackbar">
                  <Icon name='check circle'/>
                  Copied to Clipboard!
                  </span>
            }
          />
        </StyledForm>
      </StyledToolBody>
    )
  };

  render() {
    return (
      <StyledToolContainer>
        <StyledToolName>{strings.menu.strings.spaceRemover}</StyledToolName>
        <StyledToolDescription>Description Placeholder</StyledToolDescription>
        {this.renderSelection()}
        {this.renderToolBody()}
      </StyledToolContainer>
    )
  }
}

export default SpaceRemover;