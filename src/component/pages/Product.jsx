import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Container from '../layers/Container';
import Db from '../../db.json'

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.state.pids);
  let [pid,setPid]= useState(0);
  let [pprice,setPprice]= useState(0);
  let [ptitle,setPtitle]= useState(0);
  let [ptag,setPtag]= useState(0);
  let [pcolor,setPcolor]= useState(0);
  let [pimg,setPimg]= useState(0);

  useEffect(()=>{
    setPimg(location.state.pimg);
    setPtitle(location.state.ptitle);
    setPprice(location.state.pprices);
    setPtag(location.state.ptag);
    setPcolor(location.state.pcolor);
    setPid(location.state.pids);
    },[])
    console.log(pid);
  return (
    <>
      <Container>
        {
          Db.map((data)=>{
            return <>
              {data.id == pid ? 
              <>
              <img src={data.image} alt="" />
              <h1>{data.title}</h1>
              <h1>{data.tag}%</h1>
              <h1>{data.price}</h1>
              </>
              :""
              
              }
            </>
          })
        }
        <button onClick={() => navigate("/")}>Back</button>
      </Container>
    </>
  )
}

export default Product