"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
export default function Product() {
    const [products, setProducts] = useState([]);
    const productId = 100
    async function fetchProducts() {
        const res = await fetch('http://127.0.0.1:8000/api/products')
        const data = await res.json()
        const productData = await data.result.value;
        setProducts(productData);
        console.log(productData)
    }
    useEffect(() =>{
        fetchProducts()
    },[]);
    return(
        <>
        <h1>Product List</h1>
        {
            products.length > 0 ? (products.map((product) => (
                <h3 key={product.id}><Link href="products/1">{product.title}</Link></h3>
            ))
            ):(
                <h3>No Products Found</h3>
            )
        }
        </>
    )
}