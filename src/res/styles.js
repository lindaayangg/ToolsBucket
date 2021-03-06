import styled from "styled-components";
import {Button, Header, Radio, Segment} from "semantic-ui-react";

export const StyledToolContainer = styled.div`
  &&& {
    margin-left: 300px;
    padding: 30px 50px;
    background: #FAFAFA;
  }
`;

export const StyledToolBody = styled(Segment)`
  &&& {
    margin-top: 40px;
    width: 65%;
  }
`;

//Tools Title
export const StyledToolName = styled(Header)`
  &&& {
    font-size: 25px;
    font-weight: 600;
    color: #01395E;
    margin-bottom: 5px;
  }
`;

export const StyledToolDescription = styled(Header.Subheader)`
  &&& {
    font-size: 15px;
    color: #5F5F5F;
  }
`;

//Buttons
export const StyledPrimaryButton = styled(Button)`
  &&& {
    border-radius: 10px;
    margin: 30px 15px;
    background: #01395E;
    color: #FFFFFF;
    width: 40%;
    &:hover {
      background: rgb(0, 39, 65);
      color: #FFFFFF;
    }
    &:focus {
      background: #01395E;
      color: #FFFFFF;
    }
  }
`;

export const StyledSecondaryButton = styled(Button)`
  &&& {
    border-radius: 10px;
    margin: 30px 15px;
    background: #FFFFFF;
    color: #01395E;
    border: 1.5px solid #01395E;
    width: 40%;
    &:hover {
      background: rgb(0, 39, 65);
      color: #FFFFFF;
      border: 1.5px solid rgb(0, 39, 65);
    }
    &:focus {
      background: #FFFFFF;
      color: #01395E;
    }
  }
`;

export const StyledCopyButton = styled(Button)`
  &&& {
    border-radius: 10px;
    margin: 25px 15px 10px 15px;
    background: #FFFFFF;
    color: #01395E;
    border: 1.5px solid #01395E;
    width: 40%;
    &:hover {
      background: rgb(0, 39, 65);
      color: #FFFFFF;
      border: 1.5px solid rgb(0, 39, 65);
    }
    &:focus {
      background: #FFFFFF;
      color: #01395E;
    }
  }
`;

//Titles
export const StyledToolBodyTitle = styled(Header)`
  &&& {
    text-align: left;
    color: #01395E;
  }
`;

//Radio Buttons
export const StyledRadioButton = styled(Radio)`
  &&& {
    margin: 10px 0;
  }
`;