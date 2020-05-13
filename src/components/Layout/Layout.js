import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return (
    <div>
      <div>ToolBar, SideDrawer, Backdrop</div>
      <Main>{props.children}</Main>
    </div>
  );
};

export default Layout;

const Main = styled.main`
  margin-top: 16px;
`;
