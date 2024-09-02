import Link from "next/link";
export default function Product() {
    const productId = 100
    return(
        <>
        <h3><Link href="products/1">Product 1</Link></h3>
        <h3><Link href="products/2">Product 2</Link></h3>
        <h3><Link href="products/3">Product 3</Link></h3>
        <h3><Link href="products/4">Product 4</Link></h3>
        <h3><Link href={`products/${productId}`}>Product {productId}</Link></h3>
        
        </>
    )
}