
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Pages/Shared/Header/Header';
import Container from "react-bootstrap/Container";
import { Col, Row } from 'react-bootstrap';
import Footer from './Component/Pages/Shared/Footer/Footer';
import RightSideNav from './Component/Pages/RightSideNav/RightSideNav';

function App() {
 

  return (
    <>
      <div className="header">
        <Header></Header>
      </div>

      <div className="main">
        <Container>
          <Row>
            <Col lg={3}>
              <h5>All Caterogy</h5>
            </Col>
            <Col lg={6}>
              <h5>Dragon News Home</h5>
            </Col>
            <Col lg={3}>
              {" "}
              <h5>Log in with</h5>
              <RightSideNav></RightSideNav>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App
