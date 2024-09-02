export default function Docs({ params }:{
    params: { slug: string[]; };
}) {
    if(params.slug?.length === 3){
        return <h1>Returen the main segment {params.slug[0]} and another {params.slug[1]} last one is {params.slug[2]}</h1>
    }else if(params.slug?.length === 2){
        return <h1>Returen the main segment {params.slug[0]} and another {params.slug[1]}</h1>
    }
    return <h1>This is Doc List page</h1>
}