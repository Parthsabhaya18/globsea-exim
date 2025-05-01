"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar.jsx";
import Footer from "../../Footer/Footer.jsx";
import Image from "next/image";
import fruits from "../../../../public/assests/fruits.jpg"; 
import "@/styles/globals.css";
import {dummyProducts} from '../../../utilies/UtilisJson.js'

const ProductDetailPage = () => {
    const router = useRouter();
  const { category, productid } = router.query; 

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (category && productid) {
      const productData = dummyProducts[category]?.find(
        (product) => product.id === productid
      );
      setProduct(productData);
    }
  }, [category, productid]);


  return (
    <>
      <Navbar />
      <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-10">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-4xl font-extrabold text-center text-green-700 mb-14">
      {product?.name}
    </h1>

    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Image centered */}
      <div className="relative w-80 h-80 rounded-lg overflow-hidden">
        <Image
          src={product?.image}
          alt={product?.name}
          height={320}
          width={460}
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Description under the image, with 80% width */}
      <div className="p-6 space-y-4 w-4/5 text-center">
        <p className="text-gray-500 text-lg">{product?.longDescription}</p>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </>
  );
};

export default ProductDetailPage;
