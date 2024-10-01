import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import vending from './img/vending machine1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="secondary" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Vending Machine</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'>자판기 관리 서비스입니다.</div>

      {/* 상품 목록 */}
      <div>자판기 목록</div>
        <Container>
          <Row>
            <Col>
              <img src={vending} width={'80%'}></img>
              <h4>자판기1</h4>
              <p>기계위치</p>
            </Col>
            <Col>              
              <img src={vending} width={'80%'}></img>
              <h4>자판기2</h4>
              <p>기계위치</p>
            </Col>
            <Col>              
              <img src={vending} width={'80%'}></img>
              <h4>자판기3</h4>
              <p>기계위치</p>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
