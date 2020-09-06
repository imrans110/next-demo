import { Responsive, Container, Grid } from "semantic-ui-react";
import LaunchCard from "@components/LaunchCard";
import Filter from "@components/Filter";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

export const DesktopContainer = ({ children }) => (
  <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
    {/* <Grid columns={2}> */}
    <div className="desktop-view"> {children}</div>
    {/* </Grid> */}
  </Responsive>
);

export const MobileContainer = ({ children }) => (
  <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
    <Container>{children}</Container>
  </Responsive>
);
