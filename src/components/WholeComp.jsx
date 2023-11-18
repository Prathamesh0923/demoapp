import { useState } from "react";
import Table from "./ProductTable";
import Search from "./SearchBar";
const Whole=()=>{
    const [search,setsearch]=useState("")
    const handleChnage=(val)=>{
            setsearch(val)
            // console.log(val)
    }
    return(
        <>
        <Search  handleChange={handleChnage} s={search}/>
        <Table s={search}/>
        </>
    )
}
export default Whole