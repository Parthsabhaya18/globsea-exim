"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import "@/styles/globals.css";
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import {dummyProducts} from '../../utilies/UtilisJson.js'

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const data = dummyProducts[category] || [];
      setProducts(data);
    }
  }, [ category]);

  const formatTitle = (text) =>
    text?.split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");

  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-4xl font-bold text-gray-700">No Products Found</h1>
        <p className="text-gray-500 mt-4">Please check back later or choose another category.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Head>
        <title>{formatTitle(category)} | GlobSea Exim</title>
      </Head>

      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-green-700 mb-14">
            {formatTitle(category)} Products
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
  const bgColorClass = index % 2 === 0 ? 'bg-green-100' : 'bg-yellow-100';

  return (
    <Link
      href={`/products/${category}/${product.id}`}
      key={product.id}
      className="group rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden transform hover:scale-105 hover:translate-y-1 bg-white"
    >
      <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <Image
          src={product?.image}
          alt={product.name}
          height={200}
          width={200}
          objectFit="cover"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">{product?.name}</h2>
        <p className="text-gray-500 text-sm line-clamp-3">{product?.shortDescription}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-green-600 text-lg font-bold">{product?.price}</span>
          <span className="text-blue-600 text-sm font-medium hover:bg-blue-50 px-2 py-1 rounded-md group-hover:underline cursor-pointer">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
})}

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CategoryPage;
