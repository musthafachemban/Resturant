import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../Components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestuarent } from '../redux/restuarentSlice'


function Home() {
  const allRestuarent = useSelector((state)=>state.restuarentSlice.allRestuarent)
  console.log(allRestuarent);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRestuarent())

  },[])
  return (
<Row>


   {allRestuarent?.length>0? 
   allRestuarent?.map((restuarent)=>( <Col className='px-5 py-3' sm={6} md={4}>
   <RestCard restuarent={restuarent}/>
</Col>))
  :<p>Nothing to display</p>
}
    </Row>

  )
}

export default Home