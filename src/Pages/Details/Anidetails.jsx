import React from 'react'
import { useParams } from 'react-router-dom'
import { Anime } from '../../Data/Anime'
import { Col, Row } from 'react-bootstrap'
import Header from '../../Components/Header'


function MobDet() {
    const {id} = useParams();
    const item = Anime.find((e)=> e.id === Number(id))
    
    console.log(id)
    
  return (
    <Row>
    <Col sm={10}>
    <Header/>
    <div className='any'>
    <div className='mal'style={{marginTop:"30px"}}>
            <img src={item.image} alt=""  height={"400px"} />
            <h3>Title:{item.title}</h3>
            <h3>Year:{item.releaseYear}</h3>
            <button className="btn btn-primary">Watch Now</button>
          </div>
        </div>
    </Col>
    </Row>
  )
}

export default MobDet;