
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header/Header';
import { Container } from 'postcss';
import { Col, Row } from 'react-bootstrap';

function App() {
 

  return (
    <div className="App">
      <Header></Header>
      <Container>
       
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App
