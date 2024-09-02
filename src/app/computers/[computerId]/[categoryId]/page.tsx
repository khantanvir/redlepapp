export default function ComputerDetails({params}: {params: {computerId: string, categoryId: string}}) {
    return <h1>Computer Id: {params.computerId}, Category Id: {params.categoryId}</h1>
}