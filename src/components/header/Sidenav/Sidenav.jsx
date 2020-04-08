import React from "react";
import Sidenav from "react-simple-sidenav";
import SideNavItems from "./Sidenav_items";
const SideNavigation = (props) => (
  <div>
    <Sidenav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
        background: "#242424",
        maxWidth: "220px",
      }}
    >
      <SideNavItems />
    </Sidenav>
  </div>
);

export default SideNavigation;
