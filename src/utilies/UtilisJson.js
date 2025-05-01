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
  
  export const dummyProducts = {
    fruits: [
      {
        id: "apple",
        name: "Apple",
        shortDescription: "Fresh, crisp, and juicy apples from Kashmir.",
        longDescription:
          "Fresh, crisp, and juicy apples from Kashmir. Our apples are hand-picked and grown in the best orchards, ensuring you get the highest quality fruit packed with flavor.",
        image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "banana",
        name: "Banana",
        shortDescription: "Sweet bananas rich in potassium and fiber.",
        longDescription:
          "Sweet bananas rich in potassium and fiber. Perfect for a quick snack or blended into a smoothie, these bananas are a healthy, energy-boosting treat.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "pomegranate",
        name: "Pomegranate",
        shortDescription: "Rich in antioxidants and flavor.",
        longDescription:
          "Pomegranates are packed with antioxidants that boost heart health and protect against disease. Their sweet-tart flavor makes them perfect for juices, salads, or snacking.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "mango",
        name: "Mango",
        shortDescription: "Ripe, sweet mangoes perfect for any occasion.",
        longDescription:
          "Ripe, sweet mangoes with a juicy flavor, perfect for eating fresh, blending into smoothies, or using in desserts. Enjoy the tropical taste in every bite.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "orange",
        name: "Orange",
        shortDescription: "Juicy, tangy, and packed with vitamin C.",
        longDescription:
          "These oranges are packed with vitamin C and offer a refreshing, tangy taste. Perfect for eating fresh, juicing, or adding to salads and desserts.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "grapes",
        name: "Grapes",
        shortDescription: "Fresh grapes bursting with flavor and sweetness.",
        longDescription:
          "Our grapes are sweet and bursting with flavor. They are perfect for snacking or adding to your favorite fruit salad. Enjoy them fresh or freeze them for a refreshing treat.",
         image: require('../../public/assests/fruits.jpg'), 
      },
    ],
    vegetables: [
      {
        id: "carrot",
        name: "Carrot",
        shortDescription: "Fresh, crunchy, and sweet carrots from local farms.",
        longDescription:
          "Our carrots are freshly harvested from local farms, known for their crisp texture and rich orange color. Perfect for snacking, cooking, or juicing.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "tomato",
        name: "Tomato",
        shortDescription: "Vibrant and juicy tomatoes for your kitchen.",
        longDescription:
          "These tomatoes are picked at the peak of ripeness, offering a juicy burst of flavor in every bite. Great for salads, sauces, and more.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "broccoli",
        name: "Broccoli",
        shortDescription: "Rich in vitamins and great for healthy meals.",
        longDescription:
          "Our broccoli is full of nutrients and has a rich, earthy flavor. It’s an excellent addition to salads, stir-fries, or steamed as a side dish.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "spinach",
        name: "Spinach",
        shortDescription: "Leafy green spinach packed with iron and vitamins.",
        longDescription:
          "Fresh spinach leaves are rich in iron, vitamins, and antioxidants. Perfect for salads, smoothies, or cooked in various dishes like soups and curries.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "onion",
        name: "Onion",
        shortDescription: "Sharp, flavorful onions perfect for cooking.",
        longDescription:
          "Our onions are the perfect addition to any savory dish. Known for their sharp, tangy flavor, they are versatile in the kitchen, from soups to stir-fries.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "cucumber",
        name: "Cucumber",
        shortDescription: "Cool and refreshing cucumbers for a crisp snack.",
        longDescription:
          "Cucumbers are cool, refreshing, and perfect for salads or eating raw. Their mild flavor also makes them a great addition to sandwiches and wraps.",
         image: require('../../public/assests/fruits.jpg'), 
      },
    ],
    grains: [
      {
        id: "rice",
        name: "Rice",
        shortDescription: "Premium quality rice for all your culinary needs.",
        longDescription:
          "Our rice is of the highest quality, perfect for all types of cooking. Whether you’re making biryani, fried rice, or a simple bowl of steamed rice, it’s sure to complement any meal.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "wheat",
        name: "Wheat",
        shortDescription: "Whole wheat grains for healthy meals.",
        longDescription:
          "Our whole wheat grains are rich in fiber and perfect for making flour to use in bread, cakes, or pancakes. A staple ingredient for any kitchen.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "oats",
        name: "Oats",
        shortDescription: "Healthy and nutritious oats for breakfast.",
        longDescription:
          "Our oats are a healthy and nutritious choice for breakfast. High in fiber, they help keep you full for longer and are perfect for porridge or overnight oats.",
         image: require('../../public/assests/fruits.jpg'), 
      },
    ],
    pulses: [
      {
        id: "lentils",
        name: "Lentils",
        shortDescription: "Protein-packed lentils for soups and curries.",
        longDescription:
          "Lentils are a great source of protein and fiber, making them an excellent choice for a healthy, hearty meal. Perfect for soups, curries, and stews.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "chickpeas",
        name: "Chickpeas",
        shortDescription: "Nutritious chickpeas for salads and hummus.",
        longDescription:
          "Chickpeas are high in protein and fiber, making them a versatile ingredient for many dishes. Use them in salads, curries, or blend into creamy hummus.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "moongdal",
        name: "Moong Dal",
        shortDescription: "Light and healthy moong dal for a nourishing meal.",
        longDescription:
          "Moong dal is light on the stomach and easy to digest. It's perfect for making soups, dals, or using in various Indian dishes.",
         image: require('../../public/assests/fruits.jpg'), 
      },
    ],
    oilseeds: [
      {
        id: "mustard-seeds",
        name: "Mustard Seeds",
        shortDescription: "Small, pungent mustard seeds for cooking.",
        longDescription:
          "Mustard seeds are a key ingredient in many Indian and Asian dishes. They add a pungent, sharp flavor when fried and can be used to make mustard oil.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "sesame-seeds",
        name: "Sesame Seeds",
        shortDescription: "Tiny, crunchy sesame seeds full of flavor.",
        longDescription:
          "Sesame seeds are rich in nutrients and offer a crunchy texture to your dishes. They can be used in baking, salads, or to make tahini.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "sunflower-seeds",
        name: "Sunflower Seeds",
        shortDescription: "Nutritious sunflower seeds for snacking or cooking.",
        longDescription:
          "Sunflower seeds are high in protein, healthy fats, and vitamins. They’re perfect for snacking or adding to granola, salads, or baked goods.",
         image: require('../../public/assests/fruits.jpg'), 
      },
    ],
    aloeVera: [
      {
        id: "aloe-vera-gel",
        name: "Aloe Vera Gel",
        shortDescription: "Pure aloe vera gel for skincare.",
        longDescription:
          "Our aloe vera gel is 100% pure and ideal for skincare. It helps soothe skin irritation, burns, and provides hydration for smooth and glowing skin.",
         image: require('../../public/assests/fruits.jpg'), 
      },
      {
        id: "aloe-vera-leaf",
        name: "Aloe Vera Leaf",
        shortDescription: "Fresh aloe vera leaves for DIY remedies.",
        longDescription:
          "Fresh aloe vera leaves can be used directly to extract gel for skincare. The leaves are perfect for making your own skincare products and home remedies.",
         image: require('../../public/assests/fruits.jpg'), 
      },
    ],
  };
  