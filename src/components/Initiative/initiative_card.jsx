import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "50%",
        padding: "10px",
        position: "absolute",
        right: "10px",
        top: "40%",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      ►
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "50%",
        padding: "10px",
        position: "absolute",
        left: "10px",
        top: "40%",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      ◄
    </div>
  );
};

const SimpleCard = ({ images = [], title, description }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isHovered,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "500px", // Updated width to make the card wider
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "#1e3c72",
        color: "white",
      }}
    >
      {/* Image Slider */}
      {images.length > 0 ? (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  height: "250px", // Adjust height accordingly for a better proportion
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div
          style={{
            height: "250px", // Adjust height accordingly
            textAlign: "center",
            lineHeight: "250px",
            backgroundColor: "#ccc",
          }}
        >
          No images available
        </div>
      )}

      {/* Card Content */}
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
