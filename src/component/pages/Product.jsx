import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Container from '../layers/Container';
import Db from '../../db.json'

import Star from '../../../public/Star.png'

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
      <Container className='mt-[99px]'>
        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          <div className="">
          {
          Db.map((data)=>{
            return <>
              {data.id == pid ? 
              <>
              <img className='w-[780px] h-[780px] object-contain' src={data.image} alt="" />
              </>
              :""
              
              }
            </>
          })
        }
          </div>
          <div className="">
          {
          Db.map((data)=>{
            return <>
              {data.id == pid ? 
              <>
              <img className='w-[780px] h-[780px] object-contain' src={data.image} alt="" />
              </>
              :""
              
              }
            </>
          })
        }
          </div>
          <div className="">
          {
          Db.map((data)=>{
            return <>
              {data.id == pid ? 
              <>
              <img className='w-[780px] h-[780px] object-contain' src={data.image} alt="" />
              </>
              :""
              
              }
            </>
          })
        }
          </div>
          <div className="">
          {
          Db.map((data)=>{
            return <>
              {data.id == pid ? 
              <>
              <img className='w-[780px] h-[780px] object-contain' src={data.image} alt="" />
              </>
              :""
              
              }
            </>
          })
        }
          </div>
        </div>

        <div className="productdetails mt-[66px]">
          <h1 className='font-bold text-[2.44rem] leading-none text-[#262626] font-dm capitalize'>
          {
          Db.map((data)=>{
            return <>
              {data.id == pid ? 
               data.title
              : null
              
              
              }
            </>
          })
        }
          </h1>
          <div className="mt-[15px] mb-[24px] flex gap-x-[25px] items-center">
            <div className="flex gap-x-[2px] items-center">
              <img className='w-[13px] h-[12px]' src={Star} alt="" />
              <img className='w-[13px] h-[12px]' src={Star} alt="" />
              <img className='w-[13px] h-[12px]' src={Star} alt="" />
              <img className='w-[13px] h-[12px]' src={Star} alt="" />
              <img className='w-[13px] h-[12px]' src={Star} alt="" />
            </div>
            <p className='font-normal text-sm text-[#767676] font-dm capitalize'>1 Review</p>
          </div>
          <div className="flex gap-x-[22px] mb-[26px] items-center">
            <del className='font-normal text-base text-[#767676] font-dm'>$
            {
          Db.map((data)=>{
            return <>
              {data.id == pid ? 
               data.del
              : null
              
              
              }
            </>
          })
        }
            </del>
            <h1 className='font-bold text-xl text-[#262626] font-dm '>$
            {
          Db.map((data)=>{
            return <>
              {data.id == pid ? 
                data.price
              : null
              
              
              }
            </>
          })
        }
            </h1>
          </div>
          <hr className='mb-[29px] '/>
          <div className="flex gap-x-[53px] items-center mb-[30px]">
            <h3 className='font-dm uppercase font-bold text-base leading-[144%] text-[#262626]'>color:</h3>
            <div className="flex gap-x-[15px] items-center relative">
              <div className="w-5 h-5 absolute left-0 hover:translate-x-[-5px] top-1/2 -translate-y-1/2 bg-[#979797] rounded-[50%] hover:h-[28px] hover:w-[28px] cursor-pointer"></div>
              <div className="w-5 h-5 absolute left-[30px] hover:translate-x-[-5px] top-1/2 -translate-y-1/2 bg-[#FF8686] rounded-[50%] hover:h-[28px] hover:w-[28px] cursor-pointer"></div>
              <div className="w-5 h-5 absolute left-[60px] hover:translate-x-[-5px] top-1/2 -translate-y-1/2 bg-[#7ED321] rounded-[50%] hover:h-[28px] hover:w-[28px] cursor-pointer"></div>
              <div className="w-5 h-5 absolute left-[90px] hover:translate-x-[-5px] top-1/2 -translate-y-1/2 bg-[#B6B6B6] rounded-[50%] hover:h-[28px] hover:w-[28px] cursor-pointer"></div>
              <div className="w-5 h-5 absolute left-[120px] hover:translate-x-[-5px] top-1/2 -translate-y-1/2 bg-[#15CBA5] rounded-[50%] hover:h-[28px] hover:w-[28px] cursor-pointer"></div>
            </div>
          </div>
          <div className="mb-[30px] flex gap-x-[76px] items-center">
            <h3 className='font-dm uppercase font-bold text-base leading-[144%] text-[#262626]'>SIZE:</h3>
            <div className="">
              a
            </div>
          </div>
        </div>



        {/* {
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
        } */}
        <button onClick={() => navigate("/")}>Back</button>
      </Container>
    </>
  )
}

export default Product