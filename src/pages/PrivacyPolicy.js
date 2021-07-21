import React from "react";
import { Container, Row, MarginSparcer } from "../components/Grid";

import NavigationBar from "../pageComponents/NavBar/NavigationBar";

class PrivacyPolicy extends React.Component {
  render() {
    return (
      <>
        <NavigationBar>Privacy Policy</NavigationBar>
        <MarginSparcer />
        <Container>
          <Row></Row>
        </Container>
      </>
    );
  }
}

export default PrivacyPolicy;
