import React from 'react'
import { Col, Row } from 'react-bootstrap'
import image from '../Assets/image2.jpg'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../Components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RestView() {
  const [show, setShow] = useState(false);
  const {id} = useParams()
  console.log(id);


  const allRestuarent = useSelector((state)=>state.restuarentSlice.allRestuarent)
  console.log(allRestuarent);
  const selectedrestuarent =allRestuarent.find(item=>item.id == id)
  console.log(selectedrestuarent);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Row>
        <Col md={1}></Col>      
        <Col md={3}>
        <img  width={'100%'} height={'100%'}  className='rounded'  src={selectedrestuarent.photograph} alt="no image"  />
        </Col>
        <Col md={7}>
            <hr/>
            <h4 className='text-center'><span className='text-warning'> RESTUARENT</span>DETAILS</h4>
            <hr/>

            <ListGroup>
      <ListGroup.Item><h4 className='text-center p-4'>{selectedrestuarent.name}</h4></ListGroup.Item>
      <ListGroup.Item>Neibourhood:{selectedrestuarent.neighborhood}</ListGroup.Item>
      <ListGroup.Item>cuisine_type:{selectedrestuarent.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address:{selectedrestuarent.address}</ListGroup.Item>
      <ListGroup.Item className='text-center p-3 mb-2'>

      
          <button onClick={handleShow} className='btn btn-warning me-2'>Operating Hours</button>
         
  
          <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
  
           <p>Monday 9.00AM - 9.00PM <hr/></p>
           <p>Tuesday 9.00AM - 9.00PM <hr/></p>
           <p>Wednesday 9.00AM - 9.00PM <hr/></p>
           <p>Thursday 9.00AM - 9.00PM <hr/></p>
           <p>Friday 9.00AM - 9.00PM <hr/></p>
           <p>Saturday 9.00AM - 9.00PM <hr/></p>
           <p>Sunday 9.00AM - 9.00PM <hr/></p>
  
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
        <RestReview/>
       

      </ListGroup.Item>
    </ListGroup>

        </Col>
        <Col md={1}></Col>
   
    </Row>
  )
}

export default RestView