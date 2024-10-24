import { Carousel } from "react-responsive-carousel";
import { img } from "./img/Data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "../Header/Header.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import './cardContianer.css'
import Product from "../Product/Product";
function CarouselEffect() {
  const imageStyle = {
    width: "100%", // Make the image responsive
    height: "800px", // Maintain aspect ratio
    objectFit: "cover", // Cover the container while maintaining aspect ratio
    borderRadius: "8px", // Optional: rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: shadow effect
  };
  // const [images,setImage] = useState();
  // useEffect( () => {
  //   const fetchData = async () => {
  //       const response = await axios.get(
  //         "https://fakestoreapi.com/products/category/jewelery"
  //       );
  //       console.log(response.data);
  //       setImage(response.data)
  //   };

  //   fetchData();
  // }, []);
  return (
    <div className="carousel_container">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        dynamicHeight={true}
        // showArrows={false}
      >
        {img.map((imageItemLink, index) => (
          <div key={index}>
            {" "}
            {/* Added key and div wrapper */}
            <img src={imageItemLink} style={imageStyle} />
          </div>
        ))}
      </Carousel>
      {/* <div className={classes.hero_img}></div>
      {images?.map((a)=> {
       return  <>
       <h1>{a.title}</h1>
       <p>{a.description}</p>
          <img src={a.image} />
<p>{a.price}</p>
        </>; */}
      {/* } */}
      {/* )} */}

      <div className="card_container">
        <Card
          title="electronic"
          request="https://fakestoreapi.com/products/category/electronics"
        />
        <Card
          title="fashion"
          request="https://fakestoreapi.com/products/category/women's clothing"
        />
        <Card
          title="men"
          request="https://fakestoreapi.com/products/category/men's clothing"
        />
        <Card
          title="jewelry"
          request="https://fakestoreapi.com/products/category/jewelery"
        />
      </div>
      <div>
        <Product />
      </div>
    </div>
  );
}

export default CarouselEffect;
