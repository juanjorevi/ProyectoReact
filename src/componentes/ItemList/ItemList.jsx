import React from "react";
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemList({Data}) {
    return(
        <>
        {Data.map(thisData=>{
            return(
                <ItemDetail Data={thisData} key={thisData.id}/>
            )
        }
            )}
        
        </>
    )
}

export default ItemList;