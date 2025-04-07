"use client"
import TypographyText from "@/common/Text";
import { Box } from "@mui/material";
import { useState } from "react";

const ContactUs = () =>{
const [name,setName] = useState("");
const [product,setProduct] = useState("");
const [phoneNo,setPhoneNo] = useState("");
const [email,setEmail] = useState("");
const [Message,setMessage] = useState("");

     const ContactUsjson = [
        {
            placeholder: 'Your Name',
        },
        {
            placeholder: 'Which product are you interested in?',
        },
        {
            placeholder: 'Your Phone Number',
        },
        {
            placeholder: 'Your Email',
        },
        {
            placeholder: 'Your Message',
        },
    ]
    return(
        <Box className='main'>
        <TypographyText>
        Contact us
        </TypographyText>
        <Box>

        </Box>
        </Box>
    )
}
export default ContactUs;