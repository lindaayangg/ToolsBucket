import styled from "styled-components";
import {Button, Header, Segment} from "semantic-ui-react";

export const StyledToolContainer = styled.div`
  &&& {
    margin-left: 280px;
    padding: 30px;
  }
`;

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

export const StyledToolBody = styled(Segment)`
  &&& {
    margin-top: 40px;
  }
`;

export const StyledPrimaryButton = styled(Button)`
  &&& {
    border-radius: 10px;
    margin: 30px 15px;
    background: #01395E;
    color: #FFFFFF;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    &:hover {
      background: rgb(0, 39, 65);
      color: #FFFFFF;
      box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
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
    background: #E0E0E0;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    &:hover {
      background: #D5D5D5;
      box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    }
    &:focus {
      background: #E0E0E0;
      color: rgba(0, 0, 0, 0.87);
    }
  }
`;

export const StyledCopyButton = styled(Button)`
  &&& {
    border-radius: 10px;
    margin: 25px 15px 20px 15px;
    background: #E0E0E0;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    &:hover {
      background: #D5D5D5;
      box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    }
    &:focus {
      background: #E0E0E0;
      color: rgba(0, 0, 0, 0.87);
    }
  }
`;
