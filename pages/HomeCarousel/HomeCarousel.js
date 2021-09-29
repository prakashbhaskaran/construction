import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
const HomeCarousel = () => {
  const photo1 =
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80";
  return (
    <div>
      <style>
        {`
          .carousel-item{
            height: 674px;
        } 
        .carousel-item Image{
            height: 100%;
            object-fit:cover;
            object-position:center;
        }
          `}
      </style>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={photo1}
            alt="First slide"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={photo1}
            alt="Second slide"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={photo1}
            alt="Third slide"
            layout="fill"
            objectFit="cover"
             objectPosition="center"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
