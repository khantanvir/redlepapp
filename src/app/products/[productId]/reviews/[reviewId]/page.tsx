function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}
export default function ReviewDetails({ params } : { params: { productId: string, reviewId: string } }) {
    const random = getRandomInt(3);
    if(random === 3){
        throw new Error('Something went wrong');
    }
    return <h1>Review {params.reviewId} for product {params.productId}</h1>
}