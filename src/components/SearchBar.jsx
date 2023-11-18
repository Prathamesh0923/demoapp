const Search=(props)=>{
    const handleChange = props.handleChange;

return(
    <>
    <input type="search" onChange={(e)=>handleChange(e.target.value)} value={props.s}></input>
    </>
)
}    

export default Search