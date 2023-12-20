import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restuarent}) {
  return (
    
   <Link to={`/restuarentview/${restuarent.id}`} style={{textDecoration:'none'}}>
        <Card style={{ width: '300px' }}>
        <Card.Img height={'350px'} variant="top" src={restuarent.photograph}/>
        <Card.Body>
          <Card.Title className='text-center text-warning'>{restuarent.name}</Card.Title>
          <hr/>

          <Card.Text>
            {restuarent.address}
          </Card.Text>
          <hr/>

        
            <div className='d-flex justify-content-between'>
              <a style={{textDecorationColor:'none'}} href="">{restuarent.neighborhood}</a>
              <a style={{textDecorationColor:'none'}} href="">{restuarent.cuisine_type}</a>


            </div>
          
         
        </Card.Body>
      </Card>
   </Link>
  )
}

export default RestCard