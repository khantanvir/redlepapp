export default function ProductDetails({ params } : { params: { productId: string } }) {
    return <h1>This is Product Details page for {params.productId}</h1>
}