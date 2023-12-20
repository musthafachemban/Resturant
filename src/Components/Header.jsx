import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoimage from '../Assets/image.png.jpg'
import { useDispatch } from 'react-redux';
import { search } from '../redux/restuarentSlice';

function Header() {
  const dispatch = useDispatch()
  return (
    <Navbar varient='dark' className='bg-warning'>
        <Container>
          <Navbar.Brand href="#home" className='d-flex'>
            <img
               src={logoimage}
              width="50"
              height="50"
              className="d-inline-block align-top" 
              
            />{' '}
           <h5 className='mt-3 ms-4'> <span className='text-danger'>Food</span>circle</h5 >
          </Navbar.Brand>
       
      <input onChange={(e)=>dispatch(search(e.target.value))} type="text" className='form-control w-25' placeholder='search by neibourhood' />
      
          
        </Container>
      </Navbar>
  )
}

export default Header