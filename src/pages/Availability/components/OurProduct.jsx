import TypographyText from "@/common/Text";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import fruits from "../../../../public/assests/fruits.jpg";
import vegetables from "../../../../public/assests/vegetables.jpg";
import grains from "../../../../public/assests/grains.jpg";
import pulses from "../../../../public/assests/pulses.jpg";
import oilseeds from "../../../../public/assests/oilseeds.jpg";
import etc from "../../../../public/assests/etc.jpg";

// Convert title to slug
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const categories = [
  { title: "Fruits", image: fruits },
  { title: "Vegetables", image: vegetables },
  { title: "Grains", image: grains },
  { title: "Pulses", image: pulses },
  { title: "Oil Seeds", image: oilseeds },
  { title: "Aelovera, Charcoal", image: etc },
];

const OurProduct = () => {
  return (
    <Box className="main px-4 sm:px-6 lg:px-8 py-16 bg-white" id="aboutUs">
      <TypographyText>OUR PRODUCTS</TypographyText>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {categories.map((cat, index) => (
          <Link href={`/products/${slugify(cat.title)}`} key={index}>
            <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="w-full h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className=" absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/30 shadow-lg transition-all group-hover:scale-105">
                <h3 className="text-md sm:text-lg md:text-xl font-semibold tracking-wide">
                  {cat.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Box>
  );
};

export default OurProduct;
