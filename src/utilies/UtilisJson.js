 const LocationAndAvailabilty = [
    {
        TITLE: 'CALL US ANYTIME',
        DES:'+91 78740 74194'
    },
    {
        TITLE: 'SUNDAY CLOSED',
        DES:'Mon - Sat 10:00AM to 9:00PM'
    },
    {
        TITLE: 'WE ARE LOCATED HERE!!',
        DES:'A-502, 5th Floor, Pragati IT Park, Near AR Mall, Mota Varachha, Surat, Gujarat, India-394105'
    },
]
export default LocationAndAvailabilty;

import Images from './Images';

export const OurServicesJson = [
    {
        image: Images.SERVICE1,
        name: 'CUSTOMS CLEARANCE ASSISTANCE',
        desc: 'Ensure smooth transit of goods across borders with our expert assistance in customs clearance procedures.'
    },
    {
        image: Images.SERVICE2,
        name: 'PRODUCT SOURCING AND QUALITY ASSURANCE',
        desc: 'Source high-quality products from reliable manufactures and ensure compliance with international quality standars.'
    },
    {
        image: Images.SERVICE3,
        name: 'LOGISTICS AND SUPPLY CHAIN MANAGEMENT',
        desc: 'Optimize delivery timelines and reduce costs with our end-to-end logistics solutions, including warehousing, transportaion, and supply chain managment.'
    },
    {
        image: Images.SERVICE4,
        name: 'CUSTOMIZED PACKAGING SOLUTIONS',
        desc: 'Protect goods during transit and enhance brand visiblity with our customized packaging solutions tailored to your specific requirements.'
    },
]

// components/footer/footerData.ts

export const footerData = {
    about: {
      title: "GLOBSEA EXIM",
      lines:
        'Your trusted partner for global exports. Experience, quality, and unparalleled solutions tailored to your export needs.'
    
    },
    contact: {
      address:"A-502, 5th Floor, Pragati IT Park, Near AR Mall, Mota Varachha, Surat, Gujarat, India - 394105",
      PhoneWhatsApp :' +91 79841 41511',
      EmailInfo : 'globseaexim@gmail.com',
      // EmailExport :' export@jvsonsexport.com'
    },
    links: [
      { label: "Home", href: "#hero" },
      { label: "About us", href: "#aboutUs" },
      { label: "Services", href: "#ourServices" },
      { label: "Products", href: "#" },
    ],
    services: [
      "Customs Aid",
      "Product Assurance",
      "Logistics Oversight",
      "Market Compliance",
      "Packaging Solutions",
      "Post-Sale Support"
    ],
    social: [
      { icon: "WhatsApp", href: "https://wa.me/917984141511" },
      { icon: "facebook", href: "https://www.facebook.com/share/17x9ZuCVVq/?mibextid=wwXIfr" },
      { icon: "instagram", href: "https://www.instagram.com/globsea.exim?igsh=MTRnazR2ZGRsOHM1cQ%3D%3D&utm_source=qr" },
      { icon: "linkedin", href: "https://www.linkedin.com/company/globsea-exim/" }
    ],
    copyright:{
      one:"© Copyright ",
      two:'GLOBSEA EXIM',
      three:'. All Rights Reserved'
    }
  };
  