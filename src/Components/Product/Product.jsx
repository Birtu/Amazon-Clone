import axios from 'axios'
import React, { startTransition, useEffect, useState } from 'react'
import './product.css'
import Rating from '@mui/material/Rating'
export default function Product() {
    const [data,setData] = useState()
    useEffect(()=>{
        const request = async () =>{
            const res = await axios.get("https://fakestoreapi.com/products");
            setData(res.data)
            
        }
        request()
        console.log(data);
    },[])
  return (
    <div className="product_container">
      {data?.map((item) => (
        <div className="product">
          <div className="product_image">
            <img src={item.image} alt="" />
          </div>
          <div>
            <p className='title'>{item.title}</p>
            <div className="rating">
              <p className='rating_p'>
                <Rating
                  name="size-small"
                  value={item.rating.rate}
                  precision={0.1}
                  readOnly
                />
              </p>
              <p className='count_p'>{item.rating.count}</p>
            </div>
            <p className='price'>${item.price}</p>
          </div>
          <button className='add_to_cart_button'>add to cart</button>
        </div>
      ))}
    </div>
  );
}


