import styled from "styled-components";
import {Form} from "semantic-ui-react";

export const StyledForm = styled(Form)`
  &&& {
    text-align: center;
    padding: 10px;
  }
`;

export const StyledRadioGroup = styled(Form.Field)`
  &&& {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
`;