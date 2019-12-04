import styled from "styled-components";
import {Menu} from "semantic-ui-react";

export const StyledHome = styled.div`
  &&& {
    height: 100vh;
  }
`;

export const StyledNavbar = styled(Menu)`
  &&& {
    padding: 5px 30px;
    background-color: #01395E !important;
  }
`;

export const StyledSidebarIcon = styled(Menu.Item)`
  &&& {
    color: #FFFFFF !important;
  }
`;

export const StyledTitle = styled(Menu.Item)`
  &&& {
    color: #FFFFFF !important;
    font-size: 20px;
    font-weight: 600 !important;
  }
`;