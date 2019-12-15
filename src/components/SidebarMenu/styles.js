import styled from "styled-components";
import {Icon, Input, Menu} from "semantic-ui-react";

export const StyledSidebarMenu = styled(Menu)`
  &&& {
    height: 100vh;
    width: 20rem !important;
    border-radius: 0;
    background: #01395E !important;
    overflow-y: auto;
  }
`;

export const StyledSearchBar = styled(Input)`
  &&& {
    background: #416B86 !important;
  }
`;

export const StyledCategoryTitle = styled(Menu.Header)`
  &&& {
    color: #FFFFFF;
    font-size: 15px !important;
  }
`;

export const StyledToolName = styled(Menu.Item)`
  &&& {
    color: rgba(255,255,255,.5) !important;
    font-size: 14px !important;
    padding: 0.5em 1.1em !important;
    cursor: pointer;
    &:hover {
      color: #F5F5F5 !important
    };
  }
`;

// icons
export const StyledStringIcon = styled(Icon)`
  &&& {
    color: #FFFFFF;
  }
`;