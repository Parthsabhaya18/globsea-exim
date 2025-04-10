"use client";
import CustomButton from "@/common/CustomButton";
import TypographyText from "@/common/Text";
import { Box, Input, Typography } from "@mui/material";
import { useState } from "react";
import LocationMap from './LocationMap.jsx'

const ContactUs = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const ContactUsjson = [
    {
      placeholder: "Your Name",
      value: name,
      onChange: (e) => {
        setName(e.target.value);
      },
      type: "text",
    },
    {
      placeholder: "Which product are you interested in?",
      value: product,
      onChange: (e) => {
        setProduct(e.target.value);
      },
      type: "text",
    },
    {
      placeholder: "Your Phone Number",
      value: phoneNo,
      onChange: (e) => {
        setPhoneNo(e.target.value);
      },
      type: "tel",
    },
    {
      placeholder: "Your Email",
      value: email,
      onChange: (e) => {
        setEmail(e.target.value);
      },
      type: "email",
    },
    {
      placeholder: "Your Message",
      value: Message,
      onChange: (e) => {
        setMessage(e.target.value);
      },
      type: "text",
      multiline:'multiline',
      rows:4
    },
  ];
  return (
    <Box className="main" id='contactUs'>
      <TypographyText>Contact us</TypographyText>
     <Box className="container-main" >
     <Box className="Contact-us" >
        <Typography
          sx={{
            color: "var(--color-contact-us)",
            fontSize: "var(--font-title)",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: "100%",
            padding: "0px 30px",
          }}
        >
          {ContactUsjson.map((item, index) => {
            return (
              <Input
              key={index}
              className={`contact-us-input ${item.multiline ? 'multiline-input' : ''}`}
                fullWidth
                placeholder={item.placeholder}
                value={item.value}
                onChange={item.onChange}
                type={item.type}
                disableUnderline="false"
                multiline={item?.multiline}
                rows={item?.rows}
              />
            );
          })}
        </Box>
        <CustomButton
          title="Send Enquiry"
          style={{
            borderRadius: "20px",
            padding: "5px 20px",
            backgroundColor: "var(--color-text)",
            fontWeight: "bold",
            fontSize: "var(--font-large)",
            textTransform: "none",
          }}
        />
      </Box>
      <Box className="Contact-us">
        <LocationMap/>
      </Box>
     </Box>
    </Box>
  );
};
export default ContactUs;
