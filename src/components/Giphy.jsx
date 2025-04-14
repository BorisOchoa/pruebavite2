export async function Giphy(category){
    const apiKey="TBuL3LMgtWrCJJhEkRI6Yk3zVu8VOh3U";


     const url=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;   

     const f1=await fetch(url);
     const {data}=await f1.json();
     const data4=data.map(element=>({
        id:element.id,
        title:element.title,
        url:element.images.downsized_medium.url
     }))
     console.log(url);
    return data4;
}
