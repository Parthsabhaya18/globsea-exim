import { Box, Rating, Typography } from "@mui/material";
import Slider from "react-slick";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../DetailsManagment.css";
import testimonial from "../../../../public/assests/testimonial.jpg"; // Ensure this path is correct

const testimonials = [
  {
    company: "Northern Trade Connections Inc.",
    country: "Canada",
    rating: 4,
    quote:
      "JV & Sons Export stands out for their excellent customer service and transparency in dealings. Their dedication to providing the best agricultural products has earned them our trust and loyalty.",
  },
  {
    company: "Gulf Import Solutions",
    country: "UAE - United Arab Emirates",
    rating: 5,
    quote:
      "JV & Sons Export consistently delivers top-notch agricultural products. Their fresh and flavorful mangoes are a hit in our market, earning us repeat customers.",
  },
  {
    company: "Northern Trade Connections Inc.",
    country: "Canada",
    rating: 4,
    quote:
      "JV & Sons Export stands out for their excellent customer service and transparency in dealings. Their dedication to providing the best agricultural products has earned them our trust and loyalty.",
  },

 
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box
      className="testimonial-wrapper"
      sx={{
        backgroundImage: `url(${testimonial.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box className="overlay" />

      {/* Slider Content */}
      <Box className="testimonial-content">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <Box key={index} className="testimonial-slide">
              <Typography variant="h5" className="testimonial-title">
                {item.company}
              </Typography>
              <Typography variant="subtitle1" className="testomonial-subtitle">
                {item.country}
              </Typography>
              <Rating
                value={item.rating}
                readOnly
                sx={{
                  mb: 2,
                  "& .MuiRating-iconEmpty": {
                    color: "inherit",
                  },
                }}
              />
              <Typography
                variant="h6"
                fontStyle="italic"
                className="quote-text"
              >
                <FormatQuoteIcon
                  sx={{
                    verticalAlign: "text-bottom",
                    mr: 1,
                    color: "var(--color-offWhite)",
                    transform: "rotate(180deg)",
                  }}
                />
                {item.quote}
                <FormatQuoteIcon
                  sx={{
                    verticalAlign: "text-top",
                    ml: 1,
                    color: "var(--color-offWhite)",
                  }}
                />
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Testimonials;
