import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = ()=>{

    return (
        <Navbar className='f' bg="dark" data-bs-theme="dark">
        
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">made by turki marzoqi-2024</Nav.Link>
           
          </Nav>
       
      </Navbar>
    )
}

export default Footer