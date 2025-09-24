import React from "react"
import Item from "./Item"
import "../css/Cards.css"

const ItemList = ({data})=>{
    return (
        <div  className ="Cards"  style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
            {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
        </div>
    )
}

export default ItemList