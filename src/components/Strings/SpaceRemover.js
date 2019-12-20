import React, {Component} from 'react';
import {
  StyledCopyButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledToolBody,
  StyledToolContainer,
  StyledToolDescription,
  StyledToolName
} from "../../res/styles";
import {strings} from "../../res/strings";
import {Icon, TextArea} from "semantic-ui-react";
import {StyledForm} from "./SpaceRemoverStyles";
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

  handleRemoveSpace = () => {
    const {input} = this.state;
    const result = input.replace(/\s/g, '');
    this.setState({
      result: result,
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

  render() {
    const {input, result, copied} = this.state;
    return (
      <StyledToolContainer>
        <StyledToolName>{strings.menu.strings.spaceRemover.title}</StyledToolName>
        <StyledToolDescription>Description Placeholder</StyledToolDescription>
        <StyledToolBody>
          <StyledForm>
            <TextArea
              placeholder='Enter String'
              rows={10}
              value={input}
              onChange={this.handleTextChange}
            />
            <StyledPrimaryButton
              onClick={this.handleRemoveSpace}
            >
              {strings.menu.strings.spaceRemover.removeAction}
            </StyledPrimaryButton>
            <StyledSecondaryButton
              onClick={this.handleClear}
            >
              {strings.menu.strings.spaceRemover.clearButton}
            </StyledSecondaryButton>
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
                {strings.menu.strings.copyButton}
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
      </StyledToolContainer>
    )
  }
}

export default SpaceRemover;