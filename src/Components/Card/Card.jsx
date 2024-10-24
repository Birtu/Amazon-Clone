import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import './Card.css'
export default function Card({title,request}) {
    const [image, setImage] = useState()
    useEffect(()=>{
        const apiRequest = async () =>{
            const res = await  axios.get(request)
            const data = res.data
            setImage(data[Math.floor(Math.random() * data.length)])
        }
        apiRequest();
    },[])
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <div className="card_image">
        <img src={image?.image} alt="" />
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png"
          alt=""
        /> */}
      </div>

      <a href="#" className="shop_now">
        {" "}
        Shop now
      </a>
    </div>
  );
}
