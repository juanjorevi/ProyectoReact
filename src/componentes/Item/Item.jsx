import React from "react";
import "./item.css";
const Item =({Data})=>{
    return(
        <div className=" xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow-lg bg-gray-100 p-6 rounded-lg">
                <div>
                     <img src={Data.imgUrl} className="image object-contain bg-placeholder h-60 rounded w-full object-center mb-6" alt={Data.nombre} />
                </div>
                <h3 className="h-20 tracking-widest text grey-800 font-bold title font">{Data.nombre}</h3>
                <p className="leading-relaxed text-base">tipo :{Data.tipo}</p>
            </div>
        </div>
    )
}

export default Item;