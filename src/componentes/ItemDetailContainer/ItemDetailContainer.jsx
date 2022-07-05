import React,{useEffect,useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const peli={id:1,Imagen:"https://m.media-amazon.com/images/M/MV5BZTZmZjY1M2EtNmI0My00MTEyLTg4YmQtMTBkYjkxNDMyZTU1XkEyXkFqcGdeQXVyNjI4OTg2MDE@._V1_.jpg", titulo:"the fittest"}

function ItemDetailContainer() {
    const [data,setData]=useState({});

    useEffect(()=>{
        const getData=new Promise (resolve=>{
            setTimeout(() => {
                resolve(peli);
            }, 3000);
        });
        getData.then(res=>setData(res));
    },[]);

    return(
        <>
        <ItemDetail data ={data}/>
        </>
    )
}

export default ItemDetailContainer;